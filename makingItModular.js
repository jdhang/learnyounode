var filterDir = require('./filterDir')
var dir = process.argv[2]
var ext = process.argv[3]

filterDir(dir, ext, function (err, data) {
  if(err) {
    console.error(err)
  }
  data.forEach(function (el) {
    console.log(el)
  })
})

