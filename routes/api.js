'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route("/api/convert").get((req, res) => {
    let input = req.query.input;
    let initNum = convertHandler.getNum(input);
    let initUnit = convertHandler.getUnit(input);
    let returnNum = convertHandler.convert(initNum, initUnit);
    let returnUnit = convertHandler.getReturnUnit(initUnit);
    let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
 
    if (initUnit === "invalid unit" && initNum === 1)
    {res.json("invalid unit")}

    if(initNum === 'invalid number'){
      res.json('invalid number')
    }  
  
    if(initUnit === 'invalid unit'){
      res.json('invalid unit')
    }  
    console.log(initNum)
    let resObj = {}
    resObj["initNum"] = initNum
    resObj["initUnit"] = initUnit
    resObj["returnNum"] = returnNum
    resObj["returnUnit"] = returnUnit
    resObj["string"] = toString

    res.json(resObj)

  })
};
