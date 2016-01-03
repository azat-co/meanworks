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
  '06-endpoint-accounts', // accounts endpoint
  '07-endpoint-transactions', // transactions endpoint
  '08-route-accounts', // accounts route
  '09-ui-accounts',
  '10-controller-accounts',
  '12-ui-transactions',
  '13-controller-transactions'
]

problems.forEach(function (prob) {
    shop.add(prob, function () { return require('./problems/' + prob) });
});

shop.execute(process.argv.slice(2));
