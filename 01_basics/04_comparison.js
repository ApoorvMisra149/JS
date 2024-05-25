// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); // true-it automatically converts string to a no. if comparison operator is there
// console.log("02" > 1); //true
//console.log("2" == 2); //true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
//the reason is that equality check(==) & comparison > >= < <= work differently
//Comparison converts null to a number, treating it as a 0 , while == doesn't convert it to 0

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// === 

console.log("2" === 2); //false- === checks the data type , as string & no. are not equal so false
