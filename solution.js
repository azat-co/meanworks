var fs = require('fs')
var path = require('path')

module.exports = (dirname) => {
  return fs.createReadStream(path.join(dirname, 'solution.txt'))

}
