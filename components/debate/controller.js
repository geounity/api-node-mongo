const store = require('./store')

const saveDebate = (idUser, debate) =>
  new Promise((resolve, reject) => {
    resolve(store.saveDebate(idUser, debate))
  })

module.exports = {
  saveDebate
}