// const tinderUser = new Object()
const tinderUser = {}   //another method of creating object.This is called Singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary" //we can create a object inside object
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); //to print nested object values , do like this

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } //don't use this to combine objects, as it merges obj2 at single indesx
// const obj3 = Object.assign({}, obj1, obj2, obj4) //Object.assign(target,source) //here empty object {} is the target

const obj3 = {...obj1, ...obj2}// best method to join objects
// console.log(obj3);


const users = [       // array of objects
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email //access objects value of an index=1 array 
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //returns keys of the objects. Data type return is an array
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));//returns all key- values pair in a separate array

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //we can validate inside a object if it contains this key


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]