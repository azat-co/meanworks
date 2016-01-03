'use strict';

angular.module('ngFullstackNewApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('transactions', {
        url: '/transactions',
        templateUrl: 'app/transactions/transactions.html',
        controller: 'TransactionsCtrl'
      });
  });
