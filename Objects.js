// Object.create ---> this called counstructer thi declaration

// Object literals

const mySym = Symbol("key1"); //symbol declaration

const JsUser = {
  name: "fenil",
  [mySym]: "myKey1", // symbol key
  age: 19,
  location: "Surat",
  email: "fenil@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// 2 types of object declaration
// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser[mySym]); //symbol print

// how to lock values (object ni values change nai thase)
// JsUser.email = "fenil@chatgpt.com";
// Object.freeze(JsUser);
// JsUser.email = "fenil@microsoft.com";
// console.log(JsUser);

//How to make function in object
JsUser.greeting = function () {
  console.log("hello JS User");
};

JsUser.greetingTwo = function () {
  console.log(`hello JS User, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
