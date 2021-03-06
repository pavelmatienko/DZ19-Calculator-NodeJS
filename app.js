const summation = require('./add');
const subtraction = require('./sub');
const multiplication = require('./mult');
const division = require('./div');

const currentValue = 10;
const currentValue1 = summation.add(currentValue, 2);
const currentValue2 = subtraction.sub(currentValue1, 5);
const currentValue3 = multiplication.mult(currentValue2, 4);

console.log(summation.add(currentValue, 2)) // 12
console.log(subtraction.sub(currentValue1, 5)) // 7
console.log(multiplication.mult(currentValue2, 4)) // 28
console.log(division.div(currentValue3, 2)) // 14