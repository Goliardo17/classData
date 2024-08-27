const editUserAuth = (newState) => {
  const filter = {
    key: "id",
    value: newState.auth.id,
  };
  return repo.user.auth.update(filter, newState);
}; // edit

module.exports = editUserAuth;
