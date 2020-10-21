const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

require('dotenv').config()

module.exports = withPlugins([optimizedImages], {
  env: {
    APP_NAME: process.env.APP_NAME
  }
})
