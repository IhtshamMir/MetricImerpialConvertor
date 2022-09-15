
function ConvertHandler() {
  let inputRegex=/[a-z]+|[^a-z]+/gi;
  let onlyUnit=/^[a-zA-Z]+$/;
  let fractionFormat = /^(\d+\.?\d+|\.?\d+?)\/(\d+\.?\d+|\.?\d+?)(\w+)?$/;
  let integerFormat=/^(\d+\.?\d+|\.?\d+?)(\w+)?$/;
  this.getNum = function(input) {
    let result;
    if(fractionFormat.test(input)==true){
        result=input.split(fractionFormat)[1]/input.split(fractionFormat)[2];
      
       } 
    else if (integerFormat.test(input)==true){
       result=input.split(integerFormat)[1];
       result=parseFloat(result);
    }
    else if(onlyUnit.test(input)==true )
    {
      result=1;
      result=parseInt(result);
    }
    else
    {
      result='invalid number';
    }
    return result;
  };
  
  this.getUnit = function(input) {
    let result,extractUnit;
    for(let i=0; i<input.match(inputRegex).length; i++)
      {
        extractUnit=input.match(inputRegex)[i];
        if((/[a-z]+/gi).test(extractUnit)==true)
        {
          result=extractUnit.toLowerCase();
        }
    
        }
     if (result=='gal' || result=='lbs' || result=='kg' || result=='mi' || result=='km' )
      {
        return result;
      } 
      else if(result=='l' )
      {
        result='L';
        return result;
      }

      else 
      {
       result='invalid unit';
        return result;
      }
    
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    if (initUnit=='gal')
      {
        result='L';
        
      }
      else if(initUnit=='L')
      {
        result='gal';
        
      }
      else if(initUnit=='lbs')
      {
        result='kg';
      }
      else if (initUnit =='kg')
      {
        result='lbs';
      }
      else if(initUnit=='mi')
      {
        result='km';
      }
      else if(initUnit=='km')
      {
        result='mi';
      }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    if (unit=='gal')
      {
        result='gallons';
        
      }
      else if(unit=='L')
      {
        result='liters';
        
      }
      else if(unit=='lbs')
      {
        result='pounds';
      }
      else if (unit =='kg')
      {
        result='kilograms';
      }
      else if(unit=='mi')
      {
        result='miles';
      }
      else if(unit=='km')
      {
        result='kilometers';
      }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
     if (initUnit=='gal')
      {
        result=(initNum*galToL);
      }
      else if(initUnit=='L')
      {
        result=(initNum/galToL);
        
      }
      else if(initUnit=='lbs')
      {
        result=(initNum*lbsToKg);
        
      }
      else if (initUnit =='kg')
      {
        result=(initNum/lbsToKg);
       
      }
      else if(initUnit=='mi')
      {
        result=(initNum*miToKm);
        
      }
      else if(initUnit=='km')
      {
        result=(initNum/miToKm);
        
      }
    return result.toFixed(5);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
        result=initNum +' '  +this.spellOutUnit(initUnit)+' '+'converts to'+' ' +returnNum+' '+this.spellOutUnit(returnUnit);
        
    return result;
  };
  
}

module.exports = ConvertHandler;
