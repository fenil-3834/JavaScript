// if staetment

// const isUserloggedIn = true;
// const temp = 51;
// if (temp < 50) {
//   console.log("less then 50");
// } else {
//   console.log("more than 50");
// }
// console.log("Executed");

// const score = 100;
// if (score >= 100) {
//   const power = "fly";
//   console.log(`User power: ${power}`);
// } else {
//   const power = "swim";
//   console.log(`User power: ${power}`);
// }

// implicite scope
// const balance = 499;
// if (balance > 500) console.log("test"), console.log("test2");  "❌" wrong method
// if (balance <= 500) {
//   console.log("less than 500");
// } else if (balance <= 750) {
//   console.log("less than 750");
// } else if (balance <= 1000) {
//   console.log("less than 1000");
// } else {
//   console.log("more than 1000");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if (userLoggedIn && debitCard) {
  console.log("Allow to Buy");
} else {
  console.log("Don't allow");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("Logged In Seccesfully!!!!");
} else {
  console.log("Kal ana");
}

const month = 5;
switch (month) {
  case "1":
    console.log("January");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("Jun");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("Aug");
    break;
  case 9:
    console.log("Sptember");
    break;
  case 10:
    console.log("Octobar");
    break;
  case 11:
    console.log("Navember");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Default case match");
    break;
}
