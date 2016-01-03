'use strict';

angular.module('ngFullstackNewApp').controller('AccountsCtrl', function ($scope, $http) {
  $scope.accounts = [];

  $http.get('/api/accounts').success(function (accounts) {
    $scope.accounts = accounts;
  });

  $scope.addAccount = function () {
    $http.post('/api/accounts', { name: $scope.newAccountName, number: $scope.newAccountNumber }).success(function () {
      window.location.reload();
    });
    $scope.newAccountName = '';
    $scope.newAccountNumber = '';
  };

  $scope.removeAccount = function (account) {
    $http['delete']('/api/accounts/' + account._id).success(function () {
      var index = $scope.accounts.indexOf(account);
      $scope.accounts.splice(index, 1);
    });
  };
});
//# sourceMappingURL=accounts.controller.js.map
