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



res.json(convertHandler.getNum(input))


//  convertHandler.getNum(input);
//  convertHandler.getUnit(input);

 // res.json(convertHandler.getNum(input));

    /*
    convertHandler.getNum()
    convertHandler.getUnit()
    
    convertHandler.getReturnUnit()
    convertHandler.spellOutUnit()
    convertHandler.convert()
    convertHandler.getString()
    */


  })
};
