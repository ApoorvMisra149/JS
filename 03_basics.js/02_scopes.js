
if (true) {
    let a = 10 //it is called as a block scope or local scope.Now this value cannot be accessed outside this scope
    const b = 20
    //var c = 300
    // console.log("INNER: ", a);
}
// wherever you see {} , then it means scope should start
//scope of a,b is only inside if condition. While scope of c is outside if also, which creates problems & hence var should not be used.


// console.log(a); //as we are printing outside if condition scope, it will print undefined
// console.log(b); //it will print undefined
// console.log(c); //it will print 300

let a=100 //now this is global scope



//if we create nested functions, then the parent variables of a fnc. can be accessed inside child functions but not vice-versa
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); //output: undefined
     two()
}
// one()


//similarly for nested if-
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);// undefined
}

// console.log(username); //undefined


// ++++++++++++++++++ interesting ++++++++++++++++++
//We can declare function in 2 ways:
// 1.
console.log(addone(5))
function addone(num){
    return num + 1
}

// 2.
addTwo(5) //here it will going to give error as in this type of function declaration we are holding it in a variable also.So that varaiable should be defined first.Here It is defined in the next line so addTwo(5) should come after declaration of function. We should be careful with this type of function declaration.
const addTwo = function(num){     //this declaration of function 
    return num + 2
}
//variables in JS are very powerful, we can store anything even functions & objects


