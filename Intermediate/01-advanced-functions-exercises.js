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

function createCounter(a){
    counter = a;
    return newObject = {
        toIncrement : function(){
            counter += 1;
        },
        toDecrement : function(){
            counter -=1;
        },
        get counter(){
            return counter;
        }
    }
}

let counterFuntion = createCounter(5);

counterFuntion.toIncrement();
counterFuntion.toIncrement();
counterFuntion.toIncrement();
console.log(`Counter value = ${counterFuntion.counter}`);
counterFuntion.toDecrement();
console.log(`Counter value = ${counterFuntion.counter}`);

// 5. Create a function sumManyTimes(multiplier, ...number) that first add all numbers (using parameters Rest) then multiplies the result for miltiplier

function sumManyTimes(multiplier, ...number){
    let restSum = 0;
    for(value of number){
        restSum += value;
    }
    return restSum * multiplier;
}

console.log(`The final result is : ${sumManyTimes(2,4,4,4)}`);

// 6. Create a callback that invokes itself with the result of the sum of all number that are passed to a function

function firsFunction (secondFunction, ...numbers){
    secondFunction(numbers);
}

function secondFunction(numbers){
    console.log(`This is the callBack result : ${numbers}`);
}

firsFunction(secondFunction,2,3,4,5,6,7);

// 7. Develop a partial function

function partialFunction (a){
    return function(b, c){
        return function(d){
            console.log(a*b+c+d);
        }
    }        
}
const resulOne = partialFunction(2);
const resulTwo = resulOne(3,4);
const resulFinal = resulTwo(5);

// 8. Implement a function that uses spread operator

let names = ["Jose",30,"Sandona"];

function namesPrinter(a,b,c){
    console.log(`${a} is ${b} years old, and he is from ${c}`);
}

namesPrinter(...names);

// 9. Implement a implicit return

const implicitFunction = () => console.log("Hi I'm an implicit return");
implicitFunction();

// 10. Make use of lexical this

let animal = {
    size : "50cm",
    getSize : function(){
        console.log(this.size);
    }
}

animal.getSize();