// We can do factorial in two ways .
// They are 1. Iterative and 2. Recursive .
// In both ways we can use for loop and while loop and also we can use function as well.
// Example of factorial --
// 10! = 1*2*3*4*5*6*7*8*9*10

// 1-->> Iterative way...

//* Using for loop
let factorial = 1;
for (let i = 1; i <= 5; i++) {
  //   console.log(i);
//   let multiply = factorial * i;
//   let result = multiply * i;
   factorial = factorial * i; /* Here factorial is the modification of the above factorial */
  //   console.log(factorial);
};
console.log(factorial);

// *Using while loop
let i = 1;
let factorial = 1;
while(i<=10){
  factorial = factorial*i;
  i++;
};
console.log(factorial);

//* factorial in function
function factFunc(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial =
      factorial *
      i; /* Here factorial is the modification of the above factorial */
    // console.log(factorial);
  }
  return factorial;
}
let result = factFunc(10);
console.log(result);

// same thing in while loop

function factFunc(n) {
  let i = 1;
  let factorial = 1;
  while (i <= n) {
    factorial =
      factorial *
      i;
      i++; /* Here factorial is the modification of the above factorial */
    // console.log(factorial);
  }
  return factorial;
}
let result = factFunc(7);
console.log(result);

//* now we gonna use factorial in recusive way

//6! = 1*2*3*4*5*6
//    = 5!*6
// n! = (n-1)!*n
//    = n*(n-1)
let factorial = 1;
for (let i = 10; i >= 1; i--) {
  factorial = factorial * i;
  console.log(i, factorial);
}
console.log(factorial);

function myFunc(n) {
  let factorial = 1;
  for (let i = n; i >= 1; i--) {
    factorial = factorial * i;
    console.log(i, factorial);
  }
  return factorial;
};
let result = myFunc(0);
console.log(result);


function recFactorial(n){
  if (n = 0) {
    return 1;
  } else {
  return  n*factorial(n-1);    
  }
}
let result = recFactorial(22);
console.log(result);
