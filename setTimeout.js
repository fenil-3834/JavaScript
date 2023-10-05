const myTimeout = setTimeout(myGreeting, 5000);

function myStopFunction() {
  console.log("Good Morning");
  clearTimeout(myTimeout);
}

setInterval(() => {});
