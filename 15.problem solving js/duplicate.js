// find the biggest number from the array
let marks = [23, 2, 54, 3, 2, 565, 3, 12, 23]; /* It's the array with duplicate marks */
let uniqueMarks = []; /* It's the new array which is empty , we'll put all empty marks here. */
for (let i = 0; i < marks.length; i++) { 
  let index = uniqueMarks.indexOf(marks[i]); /* It shows that is the marks are on the new array or not */
  if (index == -1) { /* If the marks are not on the array then it will return -1  */
    uniqueMarks.push(marks[i]); /* Let's push the unique marks to the new array */
  };
};
console.log(uniqueMarks);