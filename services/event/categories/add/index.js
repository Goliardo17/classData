const addEventCategories = (newEvent) => {
  newEvent.categories.forEach((item) => {
    const record = {
      eventId: newEvent.info.id,
      categoryId: item,
    };
    repo.event.categories.insert(record);
  });
};

module.exports = addEventCategories;
