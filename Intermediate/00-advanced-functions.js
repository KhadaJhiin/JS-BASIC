// -----------------------------------------------------------ADVANCED FUNCTIONS

// -----------------------------------------------------------FIRST CLASS CITIZENS

// When we are talking about first class citizens in JS, we are refering to that type 
// of value which can be put as a variable, value, argument or const etc..
// A function is a first-class citizen, so, it can be handled like any other normal value
// in the code.

// -----------------------------------------------------------FUNCTION AS A CONSTANT

const greet = function (name) {
    console.log(`${name}`);
}

greet("Nombre");

// -----------------------------------------------------------FUNCTION AS A PARAMETER

function processGreeting(greeFunction, name) {
    greeFunction(name);
}

processGreeting(greet, "Ortega");

// -----------------------------------------------------------FUNCTION WITHIN ANOTHER

function returnGreet() {
    return greet;
}

const proff = returnGreet();

proff("Miguel Gaviria");

// -----------------------------------------------------------ADVANCED ARROW FUNCTIONS
// -----------------------------------------------------------IMPLICIT RETURN

const multiplly = (a, b) => a * b;
console.log(multiplly(5, 2));

// -----------------------------------------------------------LEXICAL THIS

// We must be careful when placing our arrow functions inside an object or a class,
// because, it creates its own context and we'll have problems when executing these methods.

let person = {
    nombre: "Jose",
    correr: function () {
        console.log(`${this.nombre} is run`);
    },

    correrWrongWay: () => {
        console.log(`This is an error commit by ${this.nombre}`);
    },
}

person.correr();
person.correrWrongWay();

// --------------------------------------------IIFE (INMEDIATLY INVOQUE FUNCTION EXPRESSION)

// -------------------------------------------CLASICAL IIFE

(function () {
    console.log("CLASIC IIFE");
})();

// We must be careful whit that type of functions, because it take context of whole file
// so, we have to placing this IIFE at the first part of the document or just put a ";"
// at the last line of code before to IIFE function.

// -------------------------------------------ARROW IIFE

(() => {
    console.log("CLASIC IIFE");
})();

// -------------------------------------------REST PARAMETERS (...)
// With this type of parameter can created an array of parameters in case we don't know
// how many parameter we will need.

function sum(...numbers) {
    result = 0;
    for (value of numbers) {
        result += value;
    }
    return result;
};

console.log(sum(1, 2, 3, 5, 5));

// -------------------------------------------SPREAD OPERATOR (...)

const numbers = [1, 2, 3];
function sumWithSpread(a, b, c) {
    return a + b + c;
}

console.log(sumWithSpread(1, 2, 3));
console.log(sumWithSpread(...numbers));

// -------------------------------------------CLOUSURE

function createCounter() {
    let counter = 0;
    return function () {
        counter++;
        console.log(`Conunter: ${counter}`);
    };
};

const externCounter = createCounter();

externCounter();
externCounter();
externCounter();

// In this case, we are saved a context of counter. Because when we run the function this
// inicialites the variable count and the function. So each time that we executed the function
// this just execute the method again and againg but the constant saved its value.
// If we put the same function in other const, the counter beginning from 0 again.

const externCounterTwo = createCounter();

externCounterTwo();
externCounterTwo();
externCounterTwo();

// -------------------------------------------RECURSIVIDAD

// It is a function that call itself.

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));

// -------------------------------------------PARTIAL FUNCTIONS

function sumWith(a) {
    return function (b, c) {
        return sum(a, b, c);
    };
};

const sumaMultiParam = sumWith(5);
console.log(sumaMultiParam(5, 5));
console.log(sumaMultiParam(2, 2));

// -------------------------------------------CURRYING

function currySum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return sum(a, b, c, d);
            }
        }
    }
}

const sumAB = currySum(1)(2);
const sumC = sumAB(3);
console.log(sumC(3));
console.log(sumC(4));
console.log(sumAB(5)(7));

// -------------------------------------------CALLBACKS

function processData (data, callBack){
    const result = sum(...data);   
    callBack(result);
}

function processResult(result){
    console.log(result);
}

processData([1,2,3], processResult);



