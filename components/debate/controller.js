const store = require('./store')

const saveDebate = (idUser, debate) =>
  new Promise((resolve, reject) => {
    resolve(store.saveDebate(idUser, debate))
  })

const getDebates = () =>
  new Promise((resolve, reject) => {
    resolve(store.getDebates())
  })

module.exports = {
  saveDebate,
  getDebates
}