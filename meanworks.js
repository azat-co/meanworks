#!/usr/bin/env node
// var _log = global.console.log
// global.console.log = function(str){
//   var args = arguments
//   while (str.indexOf('`')>-1 && str.indexOf) {
//
//   return _log(args)
global.console.error = function(){
  var args = arguments
  args[0] = require('chalk').bold.red(args[0])
  return console.log.apply(null, args);
}
global.console.warn = function(){
  var args = arguments
  args[0] = require('chalk').yellow(args[0])
  return console.log.apply(null, args);
}
global.console.info = function(){
  var args = arguments
  args[0] = require('chalk').cyan(args[0])
  return console.log.apply(null, args);
}

var adventure = require('adventure');
var shop = adventure('meanworks')

var problems = [
  '01-node-npm',
  '02-mongodb',
  '03-installs', // bower, grunt-cli, yo, generator-angular-fullstack, webdriver
  '04-folder',
  '05-seed',
  '06-endpoints', // accounts and transactions endpoints
  '07-ui-transactions', // accounts route
  '08-ui-accounts',
  '09-ui-main' // and navigation
]

problems.forEach(function (prob) {
    shop.add(prob, function () { return require('./problems/' + prob) });
});

shop.execute(process.argv.slice(2));
