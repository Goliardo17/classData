const editEventCategories = (newEvent) => {
  const filter = {
    key: "eventId",
    value: newEvent.info.id,
  };
  repo.event.categories.delete(filter);

  newEvent.categories.forEach((item) => {
    const record = {
      eventId: newEvent.info.id,
      categoryId: item,
    };
    repo.event.categories.insert(record);
  });
};

module.exports = editEventCategories;
