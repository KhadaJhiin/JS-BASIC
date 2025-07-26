// 1 Print your name to the console if a variable takes your value
let name1 = "Jose";
if (name1 == "Jose") {
    console.log("Jose")
} 

// 2 Print a message to the console if the username and password match those
// previosly configured
let userName = "Jose";
let password = "1234";

if (userName == "Jose" && password == "1234"){
    console.log("Username and password are correct")
}

// 3 Check if a number is positive negative or zero
let numberOf = 0;

if(numberOf > 0){
    console.log("The number is greater than zero")
} else if (numberOf < 0){
    console.log("The number is less than zero");
} else {
    console.log("The number is zero");
}

// 4 Check if a person can vote or not, and show how many years are left to do that
let personAge = 10;
if(personAge < 18){
    missingYears = 18 - personAge;
    console.log(`You cannot vote, you have ${missingYears} years left to be able to vote`);
}else{
    console.log("You can vote")
}

// 5 Use the ternary operator to assign the adult or minor value to the variable based on age
personAge > 18 ? console.log("Adult") : console.log("Minor");

// 6 Shows in what season we are, based on the values of a variable called "month"
let month = "juanary";

if(month === "juanary" | month === "july" | month === "august"){
    console.log("We are in summer");
}else if(month === "november"| month === "Decemvber"){
    console.log("We are in winter");
}else {
    console.log("We are in outum");
}

// 8 Shows the number of days that a month has, based on the last variable month.

switch(month){
    case "juanary":
        console.log("31");
        break;
    case "februery":
        console.log("28");
    case "march":
        console.log("31");
        break;
    case "abril":
        console.log("30");
    case "may":
        console.log("31");
    case "jun":
        console.log("30");
}