const { models } = require("../../../../models");
const { testing } = require("./test");

const authData = models.repo.local.data.user.auth;

const run = (newUser) => {
  return authData.insert(newUser);
};

const addUserAuth = {
  run,
  test: (status) => {
    testing(status, authData, run);
  },
};

module.exports = addUserAuth;
