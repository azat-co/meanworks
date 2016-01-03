var fs = require('fs')
var path = require('path')
exports.problem = require(path.join(__dirname, '..', '..', 'problem'))(__dirname)
exports.solution = require(path.join(__dirname, '..', '..', 'solution'))(__dirname)

var exec = require('child_process').exec
var node = process.execPath
var which = require(path.join(__dirname, '..', '..', 'which2.js'))
var semver = require('semver')
exports.verify = function (args, cb) {
  console.log('MEANWorks is verifying that node is installed... Please stand by')
  setTimeout(function(){
    var node = which('node')
    if (!node) return cb(false)

    // figure out what version we have
    node = path.normalize(node)
    exec(node + ' --version', function (code, stdout, stderr) {
      var v = ('' + stdout).trim()
      if (code) {
        console.log('Uh oh!  node had a problem! %j', code)
        process.stderr.write(stderr)
        return cb(false)
      }

      console.log('You have version %s installed.  Cool.', v)
      var nodeCompatibleVersion = 'v5.1.0'
      console.log('This workshop was designed to work with: %s', nodeCompatibleVersion)
      if (semver.gt(nodeCompatibleVersion, v)) {
        console.warn('You have version %s, but the compatible version is %s', v, nodeCompatibleVersion)
        console.log('Run `brew update & brew upgrade nodejs@5.1.0` to upgrade it on Mac OS X')
        console.log('(You can also just skip this if you want- at your own risk!)')
        if (args.join('').toLowerCase() === 'skip') {
          return cb(true)
        } else {
          return cb(false)
        }
      }
      console.info('✓ Congratulations!\n' +
                  'You have a compatible version of Node.js installed!')
      var compatibleVersion = '2.14.15' // npm
      if (args.join('').toLowerCase() === 'skip') {
        console.log('Ok, if you say so...\n'+
                    'You can always install the compatible version of npm ' + compatibleVersion + ' using\n'+
                    '`npm install npm@ -g`.  You may need to run that with `sudo`\n'+
                    'or as an Administrator.')
        return cb(true)
      }

      console.log('verifying that npm is installed...')
      var npm

      try {
        npm = which('npm')
      } catch (er) {
        console.error('It looks like npm is not installed.')
        return cb(false)
      }

      // figure out what version we have
      exec(npm + ' --version', function (code, stdout, stderr) {
        var v = ('' + stdout).trim()
        if (code) {
          console.log('Uh oh!  npm had a problem! %j', code)
          process.stderr.write(stderr)
          return cb(false)
        }

        console.log('You have version %s installed.  Great!', v)

        if (code) {
          console.log('Uh oh!  npm had a problem! %j', code)
          process.stderr.write(stderr)
          return cb(false)
        }

        console.log('The compatible version of npm is: %s', compatibleVersion)
        if (semver.gt(compatibleVersion, v)) {
          console.error('You have version %s, but the compatible version is %s',
                      v, compatibleVersion)
          console.info('Run `npm install npm -g` to upgrade it')
          console.log('(You can also just skip this if you want)')
          return cb(false)
        }
        console.info('✓ Congratulations!\n' +
                    'You have a compatible version of npm (' + compatibleVersion + ') installed!')
        return cb(true)
      })

    })
  }, 750)

}
