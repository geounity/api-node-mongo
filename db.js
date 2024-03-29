const chalk = require('chalk')

const db = require('mongoose')

db.Promise = global.Promise

const connect = async (url) => {
  await db.connect(url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  console.log(chalk.green('[db] Conected succefull!!'))
}

module.exports = connect