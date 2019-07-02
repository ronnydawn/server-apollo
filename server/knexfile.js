const path = require('path')

module.exports = {
  client: 'mysql',
  connection: process.env.DATABASE_URL || {
    host: '127.0.0.1',
    user: 'pwadba',
    password: 'pwadba',
    database: 'pwaproj',
  },
  migrations: {
    directory: path.join(__dirname, 'src', 'db', 'migrations'),
  },
  seeds: {
    directory: path.join(__dirname, 'src', 'db', 'seeds'),
  },
}
