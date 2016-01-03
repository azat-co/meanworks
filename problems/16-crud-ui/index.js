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


  console.log('This is the last adventure and it requires a human.')
  console.log('Please turn to your fellow associate and ask to verify the solution by going to the http://localhost:8080/#/')
  console.log('You need to have account add, update and delete buttons and the list of accounts.')
  console.log('You should be able to add, update and delete accounts without page refreshes.')
  console.log('Type: pass or fail.')
  var prompt = require('prompt');

  prompt.start();
  prompt.get(['answer'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Your friend answered: ', result.answer)
    if (result.answer ==='pass') {
      console.log('Congragulations! You finished meanworks adventure at Capital One SECON 2015!')
      console.log('Bugs? File at https://github.kdc.capitalone.com/secollege/meanworks/issues')
      return cb(true)
    } else {
      console.log('Sorry, try again.')
      console.log('For inspirations, take a look at https://github.kdc.capitalone.com/secollege/mean/tree/master/code')
      return cb(false)
    }

  });

  function onErr(err) {
    console.log(err);
    return 1;
  }



}
