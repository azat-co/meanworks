var path = require('path')
exports.problem = require(path.join(__dirname, '..', '..', 'problem'))(__dirname)
exports.solution = require(path.join(__dirname, '..', '..', 'solution'))(__dirname)

var folderName = 'ng-fullstack-new'

exports.verify = function (args, cb) {
  var cwd = process.cwd()
  if (path.resolve(cwd, 'problems', path.basename(__filename)) === path.resolve(__filename)) {
    console.warn('It looks like you are in the root of the workshopper\n' +
                'This is not recommended. Please make a new folder for our project, and use that.')
    return cb(false)
  }

  if (cwd === process.env.HOME || cwd === process.env.USERPROFILE) {
    console.warn('It looks like you are in your home directory.\n' +
                'This is not recommended. Please make a new dir, and use that.')
    return cb(false)
  }

  if (cwd.substring(cwd.lastIndexOf('/')) !== '/' + folderName) {
    console.error('Your current folder is %s', cwd);
    console.error('Please navigate into project folder %s (maybe cd %s?).', folderName, folderName)
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
    console.error('Cannot find or parse package.json in %s', cwd);
    console.error('Please initialize package.json.')
    return cb(false)
  }


  // console.log(cwd, path.resolve(cwd, 'mean'));
  // if (path.resolve(cwd, 'problems', path.basename(__filename)) === path.resolve(__filename)) {
    // console.log('It looks like you are in the root of the workshopper\n' +
                // 'This is not recommended. Please make a new folder for our project, and use that.')
    // return cb(false)

  console.info(
    '✓ Congratulations!\n' +
    'You have a development environment.\n' +
    '\n'+
    'From here on out, make sure to run the workshop in this dir\n'+
    '\n')
  if (bonus) console.log('BRAVO! You did the bonus part too!')
  else {
    console.log('No bonus points were added (scripts in package.json!)')
  }

  return cb(true)
}
