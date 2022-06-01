function reverseIt(str) {
  /* str is just a parameter */
  let reverse = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    reverse =
      char + reverse; /* It's the main culprit to reverse the whole game. */
  }
  return reverse;
}
let statement = "Ami tore deikha voy pai na , tore ami bal diao goni na";
let result = reverseIt(statement);
result = reverseIt("Cholo Bangladesh ,cholo bisser dare .")
console.log(result);
