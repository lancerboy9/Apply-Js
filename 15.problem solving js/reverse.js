// *Swap exchanges the position of the elements
let a = 6;
let b = 8;
console.log("Before swap " + "a = " + a, " b = " + b);
// after swap
let temp =
  a; /* Here temp is just a temporary variable which is extra comes from outside of the world, first of all we put a variable into temp var  */
a =
  b; /* now a is free, it has available free spaces, so we are transferring b var to the a var */
b =
  temp; /* now a is free, it has available free spaces, so we are transferring temp var which is containing a var to the b var */
console.log("After swap " + "a = " + a, " b = " + b);

// another way to do the same thing
let x = 8;
let y = 4;
console.log("x =", x, "y = ", y);
x =
  x +
  y; /* x includes x and y itself , it's the new value of x which is now 12, before it was 8 */
y = x - y; /* here x means x+y */
// y = x+y-y;
// y = x
x = x - y;
console.log("x =", x, "y = ", y);

let p = 7;
let q = 3;
console.log("P = " + p, "q = " + q);
[p, q] = [q, p];
console.log("P = " + p, "q = " + q);
