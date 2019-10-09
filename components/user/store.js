const Model = require('./model')

const addUser = user => {
  const myUser = new Model(user)
  myUser.save()
}

const getUsers = async (filterUser) => {
  let filter = {}
  if (filterUser) {
    filter = { username: filterUser }
  }
  const users = await Model.find(filter)
  return users
}

module.exports = {
  add: addUser,
  list: getUsers
}