








const { init } = require("../server");

function ConvertHandler() {

  //regex that splits numbers (as whole numbers, decimals, or fractions) from units
  let testReg = /[a-z]+|[^a-z]+/gi
  let testLetters = /[^a-z]+/gi //null = only letters
  let initNum;
  let initUnit;
  let returnNum;
  let returnUnit;


  this.getNum = function(input) {
    //get unit from arr, insert it as initNum value
    let numRes = input.match(testReg)[0];
    let result;
    result = numRes;

//if there's no unit, reject
if (input.match(/[0-9]$/)) 
  { return "invalid unit" } 

//if it doesn't start with a number
  if (numRes.match(/^[0-9]/) === null)
  {return "invalid number"}
let numReg = /\d/
  //if there's no number, start with 1 as a base unit
      if (numReg.test(result) === false)
        { result = 1; return result}

//check for special characters
let stringify = input.toString();
    //if doesn't end with a number


//deal with division   
if(result.toString().includes('/')){
  let values = result.toString().split('/')
  let perCheck = result.toString().split('.')

//if there's more than one "/"  
  if(values.length != 2)
    { return 'invalid number'}

//if there's more than 2 "." for every "/"
  if ((perCheck.length - values.length) > 1)
    { return "invalid number"}

//for rejecting values with too mamy "."
    if (numRes.includes("."))
    {
      //if value[0] has more than one "."
      if (values[0].split(".").length > 2)
      {return "invalid number"}
      //if value[1] has more than one "."
      if (values[1].split(".").length > 2)
        {return "invalid number"}

    }

  values[0] = parseFloat(values[0])
  values[1] = parseFloat(values[1])
  result = parseFloat((values[0]/values[1]).toFixed(5)) 
}

    return result
};


  this.getUnit = function(input) {
    let result;

    result = input.match(testReg)[1];
  //if no unit was initially put in, reject
    if (!result) 
      { result = input.match(testReg)[0] }

  //lowercase input to check validity    
    let smallUnit = result.toLowerCase();

    if (smallUnit === "gal" || smallUnit === "l" || smallUnit === "km" || smallUnit === "mi" || smallUnit === "lbs" || smallUnit === "kg")
      { return result }

 
    result = 'invalid unit'
       return result
  };

 
  this.getReturnUnit = function(initUnit) {
    let result;

   if (initUnit === "mi")
        {result = "km"}

   if (initUnit === "km")
        {result = "mi"} 

   if (initUnit === "gal")
        {result = "l"}
    
   if (initUnit === "l")
    {result = "gal"}
    
   if (initUnit === "lbs")
    {result = "kg"}
    
   if (initUnit === "kg")
    {result = "lbs"}
    return result
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    switch (unit) {
      case "mi":
        result = "mile(s)";
        break;
      case "km":
        result = "kilometer(s)";
        break;
      case "lbs":
        result = "pound(s)";
        break;
      case "kg":
        result = "kilogram(s)";
        break;
      case "gal":
        result = "gallon(s)";
        break; 
      case "l":
        result = "liter(s)";
        break; 
      default:
        break;
    }

    return result;
  };


  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    
  if (initUnit === "mi")
   {let getKm = eval(initNum*miToKm).toFixed(5)
      result = getKm
    return result
    }

if (initUnit === "km")
    { let getMi = eval(initNum/miToKm).toFixed(5)
      result = getMi
      return result 
    } 

if (initUnit === "gal")
    { let getLiter = eval(initNum*galToL).toFixed(5)
      result = getLiter
      return result 
    }

if (initUnit === "l")
  { let getGallon = eval(initNum/galToL).toFixed(5)
    result = getGallon
    return result 
  }
if (initUnit === "lbs")
  { let getPounds = eval(initNum*lbsToKg).toFixed(5)
    result = getPounds
    return result 
  }
if (initUnit === "kg")
  { let getKgs = eval(initNum/lbsToKg).toFixed(5)
    result = getKgs
    return result 
  }    
    return result;
  };

 
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
