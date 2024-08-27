const getEventCategories = (eventId) => {
  const filter = {
    key: "eventId",
    value: eventId,
  };
  return repo.event.categories.select(filter);
};

module.exports = getEventCategories;
