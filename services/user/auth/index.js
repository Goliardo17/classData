const get = require("./get");
const add = require("./add");
const edit = require("./edit");

const userAuthServices = {
  do: {
    add: add.run,
    get: get.run,
    edit: edit.run
  },
  test: {
    add: add.test,
    get: get.test,
    edit: edit.test
  }
};

module.exports = userAuthServices;