var fs = require('fs'),
  supertest = require('supertest'),
  path = require('path'),
  childProcess = require('child_process'),
  exec = childProcess.exec,
  spawn = childProcess.spawn,
  which = require('which'),
  semver = require('semver')

exports.problem = fs.createReadStream(__dirname + '/problem.txt')
exports.solution = fs.createReadStream(__dirname + '/solution.txt')


exports.verify = function (args, cb) {
  var cwd =process.cwd(),
    test = exec('npm test', {cwd: path.normalize(__dirname+'/../../mean'), encoding: 'utf8'}, function(error, stdout, stderr){
      console.log(stdout, stderr)
      if (stdout.indexOf('9 passing')>-1) {
        console.log('You are RIGHT. Great job.')
        return cb(true)
      } else {
        console.error('Something is wrong. There should be 9 tests that pass.')
        return cb(false)
      }
    })
}
