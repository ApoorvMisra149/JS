const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //you can use this method also to print variables with a text.The above one is a older method.

const gameName = new String('hitesh-hc-com') //another method of creating a string

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString); //it will print from 0 to 3 values & not 4th value

const anotherString = gameName.slice(-8, 4)
console.log(anotherString); //it will count from negative

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); // to remove extra spaces before & after string

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))//gives output as true or false

console.log(gameName.split('-'));//Split() method takes a pattern & divides a string into an ordered list of substrings by searching for the pattern, put these substring into an array & return the array.
