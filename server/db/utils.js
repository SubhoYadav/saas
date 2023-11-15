const connection = require("./mysql");

const dbQueryExecuter = (dbQuery, rows = true) => {
  return new Promise((resolve, reject) => {
    connection.query(dbQuery, (error, result) => {
      if (error) {
        reject({ status: false, msg: error.message });
      } else if (rows) {
        resolve({ status: true, msg: "success", data: result });
      } else if (result.length == 0) {
        reject({ status: false, msg: "Error Data not found" });
      } else {
        resolve({ status: true, msg: "success", data: result[0] });
      }
    });
  });
};

module.exports = dbQueryExecuter;
