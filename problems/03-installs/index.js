var fs = require('fs')
var path = require('path')
exports.problem = require(path.join(__dirname, '..', '..', 'problem'))(__dirname)
exports.solution = require(path.join(__dirname, '..', '..', 'solution'))(__dirname)

var checkVersionNpm = require(path.join(__dirname, '..', '..', 'check-version-npm.js'))
exports.verify = function (args, cb) {
  checkVersionNpm({
    name: 'Bower',
    npmName: 'bower',
    command: 'bower',
    compatibleVersion: '1.5.3',
    parseVersion: (version) => {return version}
  }, ()=>{
      checkVersionNpm({
        name: 'Grunt',
        npmName: 'grunt-cli',
        command: 'grunt',
        compatibleVersion: '0.1.13',
        parseVersion: (version) => {return version.substr(10)}
      }, () => {checkVersionNpm({
        name: 'Yeoman',
        npmName: 'yo',
        command: 'yo',
        compatibleVersion: '1.5.1'
      }, () => {checkVersionNpm({
        name: 'Angular Full Stack Generator',
        npmName: 'generator-angular-fullstack',
        specialCommand: 'npm ls -g generator-angular-fullstack',
        compatibleVersion: '3.1.1',
        parseVersion: (version) => {
          console.log(version)
          return version.substr(version.indexOf('generator-angular-fullstack@') + 28) // let's hope there's not nested generators
        }
        }, cb)}
      )})
    }
  )
}
