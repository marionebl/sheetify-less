const less = require('less')
const xtend = require('xtend')

module.exports = sheetifyLess

// less plugin for Sheetify
// (str, str, obj, fn) -> null
function sheetifyLess (filename, source, options, done) {
  const settings = xtend({filename}, options)

  less.render(source, settings, function (error, results) {
    if (error) {
      return done(error)
    }
    done(null, String(results.css))
  })
}
