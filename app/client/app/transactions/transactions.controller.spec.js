'use strict';

describe('Controller: TransactionsCtrl', function () {

  // load the controller's module
  beforeEach(module('ngFullstackNewApp'));

  var TransactionsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TransactionsCtrl = $controller('TransactionsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
