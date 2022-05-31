// * fibonacci sequence
let fibo = [0,1];
for(let i = 2 ; i <= 10 ; i ++){ /* i =2 means it starts from 2 index */
    fibo[i] = fibo[i-1] + fibo[i-2];
    // console.log(fibo[i],fibo[i-1],fibo[i-2]);
};
console.log(fibo);

// * fibonacci in function
function funcFibo(n) {
  let fibo = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}
let result = funcFibo(20);
console.log(result);

// * fibonacci in while loop
let fibo = [0, 1];
let i = 2;
while (i <= 10) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
  i++;
}
console.log(fibo);

// using function
function funcFibo(n) {
  let fibo = [0, 1];
  let i = 2;
  while (i <= n) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
    i++;
  };
   return fibo;
};
let result = funcFibo(14);
console.log(result);

