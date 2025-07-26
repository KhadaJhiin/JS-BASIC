// Note: Explore different loop syntaxes in order to resolve the exercises

// 1. Create a loop that prints the numbers from 1 to 20

for (let i = 0; i < 20; i++) {
    console.log(`Number ${i + 1}`);
}

// 2. Create a loop that adds all the numbers from 1 to 100 and displays the result

let suma = 0;
for (let i = 1; i <= 100; i++) {
    suma = suma + i;
    if (i == 100) {
        console.log(suma);
    }
}

// 3. Create a loop that prints all even numbers from 1 to 50

for (let i = 0; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(`Even number ${i}`);
    }
}

// 4. Given an array of names, use a loop in order to print each name to the console

let names = ["Jose", "Jerald", "Jacke", "Leo", "Nath", "Gerard", "Tere"];

for (let value of names) {
    console.log(value);
}

// 5. Write a loop that counts the number of vowels in a string

let chain = "entertaiment";
let vowelSume = 0;
for (let value of chain) {
    if (value === "a" || value === "e" || value === "i" || value === "o" || value === "u") {
        vowelSume += 1;
    }
}
console.log(vowelSume);

// 6. Given an array of numbers, use a loop to multiply all the numbers and display the result

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let resultMultiply = 1;

for (let value of numbers) {
    resultMultiply *= value;
}
console.log(resultMultiply);

// 7. Write a loop that prints the five multiplication table

let number = 5;

for (let i = 0; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

// 8. Use a loop in order to reverse a string

let nameOf = "Joselo";
let invertName = "";

for (let i = nameOf.length - 1; i >= 0; i--) {
    invertName += nameOf[i];
}
console.log(invertName);

// 9. Use a loop to generate the first ten numbers of the Fibonacci sequence

let fibonacci = [];
let stop = 10;

for (let i = 0; i <= stop - 1; i++) {
    if (i <= 1) {
        fibonacci[i] = i;
    } else {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
}

for (let value of fibonacci) {
    console.log(value);
}

// 10. Given an array of numbers, use a loop in order to create a new array that will contain
// only numbers greater than 10

console.log("Last exercise")

numberArray = [1,20,11,6,8,60,12,5,78,1,25,-2,41,7];

let justGreaterThanTen = [];

for (let value of numberArray) {
    if (value > 10) {
        justGreaterThanTen.push(value);
    }
}

for(let value of justGreaterThanTen){
    console.log(value);
}