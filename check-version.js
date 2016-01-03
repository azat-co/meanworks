var fs = require('fs'),
  path = require('path'),
  exec = require('child_process').exec,
  which = require('which'),
  semver = require('semver')

module.exports = function (options, cb) {
  var cwd = process.cwd(),
    command,
    args = options.args,
    name = options.name,
    displayName = options.displayName || name,
    installCommand = options.installCommand || 'Run `$ npm install -g ' + name + '` to upgrade it',
    compatibleVersion = options.compatibleVersion
  try {
    command = which.sync(name)
  } catch (er) {
    console.error('It looks like Protractor is not installed.')
    return cb(false)
  }
  // figure out what version we have
  exec(command +' --version', function (code, stdout, stderr) {
    var v = ('' + stdout).trim()
    if (options.versionPattern) {
      v = v.match(options.versionPattern).splice(1,3).join('.')
    } else {
      v = v.match(/([0-9]*)\.([0-9]*)\.([0-9]*)/).splice(1,3).join('.')
    }
    if (code) {
      console.log('Uh oh! Protractor had a problem! %j', code)
      process.stderr.write(stderr)
      return cb(false)
    }
    console.log('You have version %s installed. Cool.', v)
    console.log('This workshop was designed to work with: %s', compatibleVersion)
    if (semver.gt(compatibleVersion, v)) {
      console.log('You have version %s, but this workshop was tested to work with %s (or later versions)',
         v, compatibleVersion)
      console.log(installCommand)
      console.log('(You can also just skip this if you want- at your own risk!)')
      if (args.join('').toLowerCase() === 'skip') {
        return cb(true)
      } else {
        return cb(false)
      }
    }
    cb(true)
  })

}
