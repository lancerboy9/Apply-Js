let friendsAge = [12, 111, 32, 46, 32];
// let mimAge = friendsAge[1]; /* output will be 111 */
friendsAge[1] = 33;
let mimAge = friendsAge[1]; /* output will be 33 , cause now the value is changed which was not above.*/
console.log(friendsAge);
console.log(mimAge);

