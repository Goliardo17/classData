const editEventInfo = (newEvent) => {
  const filter = {
    key: "userId",
    value: newEvent.userId,
    newState: newEvent,
  };

  repo.event.info.update(filter);
};

module.exports = editEventInfo;
