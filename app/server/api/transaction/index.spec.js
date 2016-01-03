'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var transactionCtrlStub = {
  index: 'transactionCtrl.index',
  show: 'transactionCtrl.show',
  create: 'transactionCtrl.create',
  update: 'transactionCtrl.update',
  destroy: 'transactionCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var transactionIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './transaction.controller': transactionCtrlStub
});

describe('Transaction API Router:', function() {

  it('should return an express router instance', function() {
    expect(transactionIndex).to.equal(routerStub);
  });

  describe('GET /api/transactions', function() {

    it('should route to transaction.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'transactionCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/transactions/:id', function() {

    it('should route to transaction.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'transactionCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/transactions', function() {

    it('should route to transaction.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'transactionCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/transactions/:id', function() {

    it('should route to transaction.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'transactionCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/transactions/:id', function() {

    it('should route to transaction.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'transactionCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/transactions/:id', function() {

    it('should route to transaction.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'transactionCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
