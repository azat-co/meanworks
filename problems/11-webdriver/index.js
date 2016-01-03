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
  console.info('Checking the Webdriver-manager...')
  setTimeout(function(){
    var command
    try {
      command = which.sync('webdriver-manager')
    } catch (er) {
      console.error('It looks like Webdriver-manager is not installed. It comes with Protractor, please check the Protractor installation.')
      return cb(false)
    }
    if (command) {
      console.log('Webdriver is found at %s', command)
    } else {
      console.error('It looks like Webdriver-manager is not installed. It comes with Protractor, please check the Protractor installation.')
      return cb(false)
    }
    console.log('Success... The Protractor is ready.')
    console.log('Congratulations!\n' +
                'You have a compatible version of Protractor and Webdriver installed.')
    return cb(true)
    cb(true)


  }, 750)

}
