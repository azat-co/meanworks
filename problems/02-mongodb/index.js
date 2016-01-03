var fs = require('fs')
var path = require('path')
var which = require(path.join(__dirname, '..', '..', 'which2.js'))
var CombinedStream = require('combined-stream2')

var combinedStream = CombinedStream.create()
combinedStream.append(fs.createReadStream(path.join(__dirname, 'problem.txt')))
combinedStream.append(fs.createReadStream(path.join(__dirname, '..', '..', 'instructions.txt')))

exports.problem = combinedStream
exports.solution = fs.createReadStream(path.join(__dirname,   'solution.txt'))

var exec = require('child_process').exec
var mongodb = process.execPath
var semver = require('semver')

exports.verify = function (args, cb) {
  console.log('MEANWorks is verifying that MongoDB is installed... Please stand by')
  setTimeout(function(){
    var mongod
    try {
      mongod = which('mongod')
    } catch (er) {
      console.error('It looks like MongoDB is not installed.')
      return cb(false)
    }

    // Surrounds with double quotes if path contains a space
    if (mongod.indexOf(' ') != -1) {
      mongod = '"' + mongod + '"';
    }

    // figure out what version we have
    exec(mongod + ' --version', function (code, stdout, stderr) {
      var v = ('' + stdout).trim()
      v = v.substring(v.indexOf('n v')+1, v.indexOf('\n')) // parse "db version v3.0.6"
      if (code) {
        console.log('Uh oh!  mongodb had a problem! %j', code)
        process.stderr.write(stderr)
        return cb(false)
      }

      console.info('You have version %s installed.  Cool.', v)
      var latest = '3.0.6'
      console.log('This workshop was designed to work with: %s', latest)
      if (semver.gt(latest, v)) {
        console.warn('You have version %s, but the latest is %s',
                    v, latest)
        console.warn('Run `brew update & brew upgrade mongodb@%v` to upgrade it on Mac OS X', latest)
        console.warn('(You can also just skip this if you want- at your own risk!)')
        if (args.join('').toLowerCase() === 'skip') {
          return cb(true)
        } else {
          return cb(false)
        }
      }
      console.info('Congratulations!\n' +
                  'You have a compatible version of MongoDB installed!')
      return cb(true)
    })
  }, 750)

}
