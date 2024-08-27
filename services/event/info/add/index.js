const { models } = require("../../../../models")

const event = models.repo.local.data.event

const addEventInfo = (newEvent) => {
  return event.info.insert(newEvent);
};

module.exports = addEventInfo;
