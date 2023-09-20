const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruits1 = [
  ["Banana", "Orange"],
  ["Apple", "Mango"],
];
const vegetables = ["Potato", "Cabbage", "Tomato", "Brinjal"];
const fastfoods = ["Hamburger", "Milkshake", "Muffin", "Taco"];

//String ---> (Array print karva mate use)
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango' ]

//Length ---> (Array ni length janva mate)
console.log(fruits.length); //4

//toString() ---> (Convert array to string)
console.log(fruits.toString("")); //Banana,Orange,Apple,Mango

//join() ---> (join no use array ne aek sathe joint karva mate thai che)
console.log(fruits.join("*")); //Banana*Orange*Apple*Mango

//pop() ---> (pop no use array mathi last element remove karva mate thai che)
console.log(fruits.pop()); //Mango
console.log(fruits); //[ 'Banana', 'Orange', 'Apple' ]

//push() ---> (push no use array ma element add karva mate thai che)
console.log(fruits.push("Kiwi")); //4
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Kiwi' ]

//shift() ---> (shift ma array no first element remove kare)
console.log(fruits.shift()); //Banana
console.log(fruits); //[ 'Orange', 'Apple', 'Kiwi' ]

//unshift() ---> (unshift array ma new element ne first position par add kare )
console.log(fruits.unshift("Pineaple")); //4
console.log(fruits); //[ 'Pineaple', 'Orange', 'Apple', 'Kiwi' ]

//Changing Elements ---> (array ma new element ne add karva mate "[index number]"use thase )
console.log((fruits[0] = "Peach")); //Peach
console.log(fruits); //[ 'Peach', 'Orange', 'Apple', 'Kiwi' ]

//Array length ---> (array ma new element ne array ma last ma add karva mate thase)
console.log((fruits[fruits.length] = "Watermelon")); //Watermelon
console.log(fruits); //[ 'Peach', 'Orange', 'Apple', 'Kiwi', 'Watermelon' ]

//Array delete() ---> ()
console.log(delete fruits[1]); //true
console.log(fruits); //[ 'Peach', <1 empty item>, 'Apple', 'Kiwi', 'Watermelon' ]

//concat ---> (2 array ne joint karva mate use)
console.log(fruits.concat(vegetables));
// [
//     'Peach',
//     <1 empty item>,
//     'Apple',
//     'Kiwi',
//     'Watermelon',
//     'Potato',
//     'Cabbage',
//     'Tomato',
//     'Brinjal'
//   ]

//concat ---> (3 array ne joint karva mate use)
console.log(fruits.concat(vegetables, fastfoods));
// [
//     'Peach',      <1 empty item>,
//     'Apple',      'Kiwi',
//     'Watermelon', 'Potato',
//     'Cabbage',    'Tomato',
//     'Brinjal',    'Hamburger',
//     'Milkshake',  'Muffin',
//     'Taco'
//   ]

//cocat ---> (concat no use array ma new element add karva mate pan thai che)
console.log(fruits.concat("Dhosa")); //[ 'Peach', <1 empty item>, 'Apple', 'Kiwi', 'Watermelon', 'Dhosa' ]

//flat ---> (array ma andar na array ne joint karva mate)
console.log(fruits1.flat()); //[ 'Banana', 'Orange', 'Apple', 'Mango' ]

//splice() ---> (add new items to an array)
console.log(fruits.splice(1, 1, "Lemon", "Potato")); //[ <1 empty item> ]
console.log(fruits); //[ 'Peach', 'Lemon', 'potato', 'Apple', 'Kiwi', 'Watermelon' ]
// The first parameter (1) defines the position where new elements should be added (spliced in).
// The second parameter (1) defines how many elements should be removed.
// The rest of the parameters ("Lemon", "potato") define the new elements to be added.

//splice() ---> (to Remove Elements)
console.log(fruits.splice(0, 1)); //[ 'Peach' ]
console.log(fruits); //[ 'Lemon', 'potato', 'Apple', 'Kiwi', 'Watermelon' ]
// The first parameter (0) defines the position where new elements should be added (spliced in).
// The second parameter (1) defines how many elements should be removed.

//toString() ---> (to convert array to string)
console.log(fruits.toString()); //Lemon,potato,Apple,Kiwi,Watermelon

//sort() ---> (sort array alphabetic sequence)
console.log(fruits.sort()); //[ 'Apple', 'Kiwi', 'Lemon', 'Potato', 'Watermelon' ]
