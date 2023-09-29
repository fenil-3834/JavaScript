function myName() {
  console.log("F");
  console.log("E");
  console.log("N");
  console.log("I");
  console.log("L");
}

// myName();

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
//   }
//   addTwoNumbers(3, 4);

//return functoion
function addTwoNumbers(num1, num2) {
  let result = num1 + num2;
  return result;
}
const result = addTwoNumbers(3, 4);
// console.log("Result:", result);

function loginUserMessage(username = "Guest") {
  if (!username) {
    console.log("please enter user name");
    return;
  }
  return `${username} just logged in`;
}
// console.log(loginUserMessage("fenil"));

function calculateCartPrice(...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500));

let user = {
  username: "Fenil",
  Price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.Price}`
  );
}

user.username = "naimish";
Object.freeze(user);
// handleObject(user);

// handleObject({
//   username: "naimish",
//   Price: 299,
// });

const myNewArray = [200, 300, 400, 500];

function returnSecondValue(getArray) {
  return getArray[1];
}
console.log(returnSecondValue(myNewArray));
const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
  return s.length;
});

console.log(a2); // [8, 6, 7, 9]

const a3 = a.map((s) => s.length);

console.log(a3); // [8, 6, 7, 9]const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
