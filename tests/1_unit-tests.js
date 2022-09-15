const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  test('Whole number input', function () {
    let input='32L';
      assert.equal(convertHandler.getNum(input),32);
    });
  test('decimal number input', function () {
    let input='32.2L';
    assert.equal(convertHandler.getNum(input),32.2);
    });
  test('Fractional input', function () {
    let input='1/3L';
    assert.equal(convertHandler.getNum(input),0.3333333333333333);
    });
   test('Fractional input with decimal', function ()    {
    let input='2.4/5L';
  assert.equal(convertHandler.getNum(input),0.48);
    });
   test('Double fraction', function ()    {
    let input='2/4/5L';
 assert.equal(convertHandler.getNum(input),'invalid number');
    });
  test('Return 1 when number is null', function ()    {
    let input='L';
 assert.equal(convertHandler.getNum(input),1);
    });
  test('Read valid input unit', function ()    {
    let input='32L';
assert.equal(convertHandler.getUnit(input),'L');
    });
  test('Read invalid input unit', function ()    {
    let input='32ma';
assert.equal(convertHandler.getUnit(input),'invalid unit');
    });
  test('Read valid return unit against valid input unit', function ()    {
    let input='gal';
assert.equal(convertHandler.getReturnUnit(input),'L');
    });
  test('return the spelled-out string unit for each valid input unit', function ()    {
    let input='gal';
assert.equal(convertHandler.spellOutUnit (input),'gallons');
    });
  test('convert gal to L', function ()    {
    let input=[5, "gal"];
assert.equal(convertHandler.convert(input[0],input[1]),18.92705);
    });
  test('convert L to gal', function ()    {
    let input=[5, "L"];
assert.equal(convertHandler.convert(input[0],input[1]),1.32086);
    });
  test('convert mi to km', function ()    {
    let input=[5, "mi"];
assert.equal(convertHandler.convert(input[0],input[1]),8.04670);
    });
  test('convert convert km to mi', function ()    {
    let input=[5, "km"];
assert.equal(convertHandler.convert(input[0],input[1]),3.10686 );
    });
  test('convert convert lbs to kg ', function ()    {
    let input=[5, "lbs"];
assert.equal(convertHandler.convert(input[0],input[1]),2.26796  );
    });
   test('convert convert kg to lbs ', function ()    {
    let input=[5, "kg"];
assert.equal(convertHandler.convert(input[0],input[1]),11.02312);
    });
});