const configJson = require('./config.json');

const env = process.env.NODE_ENV ?? 'development';
const config = configJson[env];

if (!config) {
    throw new Error(`Cannot find config for env ${env}`);
}

module.exports = config;