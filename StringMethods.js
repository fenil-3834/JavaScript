const gameName = "Forza Horizon is the best game for pc.";
const gameName1 = "This game is best.";

//String ---> (sentence print karva mate use)
console.log(gameName); //Forza Horizon is the best game for pc.

//Length ---> (sentence ni length janva mate)
console.log(gameName.length); //38

//Slice() ---> (sentence mathi amuk words print karva mate)
console.log(gameName.slice(6, 13)); //Horizon (start thi slice karva mate value 0 thi start karvi)
console.log(gameName.slice(17)); //the best game for pc.
console.log(gameName.slice(-7)); //for pc.  (end thi slice karva mate value 1 thi count karvi)
console.log(gameName.slice(-7, -4)); //for

//substring() ---> (sentence mathi amuk words print karva mate)
console.log(gameName.substring(6, 13)); //Horizon (substring ae slice ni sathe similar j 6e.)

//substr() ---> (sentence mathi amuk words print karva mate)
console.log(gameName.substr(6, 14)); //Horizon is the (substr ae slice ni sathe similar j 6e. but ama start point kyathi karvanu ae and end point start point thi jetla word levana hoi te)
console.log(gameName.substr(14)); //is the best game for pc.
console.log(gameName.substr(-7)); //for pc.

//replace() ---> (sentence mathi koik word ne bija word sathe replace karva mate use)
console.log(gameName.replace("pc", "computer")); //Forza Horizon is the best game for computer. (replace name is case sensetive. || pachal "/g" lagava thi aek sathe badha words replace thai sake.[EX:- console.log(gameName.replace(/pc/g, "computer"));])

//toUpperCase() ---> (akha sentence ne "UPPER CASE" ma karva mate)
console.log(gameName.toUpperCase()); //FORZA HORIZON IS THE BEST GAME FOR PC.

//toLowerCase() ---> (akha sentence ne "lower case" ma karva mate)
console.log(gameName.toLowerCase()); //forza horizon is the best game for pc.

//concat() ---> (2 sentence ne joint karva mate use)
console.log(gameName.concat("", gameName1)); //Forza Horizon is the best game for pc.This game is best.

//trim() ---> (sentence ni bane baju (sentence ni agal and pachal) thi white space remove kare)
console.log(gameName.trim()); //Forza Horizon is the best game for pc.

//trimStart() ---> (sentence ni agal thi j white space remove kare)
console.log(gameName.trimStart()); //Forza Horizon is the best game for pc.

//trimEnd() ---> (sentence ni pachal thi j white space remove kare)
console.log(gameName.trimEnd()); //Forza Horizon is the best game for pc.

//Padding() ---> (padding nu use sentence ni agal ke pachal jagya mate thai che)
//padStart() ---> (padStart sentence ma agal jagya mate use)
console.log(gameName.padStart(40, "00")); //00Forza Horizon is the best game for pc.
//padEnd() ---> (padEnd sentence ma pachal jagya mate thai che)
console.log(gameName.padEnd(40, "00")); //Forza Horizon is the best game for pc.00

//charAt() ---> (charAt ma index(0 thi count karvanu) par thi specific word choose karva mate)
console.log(gameName.charAt(6)); //H

//charCodeAt() ---> (charCodeAt returns a UTF-16 code (an integer between 0 and 65535).)
console.log(gameName.charCodeAt(1)); //111

//split() ---> (splite ma string ne array ma convert kare che)
console.log(gameName.split(""));
