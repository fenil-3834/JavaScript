// this :---> current contex ne refer kare

const user = {
  username: "Fenil",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    // console.log(this);
  },
};
// user.welcomeMessage();
// user.username = "Meet";
// user.welcomeMessage();

// function one() {
//   let username = "fenil";
//   console.log(this.username);
// }
// one();

// const chai = function () {
//   let username = "fenil";
//   console.log(this.username);
// };
// chai();

// const chai = () => {
//   let username = "fenil";
//   console.log(this);
// };
// chai();

//--------------------------------------------------------

//Arrow Function (Syntax:---> (param) => {})

//explicit return (return key word no use thase)
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwo(3, 2));

//implicit return (return keyword no use thase nai)
// const addTwo = (num1, num2) => num1 + num2;
// console.log(addTwo(3, 2));

// const addTwo = () => ({
//   username: "Fenil",
// });
// console.log(addTwo());
