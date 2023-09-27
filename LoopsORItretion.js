// for loop

// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   if (element == 5) {
//     // console.log("5 is the best");
//   }
//   //   console.log(i);
// }

for (let i = 1; i <= 10; i++) {
  // console.log(`outer loop: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(i + "x" + j + "=" + i * j);
  }
}

let myarray = ["Fenil", "Meet", "Arth"];
// console.log(myarray.length);
for (let i = 0; i < myarray.length; i++) {
  const element = myarray[i];
  // console.log(element);
}

// pattern
// function pattern(a) {
//   for (let i = 1; i <= a; i++) {
//     let string = "";
//     for (let j = 1; j <= i; j++) {
//       string += "*";
//     }
//     console.log(string);
//   }
// }
// pattern(10);

// keywords (break and continue)

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    // console.log("detedted 5");
    break;
  }
  // console.log(`value of i is ${i}`);
}

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    // console.log("detedted 5");
    continue;
  }
  // console.log(`value of i is ${i}`);
}

// while loop
let i = 0;
while (i <= 10) {
  // console.log(`value of i is ${i}`);
  i = i + 2;
}

// while loop array
let myarray1 = ["Fenil", "Meet", "Arth"];
let arr = 0;
while (arr < myarray1.length) {
  console.log(`value of arr is ${myarray1[arr]}`);
  arr++;
}

// do while loop
let score = 11;
do {
  // console.log(`Score is ${score}`);
  score++;
} while (score <= 10);

function pattern(a) {
  let string = "";
  for (let i = 1; i < a; i++) {
    for (let j = 1; j < i; j++) {
      string += " ";
    }
    for (let k = 0; k < 2 * (a - i) - 1; k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}
pattern(5);
