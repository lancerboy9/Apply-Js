let politician = 450;
let doctor = 900;
let engineer = 1050;
/* if (politician > doctor) {
  if (politician > engineer) {
    console.log("Politician is bigger");
  } else {
    console.log("engineer is bigger");
  }
} else {
  if (doctor > engineer) {
    console.log("Doctor is bigger");
  } else {
    console.log("Engineer is bigger");
  }
} */

//* We can do it another way
let result = Math.max(politician, doctor, engineer); /* it will just show the value */
console.log(result);
