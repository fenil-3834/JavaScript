const score = undefined;

// console.log(typeof score);

const valuesInNumber = Number(score);
console.log(typeof valuesInNumber); // number
console.log(valuesInNumber); // NaN (Not A Number)

//Data Types Converted to Number with Output------------------>
// "33" => 33
// "33abc" => NaN (Not A Number)
// true => 1; false => 0
// null => 0
//undefined => NaN (Not A Number)

const isLoggedIn = 0;

const valuesInboolean = Boolean(isLoggedIn);
console.log(valuesInboolean);

//Data Types Converted to Boolean with Output------------------>
// 1 => true; 0 => false
// "" => false
//"abc" => true

const someNumber = 33;

const valueInString = Array(someNumber);
console.log(valueInString);
