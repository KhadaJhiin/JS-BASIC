// 1. Create a function that returns another function.

function fastGreeter(name){
    return function(greet){
        return `${greet} ${name}`;
    }
} 
const greets = fastGreeter("Jose");
console.log(greets("Hello"));

// 2. Implements a currying function in order to multiply three numbers

function firstFunction(a){
    return function secondFunction(b){
        return function thirdFunction(c){
            return a * b + c;
        }
    }
}

const multiplyTwo = firstFunction(3)(3);
const multipllyThree = multiplyTwo(2);
console.log(multipllyThree);

multipllyFor = multiplyTwo(4);
console.log(multipllyFor);

// 3. Develop a recursive function that calculates the power of a number elevate to an exponent

function exponentCalculator(num, exp){
    if (exp <= 0){
        return 1;
    }
    return num * exponentCalculator(num, exp-1);
}
console.log(exponentCalculator(5,5));

// 4. Create a function createCounter() that receives an initial value and returns an object with methods
//    to increment(), decrement() and getValue(), using a closure to maintain the state.


