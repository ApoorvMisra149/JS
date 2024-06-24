
if (true) {
    let a = 10 //it is called as a block scope or local scope
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


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}