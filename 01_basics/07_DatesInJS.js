// Dates

let myDate = new Date() //Creation of date object
// console.log(myDate.toString()); //display date in a readable string format
// console.log(myDate.toDateString()); //display in another date format
// console.log(myDate.toLocaleString());//display date in milliseconds format
// console.log(typeof myDate);  //object

// let myCreatedDate = new Date(2023, 0, 23) //different methods to enter date. Month starts from 0
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() //current date

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); //differnt methods of Date vocabulary. Just enter ctrl + Space for VS Code to display different methods of Date
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); //getMonth() .getYear() are different methods of Date vocab
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
