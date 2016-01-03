'use strict'

const which = require('which')

module.exports = (name) => {
  let node
  try {
    node = which.sync(name)
  } catch (error) {
    console.error(`It looks like ${name} is not installed.`)
    console.error(error)
    return null
  }

  // Surrounds with double quotes if path contains a space
  if (node.indexOf(' ') != -1) {
    node = '"' + node + '"'
  }
  return node
}
