const userModel = require("../model/userM.js");

const userAdd = (request, response) => {
  const userObj = request.body;
  console.log(userObj);
  const userAddQueryResponse = userModel.userAdd(userObj);
  if (!userAddQueryResponse) {
    return response.json({
      status: false,
      msg: "Error in userAdd controller",
      data: null,
    });
  }
  return response.json({
    status: true,
    msg: "User registered successfully",
    data: null,
  });
};

const userLogin = async (request, response) => {
  const userObj = request.body;
  console.log(userObj);
  const userLoginQueryResponse = await userModel.userView(userObj);

  if (!userLoginQueryResponse.status) {
    userLoginQueryResponse.msg = "Error in user login";
  } else {
    userLoginQueryResponse.msg = "User logged in successfully";
  }
  return response.json(userLoginQueryResponse);
};

const userList = async (request, response) => {
  const userObj = request.body;
  if (request.query.search) {
    userObj.searchString = request.query.search;
    const userListSearchQueryResponse = await userModel.userList(userObj);
    return response.json(userListSearchQueryResponse);
  }
  const userListQueryResponse = await userModel.userList(userObj);

  if (!userListQueryResponse.status) {
    userListQueryResponse.msg = "Error in user list";
  }
  userListQueryResponse.msg = "User list found";
  return response.json(userListQueryResponse);
};

module.exports = { userAdd, userLogin, userList };
