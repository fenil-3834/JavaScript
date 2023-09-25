// how to declare object using singleton or littrals
// const instaUser = new Object() //-----> singleton object
// const instaUser = {} //-----> non-singleton object

const instaUser = {};
instaUser.id = "123abc";
instaUser.name = "fenil";
instaUser.isLoggedIn = false;

// console.log(instaUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "fenil",
      lastname: "ramani",
    },
  },
};
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj4 = { 5: "e", 6: "f" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({} , obj1, obj2, obj4); // -----> object assign use to combine two  object in one variable

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

const users = [
  {
    id: 1,
    email: "some@google.com",
  },
  {
    id: 1,
    email: "some@google.com",
  },
  {
    id: 1,
    email: "some@google.com",
  },
];

users[1].email;
console.log(instaUser);

console.log(Object.keys(instaUser)); // all key of objects
console.log(Object.values(instaUser)); // all values of objects
console.log(Object.entries(instaUser)); // all values of objects

console.log(instaUser.hasOwnProperty("name")); // to check "name" property in available Object

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "abc",
};
const { courseInstructor: instructor } = course; // object de-structure use for code neat and clean
console.log(instructor);
