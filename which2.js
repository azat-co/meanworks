'use strict'

const which = require('which')

module.exports = (name) => {
  let path
  try {
    path = which.sync(name)
  } catch (error) {
    console.error(`It looks like ${name} is not installed.`)
    console.error(error)
    return null
  }

  // Surrounds with double quotes if path contains a space
  if (path.indexOf(' ') != -1) {
    path = '"' + path + '"'
  }
  return path
}
