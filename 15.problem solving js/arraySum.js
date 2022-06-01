// Let's find the total sum of an array
let myArray = [23, 545, 656, 232, 21, 645, 44, 75];
let sum = 0; /* Let's assume the initial some is Zero(0)  */
for (let i = 0; i < myArray.length; i++) {
  let element = myArray[i];
  sum = sum + element;
}
// console.log("Total sum of the array =", sum);

// Do the same thing in case of function
function getArrayNum(myArray) {
  let sum = 0;
  for (let i = 0; i < myArray.length; i++) {
    let element = myArray[i];
    sum = sum + element;
  };
return sum;
};
console.log("Total sum =", sum);

