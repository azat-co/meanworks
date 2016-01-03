'use strict';

angular.module('ngFullstackNewApp')
  .controller('TransactionsCtrl', function ($scope, $http) {
    $scope.transactions = [];

    $http.get('/api/transactions').success(function(transactions) {
      $scope.transactions = transactions;
    });

    $scope.disputeTransaction = function(transaction) {
      $http.patch(`/api/transactions/${transaction._id}`, { dispute: true }).success(function(){
        transaction.dispute = true
      });
    };

    $scope.cancelDisputeTransaction = function(transaction) {
      $http.patch(`/api/transactions/${transaction._id}`, { dispute: false }).success(function(){
        transaction.dispute = false
      });
    };

  });
