let num = 23;
for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    console.log("This is  a not prime number");
    break;
  } else {
    console.log("This is  a prime number");
    break;
  }
}

// * same thing just using  function
function isPrimeNum(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return "This is not a  prime number"; /* If you use return you don't need to use break */
    }
  }
  return "This is a prime number";
}
let result = isPrimeNum(15);
console.log(result);
