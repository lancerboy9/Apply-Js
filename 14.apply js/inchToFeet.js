// * inch to feet meter

// let inch = 288;
// let feet = inch/12;
// console.log(feet);

function inchTofeet(inch){
    let feet = inch/12;
    return feet;
};
let dad = inchTofeet(24);
// console.log(dad);
let mom = inchTofeet(48);
// console.log(mom);
let sos = inchTofeet(96);
// console.log(sos);

// * using array 
let inches = [24,48,96];
let result = inchTofeet(inches[1]);
console.log(result);
