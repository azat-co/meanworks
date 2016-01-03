var fs = require('fs')
var path = require('path')
var CombinedStream = require('combined-stream2')

module.exports = (dirname) => {
  var combinedStream = CombinedStream.create()
  combinedStream.append(fs.createReadStream(path.join(dirname, 'problem.txt')))
  combinedStream.append(fs.createReadStream(path.join(__dirname, 'instructions.txt')))
  return combinedStream
}
