//some statements are always true or false which is called truthy or falsy values

const userEmail = []

if (userEmail) { // this means (userEmail==true)
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values-
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values-
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) { // Object.keys(emptyObj) will going to return all keys in a array
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
//this operator will going to assign 1st value, if it is null or undefined then will assign 2nd value

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")