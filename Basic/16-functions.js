// -------------------------------------------------------Functions

function myFirstFunction() {
    console.log("Hello my function");
}

myFirstFunction();

// --------------------------------------------------------Parameters

function myFunctionWithParam(name, lastName) {
    console.log(`Hi ${name} your last name is ${lastName}`);
}

myFunctionWithParam("Jose", "Ortega");

// --------------------------------------------------------Anonymous functions

// These types of functions are stored in a constant or variable

const myAnonymousFunction = function (name) {
    console.log(`Hi ${name} from an anonymous function`);
}

myAnonymousFunction("Jose");

// --------------------------------------------------------Arrow functions
// The arrow functions are a more simplified form of normal functions
// similar in their declaration form to anonymous functions

const myArrowFunction = (name) => {
    console.log(`Hello ${name} from an arrow function`);
}
myArrowFunction("Joselo");

// Another form of arrow function, it only works if you only need one line of code

const mySecondAF = (name) => console.log(`Hi there ${name}`);

mySecondAF("Miguel");

// --------------------------------------------------------Parameters
// You can make parameters optional by giving them a default value

const sum = (a = 0, b = 0) => console.log(`${a + b}`);
sum(5, 5);
sum();

// --------------------------------------------------------Return of values

const multi = (a, b) => {
    return a * b;
}

console.log(multi(5,10));

// --------------------------------------------------------nested functions

// function extern (){
//     console.log(`Extern function`);
//     function intern(){
//         console.log(`Intern Fuction`)
//     }
// }

// intern(); That is a mistake, it is out of the scope
// extern();

// If we want to use the intern function, we have to call this function within the scope
// as we see in the following example

function extern (){
    console.log(`Extern function`);
    function intern(){
        console.log(`Intern Fuction`)
    }
    intern();
}

extern();

// --------------------------------------------------------Higher-order functions
// This type of fuction can receive as a parameter other function and 
// and execute that parameter.

function higherOrderFunction(functi, parame){
    functi(parame);
}

higherOrderFunction(myArrowFunction,"Higher-order function");

// --------------------------------------------------------ForEach function
// This function is a method that all arrays have, and its fucntion is
// equal to a for loop. 

let newArray = [1,2,4,5,6,7,8,9,10];

newArray.forEach((value) => console.log(value));

newArray.forEach(function(value){
    console.log(value);
})



