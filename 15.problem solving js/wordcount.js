let speech =
  "Hello,       Noman.I am Maruf, you know me.";
// speech[3]="M"; /* It can't change the position of a character , it just shows it . Cause it's not a perfect array. */
// console.log(speech[3]);

let count = 0;
for (let i = 0; i < speech.length; i++) {
  // console.log(speech[i]);
  let char = speech[i];
  if (char == " " && speech[i - 1] != " ") { /* When multiple spaces occur */
    /* We can count words by pointing position of spaces on a speech. */
    count++; /* It will count the numbers of the word */
  }
}
count++; /* By default , the programmes always count an extra word at the tail , so we need to use it for this reason. */
console.log(count);
