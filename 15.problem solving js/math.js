let num = 10;
// let result = Math.ceil(num); /* shows the upper number of the first number */
//  result = Math.floor(num); /* shows the lower number of the first number */
//  result = Math.round(num); /* if the number of the after decimal is greater than 5 than it will return the next number of first number otherwise it will show the first number itself */
//  result = Math.random(num); //!This is wrong way
result = Math.random() * 10; //!This is right way , you should not put any thing inside the bracket
integer = Math.round(result); /* show the integer of the random number */
// console.log(integer);

// using for loop on random numbers

for (let i = 0; i < 100; i++) {
  let randomNum = Math.random() * 100;
  let integerNum = Math.round(randomNum);
  console.log(integerNum);
}
