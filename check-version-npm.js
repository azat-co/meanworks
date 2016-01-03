var path = require('path')
var exec = require('child_process').exec
var which = require(path.join(__dirname, 'which2.js'))
var semver = require('semver')

module.exports = (options, callback)=> {
  console.log(`MEANWorks is verifying that ${options.name} is installed... Please stand by`)
  setTimeout(function(){
    var command
    var versionCommand
    if (options.specialCommand) {
      versionCommand = options.specialCommand
    } else {
      try {
        versionCommand = which(options.command) + ' --version'
      } catch (er) {
        console.error(`It looks like ${options.name} is not installed.`)
        return callback(false)
      }
    }
    // figure out what version we have
    exec(versionCommand, function (code, stdout, stderr) {
      if (code) {
        console.error('Uh oh!  commandb had a problem! %j', code)
        process.stderr.write(stderr)
        return callback(false)
      }
      var version = ('' + stdout).trim()
      if (options.parseVersion) version = options.parseVersion(version)

      console.log(`You have ${options.name} version ${version} installed.  Cool.`)
      console.log('This workshop was designed to work with: %s', options.compatibleVersion)
      if (semver.gt(options.compatibleVersion, version)) {
        console.warn('You have version %s, but this workshop was tested to work with %s (or later versions)',
                    version, options.compatibleVersion)
        console.warn('Run `$ npm install -g %s@%s` to upgrade it', options.npmName, options.compatibleVersion)
        console.warn('(You can also just skip this if you want- at your own risk!)')
        if (args.join('').toLowerCase() === 'skip') {
          return callback(true)
        } else {
          return callback(false)
        }
      }
      console.info('✓ Congratulations!\n' +
                  'You have a compatible version of %s (%s) installed!', options.name, options.compatibleVersion)
      return callback(true)
    })
  }, 750)
}
