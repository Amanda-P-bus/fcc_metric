/*
*
*
*       Complete the handler logic below
*       
*       
*/

let testReg = /[a-z]+|[^a-z]+/gi

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    
    result = input.match(testReg)[0];
    
    let numRegex = /\d/
    
    if(numRegex.test(result) === false){
      result = 1
    }
    
    if(result.toString().includes('/')){
      let values = result.toString().split('/')
      if(values.length != 2){
        return 'invalid number'
      }
      values[0] = parseFloat(values[0])
      values[1] = parseFloat(values[1])
      result = parseFloat((values[0]/values[1]).toFixed(5)) 
    }

    if(isNaN(result)){
      return 'invalid number'
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    
    result = input.match(testReg)[1]

      //if no unit was initially put in, reject
      if (!result) 
        { result = input.match(testReg)[0] }
    
      //lowercase input to check validity    
      let smallUnit = result.toLowerCase();
      if (smallUnit === "gal" || smallUnit === "km" || smallUnit === "mi" || smallUnit === "lbs" || smallUnit === "kg")
        { return result.toLowerCase(); }

    if (smallUnit === "l")
     {result = "L"; return result }
    
    result = "invalid unit"
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    getSmall = initUnit.toLowerCase();

   if (getSmall === "mi")
        {result = "km"}

   if (getSmall === "km")
        {result = "mi"} 

   if (getSmall === "gal")
        {result = "L"}
    
   if (getSmall === "l")
    {result = "gal"}
    
   if (getSmall === "lbs")
    {result = "kg"}
    
   if (getSmall === "kg")
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
      case "L":
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
    var result;
       
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
 
 if (initUnit === "L" || initUnit === "l")
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
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
 

    result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
    //{ initNum: 3.1, initUnit: 'mi', returnNum: 4.98895, returnUnit: 'km', string: '3.1 miles converts to 4.98895 kilometers' }
    return result;
  };
  
}

module.exports = ConvertHandler;