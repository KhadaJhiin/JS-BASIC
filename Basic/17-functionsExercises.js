// 1. Create a function that receives two numbers and returns their sum

const firstSum = (a, b) => {
    return a + b;
}
console.log(firstSum(5, 2));

// 2. Create a function that receives an array of numbers and returns the largest of them

let myNumberArray = [1, 5, 8, 6, 1, 2, 4, 7, 8, 71, 2, 14, 55];

function chooseLargestNumber(numberArray) {
    let largestNumber = 0;

    for (let i = 0; i < numberArray.length; i++) {
        for (let j = 0; j < numberArray.length; j++) {
            if (numberArray[i] < numberArray[j]) {
                largestNumber = numberArray[j];
            }
        }
    }
    return largestNumber;
}

console.log(chooseLargestNumber(myNumberArray));

// 3. Create a function that receives a string and returns the number of vowels it has

let genericString = "Hello Jeraldine";

function vowelCounter(anyString) {
    let numberOfVowels = 0;
    for (let value of anyString) {
        if (value == "a" || value == "e" || value == "i" || value == "o" || value == "u") {
            numberOfVowels += 1;
        }
    }
    return numberOfVowels;
}

console.log(vowelCounter(genericString));

// 4. Create a function that receives an array of strings and returns the same array buy with all its words in uppercase

let strignsArray = ["Dog", "Rooster", "Ox", "Pig", "Cat", "Seagull", "Mouse", "Cow", "Pig"];

function transformToUppercase(arrayParameter) {
    let upperArray = [];
    arrayParameter.forEach(function (value) {
        upperArray.push(value.toLocaleUpperCase());
    });
    return upperArray;
}

console.log(transformToUppercase(strignsArray));

// 5. Create a function that receives a number and returns "true" if that number is a prime number and "false" if it is not

let numero = 13;

function checkisPrimeNumber(number) {
    if (number == 0 || number == 1 || number == 2) {
        console.log(`${number} is a primer number`);
    }
    else if (number % 2 == 0 || number % 3 == 0) {
        console.log(`${number} is not a prime number`);
    } else {
        console.log(`${number} is a prime number`);
    }
}
checkisPrimeNumber(numero);

// 6. Create a function that receives two arrays and returns a new array that must contain the elements that both have in commmon

let stringsArrayTwo = ["Dog", "Ox", "house", "Jose", "Pig", "sound"];

function getCommonElements(arrayOne, arrayTwo) {
    let elementsInCommon = new Set([]);
    for (let i = 0; i < arrayOne.length; i++) {
        for (let j = 0; j < arrayTwo.length; j++) {
            if (arrayOne[i] === arrayTwo[j]) {
                elementsInCommon.add(arrayOne[i]);
            }
        }
    }
    return elementsInCommon;
}

console.log(getCommonElements(strignsArray, stringsArrayTwo));

// 7. Create a function that receives an array of numbers and returns the sum of all even numbers

const getPairSum = (numberArray) => {
    let pairSum = 0;
    numberArray.forEach((value) => {
        if (value % 2 == 0) {
            pairSum += value;
        }
    })
    return pairSum;
}
console.log(getPairSum(myNumberArray));

// 8. Create a function that receives an array of numbers and returns an new array with all the numbers squared

const convertSquare = (numberArray) => {
    let squareArray = [];
    numberArray.forEach((value) => {
        squareArray.push(value ** 2);
    });
    return squareArray;
}

console.log(convertSquare(myNumberArray));

// 9. Create a function that receives a string with many words and returns a string with each word in reverse order

let text9 = "Hello, i'm the beginning and the end";

function reverseText(tex9) {
    let inverseText9 = "";
    let stringArray9 = [];
    let word9 = "";
    for (let i = 0; i < tex9.length; i++) {
        if (tex9[i] != " ") {
            word9 += tex9[i];
            if (i == tex9.length - 1) {
                stringArray9.push(word9);
            }
        } else {
            stringArray9.push(word9);
            word9 = "";
        }
    }
    for (let i = stringArray9.length - 1; i > 0; i--) {
        inverseText9 += stringArray9[i] + " ";
    }
    return inverseText9;
}

console.log(reverseText(text9));

// 10. Create a function that calculates the factorial of a given number

const calculateFactorial = (num) => {
    let factorial = 1;
    for (let i = 1; i <= num; i++){
        factorial *= i;
    }
    return factorial;
}
console.log(calculateFactorial(6));

