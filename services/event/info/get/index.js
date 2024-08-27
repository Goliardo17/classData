const getEventInfo = (eventId) => {
  const filter = {
    key: "id",
    value: eventId,
  };
  return repo.event.info.select(filter)[0];
};

module.exports = getEventInfo;
