var fs = require('fs')
var path = require('path')
exports.problem = require(path.join(__dirname, '..', '..', 'problem'))(__dirname)
exports.solution = require(path.join(__dirname, '..', '..', 'solution'))(__dirname)

var exec = require('child_process').exec
exports.verify = function (args, cb) {
  console.log('Kudos! Let\'s start the workshop!')
  cb(true)
}
