var fs = require('fs')
exports.problem = fs.createReadStream(__dirname + '/problem.txt');
exports.solution = fs.createReadStream(__dirname + '/solution.txt');

var exec = require('child_process').exec
var which = require('which')
var semver = require('semver')
exports.verify = function (args, cb) {
  console.log('MEANWorks is verifying that Gulp is installed... Please stand by')
  setTimeout(function(){
    var command
    try {
      command = which.sync('gulp')
    } catch (er) {
      console.error('It looks like Gulp is not installed.')
      return cb(false)
    }

    // figure out what version we have
    exec(command +' --version', function (code, stdout, stderr) {
      var v = ('' + stdout).trim()
      if (code) {
        console.log('Uh oh! Gulp had a problem! %j', code)
        process.stderr.write(stderr)
        return cb(false)
      }

      console.log('You have version %s installed.  Cool.', v)
      var latest = 'v3.9.0'
      v = v.match(/([0-9]*)\.([0-9]*)\.([0-9]*)/).splice(1,3).join('.')
      console.log('This workshop was designed to work with: %s', latest)
      if (semver.gt(latest, v)) {
        console.log('You have version %s, but this workshop was tested to work with %s (or later versions)',
                    v, latest)
        console.log('Run `$ npm install -g gulp` to upgrade it')
        console.log('(You can also just skip this if you want- at your own risk!)')
        if (args.join('').toLowerCase() === 'skip') {
          return cb(true)
        } else {
          return cb(false)
        }
      }
      console.log('Congratulations!\n' +
                  'You have a compatible version of Gulp installed!')
      return cb(true)
    })
  }, 750)

}
