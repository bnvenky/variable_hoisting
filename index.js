// Scenario1 :
console.log(x); // undefined
var x = 10; //variable declarations are moved to the top
console.log(x); // 10


// Scenario2 :
//Function declarations are hoisted in a similar manner to variable declarations
foo(); // "Hello, Venky!"

function foo() {
    console.log("Hello, Venky!");
}

//the variable bar is hoisted, but its assignment to the function is not, leading to an error
//bar(); // TypeError: bar is not a function
var bar = function () {
    console.log("Hi, MAMA!");
};


// Scenario3 :
//Function that retains access to its lexical scope
function out() {
    var outerVar = "I'm out!";

    function innerFun() {
        console.log(outerVar); // Accessing outerVar from the outer scope
    }

    return innerFun;
}

const infun = out();
infun(); // "I'm out!"