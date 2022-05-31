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
let teaLine = ["Kalam", "Abir", "Shofiq"];
teaLine.unshift("Mukhles"); /* unshift add one item to the start of the array */
console.log(teaLine);

// array slice
let coffeLine = ["Kalam", "Abir", "Shofiq", "Monir", "Tapos", "Ahsan"];
let newLine =
	coffeLine.slice(
		2
	); /* it will take the whole array unless you put and end number */
newLine = coffeLine.slice(
	2,
	4
); /* it also returns a new array but it does not change the actual array */
console.log(newLine);
console.log(coffeLine);

//array splice
// it's all same as array slice just one difference it will modify the actual arraay

// * while loop
// while loop is condition based loop, it required a condition in order to run when the condition is fulfilled it will be closed automatically.
let num = 0;
while (num < 15) {
	console.log(num); /* can't print more 15 cause it limited */
	num++; /* num++ means num = num + 1 */
}

//* for loop
// for loop is count based loop it will run until the given
for (let i = 0; i <= 10; i++) {
	console.log(i);
}

// * run through a for loop
// using a for loop
let friends = ["Omar", "Shofiq", "Rofiq", "Kalam", "Polas", "Rifat"];
for (let i = 0; i < friends.length; i++) {
	let element = friends[i];
	console.log(element);
}

// * Switch on JS
let mark = 5;
switch (mark) {
	case 33 /* it's not a semi-colon */:
		console.log("I am not 50");
		break; /* must use it , otherwise code will  be executed even after fulfilling the conditions */
	case 333:
		console.log("also not matched");
		break;
	case 5:
		console.log("At last we found you");
		break;
	case 342: /* use multiple case at once */
	case 33334:
		console.log("also not matched");
		break;
	default:
		console.log(/* "if nothing matched then it will be printed" */);
}

//* functions in js
function callHim() {
	console.log("Oi Bro, Ki obostha, Kemon Jaitace Dinkal");
	console.log("Valo to   ?");
}
callHim();
//* adding parameter in the function
function trippleIt(number) {
	let result = number * 3;
	// console.log(result);
	return result;
}
let nowItWillWork =
	trippleIt(
		5
	); /* if you don't use variable on  calling function while using return  the output will be empty*/
// console.log(nowItWillWork);

let ten = trippleIt(10);
let twenty = trippleIt(20);
let total = ten + twenty;
console.log(total);

//* adding multiple parameter in the function
function add(num1,num2){
	let result = num1 + num2 ;
	return result;
};
let inputNum = add(5,6);
// console.log(inputNum1);

//* Objects in JS
let students = {
	Name:"Maruf",
	Roll:3,
	Class:"N/A",
	Phone:3047540387
};
//* let studentName = students.Name; /* way 1 to know about the objects element */
//* let studentName = students["Phone"];  /* way 2 to know about the objects element */
//* let studentClass = students["Class"];  /* way 3 to know about the objects element */
// let studentName = studentClass;
// console.log(studentName);

//* Update Object data
students.Roll = 4;
students["Roll"] = 5;
console.log(students);



