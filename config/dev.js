require('dotenv').config();

module.exports = {
  googleClientID: process.env.googleClientID,
  googleClientSecret: process.env.googleClientSecret,
  mongoURI: process.env.DEV_MONGOURI,
  cookieKey: '123123123',
  redisUrl: 'redis://127.0.0.1:6379'
};
