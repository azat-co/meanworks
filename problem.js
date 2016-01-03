var fs = require('fs')
var path = require('path')
var CombinedStream = require('combined-stream2')

module.exports = (dirname) => {
  var combinedStream = CombinedStream.create()
  combinedStream.append(fs.createReadStream(path.join(dirname, 'readme.md')))
  combinedStream.append(fs.createReadStream(path.join(__dirname, 'instructions.txt')))
  var url = 'https://github.com/azat-co/meanworks/tree/master/problems' + dirname.substr(dirname.lastIndexOf(path.sep))
  combinedStream.append(new Buffer(require('chalk').bold.green('\n***\n===>>> Open this text (with better formating) online at:\n' + url + '\n***')))
  return combinedStream
}
