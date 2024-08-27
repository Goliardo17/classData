const { cases } = require("./cases")

const testing = (status, db, feature) => {
  console.log("status: ", status);
  console.log("data places: ", db.places);
  console.log("feature: ", feature);
};

module.exports = { testing };
