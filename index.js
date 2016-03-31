var get = require('simple-get')

var REGISTRY = 'https://registry.npmjs.org/'

module.exports = function (name, version, callback) {
  var url = REGISTRY + name
  get.concat(url, function (err, res, data) {
    if (err) return callback(err)
    try {
      var pkg = JSON.parse(data.toString())
    } catch (e) {
      callback(new Error('could not parse registry response'))
    }
    if (!pkg.time[version]) {
      return callback(new Error('package was never published'))
    }
    var stillPublished = pkg.versions[version] === undefined
    callback(null, stillPublished)
  })
}
