const store = require('./store')

const addUser = user =>
  new Promise((resolve, reject) => {
    if (!user.username || !user.email) {
      reject('Empty username or email')
      return false
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