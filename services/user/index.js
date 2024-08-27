const auth = require("./auth");
const categories = require("./categories");
const info = require("./info");

const userServices = {
  auth,
  info,
  categories,
};

module.exports = userServices;
