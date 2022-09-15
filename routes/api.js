'use strict';
const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  app.route('/api/convert').get(function (req,res){
    console.log(req.query.input);
    let input = req.query.input;
  
    if (input.length==0) {
      res.send('invalid unit');
    }
    else{
      let initNum=convertHandler.getNum(input);
      let initUnit=convertHandler.getUnit(input);
     // console.log(initUnit);
      if (initNum=='invalid number'){
       if(initUnit=='invalid unit')
       {
         res.json('invalid number and unit');
       }
        else
       {
         
       res.json(initNum);
       }
      }
     else if(initUnit=='invalid unit')
     {
       res.json(initUnit);
     }
      else
      {
       let returnNum=convertHandler.convert(initNum,initUnit);
       let returnUnit=convertHandler.getReturnUnit(initUnit);
       let String=convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
       initNum=parseFloat(initNum); 
       returnNum=parseFloat(returnNum); res.json({initNum,initUnit,returnNum,returnUnit, string: String});
      
      
      }
    }
  })

};
