//Separate keys into visible and private (production or development)
//NODE_ENV - option add hosting
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./keys.herok');
  } else {
    module.exports = require('./keys.herok');
  }