var fs = require('fs')
exports.problem = fs.createReadStream(__dirname + '/problem.txt');
exports.solution = fs.createReadStream(__dirname + '/solution.txt');


var path = require('path')

exports.verify = function (args, cb) {
  var cwd = process.cwd()
  if (path.resolve(cwd, 'problems', path.basename(__filename)) === path.resolve(__filename)) {
    console.log('It looks like you are in the root of the workshopper\n' +
                'This is not recommended. Please make a new folder for our project, and use that.')
    return cb(false)
  }

  if (cwd === process.env.HOME || cwd === process.env.USERPROFILE) {
    console.log('It looks like you are in your home directory.\n' +
                'This is not recommended. Please make a new dir, and use that.')
    return cb(false)
  }
  if (cwd.substring(cwd.lastIndexOf('/')) !== '/mean') {
    console.log('Your current folder is %s', cwd);
    console.log('Please navigate into project folder mean (maybe cd mean?).')
    return cb(false)
  }
  var bonus = false
  try {
    var package = require(path.resolve(cwd, 'package.json'))
    if (package.scripts.test
      && package.scripts.start
      && package.scripts.seed
      && package.scripts['seed-accounts']) {
        bonus = true
     }
  } catch (e) {
    console.log('Cannot find or parse package.json in %s', cwd);
    console.log('Please initialize package.json.')
    return cb(false)
  }


  // console.log(cwd, path.resolve(cwd, 'mean'));
  // if (path.resolve(cwd, 'problems', path.basename(__filename)) === path.resolve(__filename)) {
    // console.log('It looks like you are in the root of the workshopper\n' +
                // 'This is not recommended. Please make a new folder for our project, and use that.')
    // return cb(false)

  console.log(
    'Congratulations!\n' +
    'You have a development environment.\n' +
    '\n'+
    'From here on out, make sure to run the workshop in this dir\n'+
    '\n')
  if (bonus) console.log('BRAVO! You did the bonus part too!')

  return cb(true)
}
