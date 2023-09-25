const score = undefined;

// console.log(typeof score);

const valuesInNumber = Number(score);
// console.log(typeof valuesInNumber); // number
// console.log(valuesInNumber); // NaN (Not A Number)

//Data Types Converted to Number with Output------------------>
// "33" => 33
// "33abc" => NaN (Not A Number)
// true => 1; false => 0
// null => 0
//undefined => NaN (Not A Number)

const isLoggedIn = 0;

const valuesInboolean = Boolean(isLoggedIn);
// console.log(valuesInboolean);

//Data Types Converted to Boolean with Output------------------>
// 1 => true; 0 => false
// "" => false
//"abc" => true

const someNumber = 33;

const valueInString = Array(someNumber);
// console.log(valueInString); //[ <33 empty items> ]

//*********************OPERATIONS******************************** */

let Values = 33;
let negValues = -Values;

// console.log(negValues); //-33

// console.log(2 + 2); //4
// console.log(2 - 2); //0
// console.log(2 * 2); //4
// console.log(2 ** 3); //8 (remender)
// console.log(2 / 2); //1
// console.log(2 % 3); //2 (modulas)

let str1 = "Hello";
let str2 = " fenil";

let str3 = str1 + str2;
// console.log(str3); //Hello fenil
