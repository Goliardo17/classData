const get = require("./get");
const add = require("./add");
const edit = require("./edit");

const userAuthServices = {
  get,
  edit,
  add,
};

module.exports = userAuthServices;