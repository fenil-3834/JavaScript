// for loop

// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   if (element == 5) {
//     // console.log("5 is the best");
//   }
//   //   console.log(i);
// }

for (let i = 1; i <= 10; i++) {
  console.log(`outer loop: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`inner loop: ${j} and inner loop: ${i}`);
    console.log(i + "x" + j + "=" + i * j);
  }
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
