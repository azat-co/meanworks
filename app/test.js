var supertest = require('supertest'),
  id = null,
  url = 'http://localhost:3000'

describe('Transaction resource', function(){

  describe('POST /transactions', function(){
    it('responds with json', function(done){
      supertest(url)
        .post('/api/transactions')
        .send({name: 'Five Guys', amount: '5.40'})
        .expect(201)
        .end(function(err, res){
          if (err) return done(err)
          id = res.body.insertedIds[0]
          console.log('id', id)
          done()
        })
    })
  })

  describe('GET /transactions', function(){
    it('responds with json', function(done){
      supertest(url)
        .get('/api/transactions')
        .expect(200, done)
    })
  })

  describe('PUT /transactions', function(){
    it('updates an object', function(done){
       supertest(url)
         .put('/api/transactions/'+id)
         .send({amount: '10.67'})
         .expect(200, {
           ok: 1,
           n: 1,
           nModified: 1
         }, done)
     })
  })
  describe('GET /transaction', function(){
    it('responds with json', function(done){
      supertest(url)
        .get('/api/transactions/' + id)
        .expect(200,
          {amount: '10.67',
          '_id': id
        }, done)
    })
  })
  describe('DELETE /transactions', function(){
    it('responds with json', function(done){
      supertest(url)
        .del('/api/transactions/' + id)
        .expect(200, {ok: 1, n: 1}, done)
    })
  })

})

describe('Accounts resource', function() {

  describe('GET /accounts', function(){
    it('responds with json', function(done){
      supertest(url)
        .get('/api/transactions')
        .expect(200, done)
    })
  })

  describe('POST /accounts', function(){
    it('responds with json', function(done){
      supertest(url)
        .post('/api/accounts')
        .send({name: 'Wells', number: '51233340'})
        .expect(201)
        .end(function(err, res){
          if (err) return done(err)
          id = res.body.insertedIds[0]
          console.log('id', id)
          done()
        })
    })
  })

  describe('PUT /accounts', function(){
    it('updates an object', function(done){
       supertest(url)
         .put('/api/accounts/'+id)
         .send({number: '1033121267'})
         .expect(200, {
           ok: 1,
           n: 1,
           nModified: 1
         }, done)
     })
  })

  describe('GET /accounts', function(){
    it('responds with json', function(done){
      supertest(url)
        .get('/api/accounts/' + id)
        .expect(200,
          {number: '1033121267',
          '_id': id
        }, done)
    })
  })

  describe('DELETE /accounts', function(){
    it.skip('responds with json', function(done){
      supertest(url)
        .del('/api/accounts/' + id)
        .expect(200, {ok: 1, n: 1}, done)
    })
  })

});
