const debug = require("debug")("geounity:store:debate");

// Instancia de base de datos con Sequelize
const db = require("db");
const config = require("../../../db/config");

let service, debatePG;

const getDebates = async () => {
  debug('Get all debates')
  try {
    service = await db(config.dev)
  } catch (e) {
    return next(e)
  }
  debatePG = service.Debate
  let debates = await debatePG.getDebates()
  return debates
}

const saveDebate = async (idUser, debate) => {
  debug("Save new debate")
  try {
    service = await db(config.dev)
  } catch (e) {
    return next(e)
  }
  debatePG = service.Debate
  let newDebate = await debatePG.saveDebate(idUser, debate)
  return newDebate
}

module.exports = {
  saveDebate,
  getDebates
}