
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./your-package-name-you-want-to-see-on-npm-lol.cjs.production.min.js')
} else {
  module.exports = require('./your-package-name-you-want-to-see-on-npm-lol.cjs.development.js')
}
