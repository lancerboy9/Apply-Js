//* array

let friendsAge = [12, 111, 32, 46, 32];
// let mimAge = friendsAge[1]; /* output will be 111 */
friendsAge[1] = 33;
let mimAge =
  friendsAge[1]; /* output will be 33 , cause now the value is changed which was not above.*/
console.log(friendsAge);
console.log(mimAge);

// * array position(indexOf)

let position =
  friendsAge.indexOf(46); /* indexOf show the position of an array element */
console.log(position);
position = friendsAge.indexOf(22);
console.log(
  position
); /* it will return -1 because 22 is missing on the array */

// * array  push
friendsAge.push(584, 453, 446); /* add elements to the tail of the array */
console.log("result is " + friendsAge);

//* array lenth
let showLength = friendsAge.length; /* show the length of the array */
console.log(showLength);

// * array pop
friendsAge.pop(); /* delete one item from the last */
console.log(friendsAge);


// * array shift 
// let teaLine = ["Kalam","Abir","Shofiq"];
// teaLine.shift(); /* shift delete one item from the start of the array */
// console.log(teaLine);

// * array unshift 
let teaLine = ["Kalam","Abir","Shofiq"];
teaLine.unshift("Mukhles"); /* unshift add one item to the start of the array */
console.log(teaLine);

// array slice
let coffeLine = ["Kalam","Abir","Shofiq","Monir","Tapos","Ahsan"];
let newLine = coffeLine.slice(2);/* it will take the whole array unless you put and end number */
newLine = coffeLine.slice(2,4);/* it also returns a new array but it does not change the actual array */
console.log(newLine);
console.log(coffeLine);

//array splice 
// it's all same as array slice just one difference it will modify the actual array

