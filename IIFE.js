// Immediately Invoked Function Expression (IIFE)

(function fenil() {
  console.log(`DB connected`);
})();
((name) => {
  console.log(`DB connected TWO, ${name}`);
})("fenil");
