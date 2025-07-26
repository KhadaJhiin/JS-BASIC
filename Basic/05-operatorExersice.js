// 1 Create a variable for each arithmetic operation
let a = 5;
let b = 3;

let sum = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;
let module = a % b;
let exponent = a**b;

// 2 Create a variable for each type of assignment operation, which 
// uses the variables previosly used for the arithmetic operation

let increment = sum++;
let decrement = subtraction--;

sum += 1;
subtraction -=2;
multiplication *=3;
division /=4;
module %=5;
exponent **=6;

// 3 Print five true compairsons with different compairson operations
console.log(sum > subtraction);
console.log(sum == sum);
console.log(sum != multiplication);
console.log(multiplication >= module );
console.log(subtraction <= sum);

// 4 Print five false compairsons with different compairson operations
console.log(sum < subtraction);
console.log(sum != sum);
console.log(sum == multiplication);
console.log(multiplication <= module );
console.log(subtraction >= sum);

// 5 Use the logical comparator AND
let isTrue = (sum < multiplication) && (multiplication > division);

// 6 Use the logical comparator OR
let isFalse = (exponent < module) || (sum > subtraction);

// 7 Combine both logical operators.
let combine = (5 <= 5 && 6 > 7 || 5 == 5);

// 8 Add some negation
combine = (5 <= 5 &&  6 > 7) || !(5 == 5);
console.log(combine);

// 9 Use the ternary operator
let ternaryVariable = true;
ternaryVariable ? console.log("This variable is true") : console.log("This varibale is false");
