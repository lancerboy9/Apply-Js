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
friendsAge.push(584,453,446); /* add elements to the tail of the array */
console.log("result is " + friendsAge);





