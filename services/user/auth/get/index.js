const getUserAuth = (userId) => {
  const filter = {
    key: "id",
    value: userId,
  };
  return repo.user.auth.select(filter);
}; // get

module.exports = getUserAuth;
