var fs = require('fs')
var path = require('path')

function filterDir (dir, ext, callback) {
  var filteredFiles = []
  fs.readdir(dir, function (err, files) {
    if (err) {
      return callback(err)
    }
    files.forEach(function (file) {
      if(path.extname(file) === '.' + ext) {
        filteredFiles.push(file)
      }
    })
    callback(null, filteredFiles)
  })
}

module.exports = filterDir
