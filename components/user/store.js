const debug = require('debug')('geounity:store:user')

const Model = require("./model");

// Instancia de base de datos con Sequelize
const db = require("db");
const config = require("../../../db/config");

let service, userPG

const addUser = async (user) => {
  debug('Save new user in Mongo and Postgres')
  const myUser = new Model(user);
  myUser.save();
  try {
    service = await db(config.dev)
  } catch (e) {
    return next(e)
  }
  userPG = service.User
  let newUser = await userPG.saveUser(user)
  return newUser
};

const getUsers = async filterUser => {
  let filter = {};
  if (filterUser) {
    filter = { username: filterUser };
  }
  const users = await Model.find(filter);
  return users;
};

module.exports = {
  add: addUser,
  list: getUsers
};
