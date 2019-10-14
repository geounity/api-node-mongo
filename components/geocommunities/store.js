const debug = require("debug")("geounity:store:geocommunity");

// Instancia de base de datos con Sequelize
const db = require("db");
const config = require("../../../db/config");

let service, geocommunity;

const getContinents = async () => {
  debug("List of continents");
  try {
    service = await db(config.dev);
  } catch (e) {
    return next(e);
  }
  geocommunity = service.Geopolitic;
  let continents = await geocommunity.getContinents();
  return continents;
};

const getCountries = async () => {
  debug("List of continents");
  try {
    service = await db(config.dev);
  } catch (e) {
    return next(e);
  }
  geocommunity = service.Geopolitic;
  let countries = await geocommunity.getCountries();
  return countries;
};

const getUuidGlobal = async () => {
  debug("uuid of global")
  try {
    service = await db(config.dev)
  } catch (e) {
    return next(e)
  }
  geocommunity = service.Geopolitic
  let uuid = await geocommunity.getUuidByNameAndLevel('Global', 1)
  return uuid
}

const getCountriesByContinent = async continent => {
  debug(`List of countries in ${continent}`);
  try {
    service = await db(config.dev);
  } catch (e) {
    return next(e);
  }
  geocommunity = service.Geopolitic;
  let countries = await geocommunity.getCountriesByContinent(continent);
  return countries;
};

const getStatesByCountry = async country => {
  debug(`List of states in ${country}`);
  try {
    service = await db(config.dev);
  } catch (e) {
    return next(e);
  }
  geocommunity = service.Geopolitic;
  let states = await geocommunity.getStatesByCountry(country);
  return states;
};

module.exports = {
  getContinents,
  getCountries,
  getUuidGlobal,
  getCountriesByContinent,
  getStatesByCountry
};
