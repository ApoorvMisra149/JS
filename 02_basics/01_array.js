// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) //push value=6 at last in array
// myArr.push(7)
// myArr.pop() //pop out last value of array

// myArr.unshift(9) //add value 9 at 0th position & shift all other elemnts by 1
// myArr.shift()

// console.log(myArr.includes(9)); //true/false
// console.log(myArr.indexOf(3)); 

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice
//slice- it slices the array, but the original array is not changed. The returned value of slice is an string type.
//splice- it slices the array, & the new array value of original array  would be the unsliced value. Also, here the 

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)// it gives output from 1 to 2 & 3 is not included. Returned value is a string

console.log(myn1);
console.log("B ", myArr); //no chnage in original array


const myn2 = myArr.splice(1, 3) //it gives output from 1 to 3. Returned value is a string
console.log("C ", myArr); //original value of array is changed, now it doesn't include values b/w 1 to 3.
console.log(myn2);