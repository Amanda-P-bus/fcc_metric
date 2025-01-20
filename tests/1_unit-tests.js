/*
 *
 *
 *       FILL IN EACH UNIT TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */

let chai = require("chai");
let assert = chai.assert;
let ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function() {

//all getNum tests
  suite("Function convertHandler.getNum(input)", function() {

//convertHandler should correctly read whole number input. 
    test("Whole number input", function(done) {
      let input = "32L";
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });

//convertHandler should correctly read numerical input with decimals. 
    test("Decimal Input", function(done) {
      let input = "3.25mi";
      assert.equal(convertHandler.getNum(input), 3.25);
      done();
    });

//convertHandler should correctly read fractional numerical input. 
    test("Fractional Input", function(done) {
      let input = "12/8mi";
      assert.equal(convertHandler.getNum(input), 1.5);
      done();
    });

//convertHandler should correctly read fractional input with a decimal. 
    test("Fractional Input w/ Decimal", function(done) {
      let input = "27/5.4mi";
      assert.equal(convertHandler.getNum(input), 5);
      done();
    });

//convertHandler should correctly return an error on a double fraction ie(2/3/2). 
    test("Invalid Input (double fraction)", function(done) {
      let input = "3/7.2/4L";
      assert.equal(convertHandler.getNum(input), "invalid number");
      done();
    });

//convertHandler should send the default value of 1 when a valid unit is provided with no number. 
    test("No Numerical Input", function(done) {
      let input = "kg";
      assert.equal(convertHandler.getNum(input), 1);
      assert.equal(convertHandler.getUnit(input), "kg");
      done();
    });
  });
  
//start of getUnit suite
  suite("Function convertHandler.getUnit(input)", function() {
    
//convertHandler should correctly read each valid input unit. 
    test("For Each Valid Unit Inputs", function(done) {
    
     let input = ["l", "GAL", "KM", "MI", "KG", "lbs"];
     let  expect = ["L", "gal", "km", "mi", "kg", "lbs"];
    
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getUnit(32 + ele), expect[i]);
      });
      done();
    });

//convertHandler should return the correct error message for an invalid input unit. 
    test("Unknown Unit Input", function(done) {
      let input = "32g";
      assert.equal(convertHandler.getUnit(input), "invalid unit");
      done();
    });
  });

//start of getReturnUnit suite
  suite("Function convertHandler.getReturnUnit(initUnit)", function() {

//convertHandler should return the correct return unit for each valid input unit. 
    test("For Each Valid Unit Inputs", function(done) {
      let input = ["gal", "L", "mi", "km", "lbs", "kg"];
      let expect = ["L", "gal", "km", "mi", "kg", "lbs"];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
  });

    
//start of spellOutUnit suite
  suite("Function convertHandler.spellOutUnit(unit)", function() {
    
//convertHandler should correctly return the spelled-out string unit for each valid input unit. 
    test("For Each Valid Unit Inputs", function(done) {
      let input = ["gal", "l", "mi", "km", "lbs", "kg"];
      let expect = [
        "gallons",
        "liters",
        "miles",
        "kilometers",
        "pounds",
        "kilograms"
      ];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
  });
    
//start of convert suite 
  suite("Function convertHandler.convert(num, unit)", function() {

//convertHandler should correctly convert gal to L.
    test("gal to L", function(done) {
      let input = [5, "gal"]
      let expected = 18.92705

      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });
    
//convertHandler should correctly convert L to gal. 
    test("L to gal", function(done) {
      let input = [5, "l"];
      let expected = 1.32086;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });
    
//convertHandler should correctly convert mi to km. 
    test("mi to km", function(done) {
      let input = [5, "mi"];
      let expected = 8.04672;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });
    
//convertHandler should correctly convert km to mi. 
    test("km to mi", function(done) {
      let input = [5, "km"];
      let expected = 3.10686;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

//convertHandler should correctly convert lbs to kg. 
    test("lbs to kg", function(done) {
      let input = [5, "lbs"];
      let expected = 2.26796;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

//convertHandler should correctly convert kg to lbs.    
    test("kg to lbs", function(done) {
      let input = [5, "kg"];
      let expected = 11.0231;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });
  });
});