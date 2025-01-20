function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
<<<<<<< HEAD
    
    return result;
  };
  
=======
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


>>>>>>> parent of a0d2591 (feat: all output is correctly accepting, rejecting, and converting. trying to figure out why I'm getting errors for some rejections in the node terminal)
  this.getUnit = function(input) {
    let result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
