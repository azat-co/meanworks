var fs = require('fs'),
  supertest = require('supertest'),
  path = require('path'),
  fetchHtml = require('../../fetch-html.js')

exports.problem = fs.createReadStream(__dirname + '/problem.txt');
exports.solution = fs.createReadStream(__dirname + '/solution.txt');

var exec = require('child_process').exec
var which = require('which')
var semver = require('semver')
exports.verify = function (args, cb) {

      return cb(true)

}
