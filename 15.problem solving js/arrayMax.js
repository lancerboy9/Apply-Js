// find the biggest number from an array
let myArray = [32, 66, 43, 76, 97, 22, 25];
let max = myArray[0]; /* Suppose that first element is the max value */
for (let i = 0; i < myArray.length; i++) {
  let element =
    myArray[i]; /* myArray[i] means  all the elements of the array */
  if (element > myArray[0]) {
    /* when element is bigger than the supposed number*/
    // element = max; //!this is wrong way , try to avoid it.
    max = element; /* max contains all elements of the array */
  }
}
console.log("This biggest number is", max);

