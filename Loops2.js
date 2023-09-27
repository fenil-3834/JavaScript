// OBJECT MA FOR IN LOOP NO USE THASE
// ARRAY MA FOR OF LOOP NO USE THASE

// for of loop

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //   console.log(num);
}

const greetings = "HELLO WORLD";
for (const greet of greetings) {
  //   console.log(greet);
}

//Maps

const map = new Map();
map.set("IN", "INDIA");
map.set("US", "UNITED STATES");
map.set("FR", "FRANCE");
// console.log(map);

for (const [key, value] of map) {
  //   console.log(key, ":-", value);
}

//for in loop
const myObject = {
  game1: "NFS",
  game2: "GTA",
};

for (const key in myObject) {
  //   console.log(`${key} is ${myObject[key]}.`);
}

// for (const [key, value] of myObject) {
//   console.log(key, ":-", value);
// }

const programming = ["js", "rb", "py", "java", "cpp"];
for (const key in programming) {
  //   console.log(programming[key]);
}

const map1 = new Map();
map.set("IN", "INDIA");
map.set("US", "UNITED STATES");
map.set("FR", "FRANCE");

for (const key in map1) {
  console.log(key);
}
