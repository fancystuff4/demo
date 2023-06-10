
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./fancystuff4.cjs.production.min.js')
} else {
  module.exports = require('./fancystuff4.cjs.development.js')
}
