// Arithmetic operators

// + (Addition)
// - (Subtraction)
// * (Multiplication)
// ** (Exponentiation)
// / (Division)
// % (Modulus i.e. Remainder)
// ++ (Increment)
// -- (Decrement)

// let a = 10;
// let b = 5;

// console.log("a + b = ", a + b);
// console.log("a - b = ", a - b);
// console.log("a * b = ", a * b);
// console.log("a ** b = ", a ** b);
// console.log("a / b = ", a / b);
// console.log("a % b = ", a % b);
// console.log("a ++ = ", a++);
// console.log("a =", a);
// console.log("a -- = ", a--);
// console.log("a =", a);
// -----------------------------------------------------------------------------------------------------

//Assignment Operators

// =
// +=
// -=
// *=
// /=
// %=
// **=

// let a = 10;
// let b = 8;

// a += 5;
// console.log(a);

// a -= 5;
// console.log(a);

// a *= 5;
// console.log(a);

// a /= 5;
// console.log(a);

// a %= 5;
// console.log(a);

// a **= 5;
// console.log(a);
// ---------------------------------------------------------------------------------------------------

//Comparison Operators

// ==	(equal to)
// ===	(equal value and equal type)
// !=	(not equal)
// !==	(not equal value or not equal type)
// >	(greater than)
// <	(less than)
// >=	(greater than or equal to)
// <=	(less than or equal to)

// let a = 10;
// let b = 50;

// console.log("a == b =", a == b);
// console.log("a === b =", a === b);
// console.log("a != b =", a != b);
// console.log("a !== b =", a !== b);

// let c = 50;
// let d = 10;
// console.log("c > d =", c > d);
// console.log("c >= d =", c >= d);

// let e = 10;
// let f = 50;
// console.log("e < f =", e < f);
// console.log("e <= f =", e <= f);
//-------------------------------------------------------------------------------------------------------------------------------

//Logical Operators

// && logical "AND" ( 2 ne value true thase tyare j true return karse)
// true + true = true
// true + false = false
// false + true = false
// false + false = false

// const a = 10;
// const b = 20;

// console.log(a < b && a !== b);

// || logical "OR" ( 1 value pan true ave aetle true )
// true + true = true
// true + false = true
// false + true = true
// false + false = false

// const a = 10;
// const b = 20;

// console.log(a < b || a === b);

// !  logical "NOT" (NOT:-- true value ne false karse and false value ne true karse)

// console.log(!true);
// console.log(!false);
//-----------------------------------------------------------------------------------------------------------------

//String Operators ( string operators ma khali "+" j thai baki badha operators(-,/,*,etc) string ne numbers ma convert kari ne output apse)

// + (Addition)
// let a = "fenil";
// let b = "ramani";
// console.log(a + " " + b);
//-------------------------------------------------------------------------------------------------------------------------

//Conditional (ternary) operator:---> (Syntax:-  condition ? True : False)

// function greeting(isMorning) {
//   return isMorning ? "Good Morning" : "Good Afternoon";
// }
// console.log(greeting(true));
// console.log(greeting(false));

// function example(balance) {
//   return balance <= 500
//     ? console.log("less than 500")
//     : balance <= 750
//     ? console.log("less than 750")
//     : balance <= 1000
//     ? console.log("less than 1000")
//     : console.log("less than 1000");
// }
// example(500);

// let age = 19;
// let name;
// name = "value is" + " " + (age >= 20 ? "True" : "False");
// console.log(name);

// Example class name
var className = "my-class";

// Convert class name to a ternary operator
var result = className.includes("inactive") ? "active-class" : "inactive-class";

console.log(result);
