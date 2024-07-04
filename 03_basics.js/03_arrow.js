const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {  //created a function inside a value of a object
        console.log(`${this.username} , welcome to website`);
        console.log(this); // will print whole object with key-value
    }

}

// user.welcomeMessage() //hitesh, welcome to website
// user.username = "sam"
// user.welcomeMessage() //sam, welcome to website

// console.log(this); //undefined

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //undefined, THIS cannot be used in functions
// }
// chai()

// const chai = function () { //creation of function with storing in another variable
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {   //this is called Arrow function, we can use this also to create function
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 //one-liner arrow function. Here it will automatically return the value.

// const addTwo = (num1, num2) => ( num1 + num2 ) //better to put it in a paranthesis, as when we will going to return the object then it should be inside ().

const addTwo = (num1, num2) => ({username: "hitesh"}) //we can return the object also but it should be inside paranthesis
console.log(addTwo(3, 4))
