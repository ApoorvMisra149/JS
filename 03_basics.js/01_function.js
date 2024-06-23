
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}// syntax for declaration of a function 

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// } //without return it will not going to return any value

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result //this is correct
    return number1 + number2 //this is also correct
}

const result = addTwoNumbers(3, 5) //storing returned value in another variable
// console.log("Result: ", result);

// console.log(loginUserMessage()) //if we are not passing any value to the function then it will going to take the name as undefined
// console.log(loginUserMessage("hitesh"))


function loginUserMessage(username = "sam"){ //if we give the value of the name here itself then it will never going to be undefined & if condition will never be in use
    if(!username){ // this is equivalent to (username==undefined)
        console.log("PLease enter a username");
        return //always give return inside the function. No further code is executed after return value
    }
    return `${username} just logged in` //write '' to make use of ${value} 
}




function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));