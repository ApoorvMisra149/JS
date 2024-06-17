// singleton
// Object.create

// object literals

const mySym = Symbol("key1") //declaring a symbol


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary", //we can put keys in "" as well if space is there b/w keys
    [mySym]: "mykey1", //this is how we have to declare a symbol in object
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"] //created array inside object
}

// console.log(JsUser.email) //access Juser values by giving dot(.)
// console.log(JsUser["email"]) //another method to access values of a object is by giving []
// console.log(JsUser["full name"])// this method to access object values is useful when there is a space b/w keys & . cannot be used there
// console.log(JsUser[mySym]) // symbol has to be always given under [] for print

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) //freeze means if we try to change any object value further, then it won't accept new value & will retain the last value
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){ //created a function from object
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // if we want to access any value inside the JsUser, then we can give this keyword, & it will display all key values pairs under suggestion. And since we are printing value here so we have given $() & all these under ''

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());