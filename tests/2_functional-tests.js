const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {

//start routing test suite
suite("Routing Tests", function() {

//start GET request to /api/convert suite
suite("GET /api/convert => conversion object", function() {

//Convert a valid input such as 10L:
  test('Convert 10L (valid input)', function(done) {
    chai.request(server)
    .get("/api/convert")
    .query({input: "10L"})
    .end(function (err, res) {

        assert.equal(res.status, 200);
        assert.equal(res.body.initNum, 10);
        assert.equal(res.body.initUnit, "L");
        assert.approximately(res.body.returnNum, 2.64172, .01);
        assert.equal(res.body.returnUnit, "gal");

        done();    
    })
  })

//Convert an invalid input such as 32g: 
  test('Convert 32g (invalid unit)', function(done) {
    chai.request(server)
    .get("/api/convert")
    .query({input: "32g"})
    .end(function (err, res) {  

        assert.equal(res.body, "invalid unit");
    }) 

    done(); 
})

//Convert an invalid number such as 3/7.2/4kg
  test('Convert 3/7.2/4kg (invalid number)', function(done) {
    chai.request(server)
    .get("/api/convert")
    .query({input: "3/7.2/4kg"})
    .end(function (err, res) { 

        assert.equal(res.body, "invalid number");
     });

     done();
  })

//Convert an invalid number AND unit such as 3/7.2/4kilomegagram
  test('Convert 3/7.2/4kilomegagram (invalid number and unit)', function(done) {
    chai.request(server)
    .get("/api/convert")
    .query({input: "3/7.2/4kilomegagram"})
    .end(function (err, res) { 

        assert.equal(res.body, "invalid number and unit")
     });

     done();
  })

//Convert with no number such as kg:
  test('Convert kg (valid input, no number)', function(done) {
    chai.request(server)
    .get("/api/convert")
    .query({input: "kg"})
    .end(function (err, res) {

        assert.equal(res.body.initNum, 1); 
        assert.equal(res.body.initUnit, "kg")
     })

     done();
  })

})

});
});
