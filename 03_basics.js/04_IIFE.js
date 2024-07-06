// Immediately Invoked Function Expressions (IIFE)

//synatax for IIFe fnc-
// (definition/scope of a function) (execution of a function)



//1. IIFE function with a name
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

//2.IIFE fnc. using arrow + passing variable
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

//if you have to write 2 IIFE functions one after another then always end first IIFE function with a ; otherwise the code would not know that IIFE has ended