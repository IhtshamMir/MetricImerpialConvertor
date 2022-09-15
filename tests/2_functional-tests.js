const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
 test('10L:GET request to /api/convert', function (done) {
    chai
      .request(server)
      .get('/api/convert')
      .query({
       "input": "10L"
       })
      .end(function (err, res) {
      assert.equal(res.status, 200, 'Response status should be 200');
       assert.equal(res.body.returnNum,2.64172  , 'Response should be "2.64172   gallons"');
        done();
      });
  });  
  test('32g: GET request to /api/convert', function (done) {
    chai
      .request(server)
      .get('/api/convert')
      .query({
       "input": "32g"
       })
      .end(function (err, res) {
      assert.equal(res.status, 200, 'Response status should be 200');
  assert.equal(res.body, 'invalid unit');
        done();
      });
  }); 
test('3/7.2/4kg: GET request to /api/convert', function (done) {
    chai
      .request(server)
      .get('/api/convert')
      .query({
       "input": "3/7.2/4kg"
       })
      .end(function (err, res) {
      assert.equal(res.status, 200, 'Response status should be 200');
  assert.equal(res.body, 'invalid number');
        done();
      });
  }); 
  test('3/7.2/4kilomegagram: GET request to /api/convert', function (done) {
    chai
      .request(server)
      .get('/api/convert')
      .query({
       "input": "3/7.2/4kilomegagram"
       })
      .end(function (err, res) {
      assert.equal(res.status, 200, 'Response status should be 200');
  assert.equal(res.body, 'invalid number and unit');
        done();
      });
  }); 
  test('kg:  GET request to /api/convert', function (done) {
    chai
      .request(server)
      .get('/api/convert')
      .query({
       "input": "kg"
       })
      .end(function (err, res) {
      assert.equal(res.status, 200, 'Response status should be 200');
        console.log(res.body);
 assert.equal(res.body.string, '1 kilograms converts to 2.20462 pounds', 'Wrong input');
        done();
      });
  }); 
});
