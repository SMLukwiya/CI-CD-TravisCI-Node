require('dotenv').config();

module.exports = {
  googleClientID: process.env.googleClientID,
  googleClientSecret: process.env.googleClientSecret,
  mongoURI: process.env.DEV_MONGOURI,
  cookieKey: '123123123',
};
