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
 


    if(initNum === 'invalid number' && initUnit === 'invalid unit'){
      res.json('invalid number and unit')
    }

    if (input === null || input === 0)
    {res.json("invalid input")}
  
    if(initNum === 'invalid number'){
      res.json('invalid number')
    }  
  
    if(initUnit === 'invalid unit'){
      res.json('invalid unit')
    }  
  
    let resObj = {}
    resObj['initNum'] = initNum
    resObj['initUnit'] = initUnit
    resObj['returnNum'] = returnNum
    resObj['returnUnit'] = returnUnit
    resObj['string'] = toString
  
    res.json(resObj);
    //{ initNum: 3.1, initUnit: 'mi', returnNum: 4.98895, returnUnit: 'km', string: '3.1 miles converts to 4.98895 kilometers' }
  
  })
};
