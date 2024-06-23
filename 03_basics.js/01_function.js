
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




function calculateCartPrice(...num1){ //   3 dot ... means store all values which are being passed
    return num1 //it will going to print all the numbers in an array
}
 console.log(calculateCartPrice(200, 400, 500, 2000))


 function calculateCartPrice(val1, val2, ...num1){
    return num1 //will going to store val1=200, val2=400 & num1=[500,2000]
}
 console.log(calculateCartPrice(200, 400, 500, 2000))

//object in a function-----

const user = {
    username: "hitesh",
    prices: 199
}

 handleObject(user)

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); //use '' to print any value of a any object.Here we have given anyobject.username & not user.username because we can pass any object of any name to that function 
}


// handleObject({
//     username: "sam",
//     price: 399
// }) //can pass values to the function like this also


//pass array in a function-----

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

 console.log(returnSecondValue(myNewArray)); //prints 400
console.log(returnSecondValue([200, 400, 500, 1000])); //can pass value like this also