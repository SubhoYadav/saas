const dbQueryExecuter = require("../db/utils.js");
const generateId = require("../utils/generateId.js");

const tableName = "user";
const userAdd = async (userObj) => {
  try {
    const userId = generateId("USER");
    const query = `

  INSERT INTO 
  ${tableName} 
  (id, user_id, user_name, user_email, user_mobile, user_password) VALUES 
  (NULL, '${userId}', '${userObj.userName}', '${userObj.userEmail}', '${userObj.userMobile}', '${userObj.userPassword}');

  ;`;
    const result = await dbQueryExecuter(query);
    return result;
  } catch (err) {
    return err;
  }
};

const userView = async (userObj) => {
  try {
    const query = `

  SELECT user_id, user_role, socket_event
  FROM ${tableName} 
  WHERE user_email = "${userObj.userEmail}" AND user_password = "${userObj.userPassword}";
  ;
  
  `;
    const result = await dbQueryExecuter(query, false);
    return result;
  } catch (err) {
    return err;
  }
};

const userList = async (userObj) => {
  let query = null;

  try {
    if (userObj.searchString) {
      query = `
      SELECT * 
      FROM ${tableName}
      WHERE user_name LIKE "%${userObj.searchString}%" OR user_email LIKE "%${userObj.searchString}%" OR user_mobile LIKE "%${userObj.searchString}%" OR user_role LIKE "%${userObj.searchString}%"
      OR src LIKE "%${userObj.searchString}%"
      `;
    } else if (userObj.filter) {
      let whereQuery = "";
      for (let key in userObj.filter) {
        if (userObj.filter[key]) {
          whereQuery += `${key} = '${userObj.filter[key]}' AND `;
        }
      }
      whereQuery += "1";
      query = `
      SELECT * 
      FROM ${tableName}
      WHERE ${whereQuery}
      `;
      console.log("|||| ", query);
    } else {
      query = `
      SELECT * 
      FROM ${tableName} 
      WHERE 1;  
      `;
    }

    const result = await dbQueryExecuter(query, true);
    return result;
  } catch (err) {
    return err;
  }
};

module.exports = {
  userAdd,
  userView,
  userList,
};
