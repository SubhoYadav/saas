// import v4 as uuid from "uuid"
// common js syntax
const { v4: uuid } = require("uuid");

const generateId = (prefix) => {
  return prefix + uuid().split("-").join("");
};

module.exports = generateId;
