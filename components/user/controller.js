const store = require('./store')

const addUser = user =>
  new Promise((resolve, reject) => {
    if (!user.username || !user.email) {
      reject('Empty username or email')
      return false
    }
    store.add(user).then((res) => resolve(res))
  })

const getUsers = (filterUser) =>
  new Promise((resolve, reject) => {
    resolve(store.list(filterUser))
  })

module.exports = {
  addUser,
  getUsers
}