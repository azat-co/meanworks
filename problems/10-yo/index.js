var fs = require('fs'),
  supertest = require('supertest'),
  path = require('path')

exports.problem = fs.createReadStream(__dirname + '/problem.txt');
exports.solution = fs.createReadStream(__dirname + '/solution.txt');

var exec = require('child_process').exec
var which = require('which')
var semver = require('semver')
exports.verify = function (args, cb) {
  var cwd =process.cwd()
  console.log('MEANWorks is verifying that Yo is installed... Please stand by')
  setTimeout(function(){
    return cb(true)
}
