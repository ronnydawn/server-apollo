const path = require('path')

module.exports = {
    client: 'mysql',
    connection: {
        host: '192.168.1.17',
        user: 'root',
        password: '',
        database: 'study',
    },
    migrations: {
        directory: path.join(__dirname, 'src', 'db', 'migrations'),
    },
    seeds: {
        directory: path.join(__dirname, 'src', 'db', 'seeds'),
    },
}
