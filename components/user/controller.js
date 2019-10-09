const store = require('./store')

const addUser = name =>
  new Promise((resolve, reject) => {
    if (!name) {
      reject('Invalid name')
      return false
    }
    const user = {
      name
    }
    store.add(user)
    resolve(user)
  })

const getUsers = (filterUser) =>
  new Promise((resolve, reject) => {
    resolve(store.list(filterUser))
  })

module.exports = {
  addUser,
  getUsers
}