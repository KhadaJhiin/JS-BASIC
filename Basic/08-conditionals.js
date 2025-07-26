// if, else if, else

// if ("If this happen then do this")
let age = 37;

if (age == 37) {
    console.log("The age is 37");
}

// else ("If this doesn't happen, then do this")
if (age == 37) {
    console.log("The age is 37");
} else {
    console.log("The age isn't 37");
}

// else if
if (age == 37) {
    console.log("The age is 37");
} else if(age < 18){
    console.log("He is a minor");
} else if (age > 18) {
    console.log("He is of legal age");
} else {
    console("He age isn't 37")
}

// Ternary operator
const message = age == 37 ? "The age is 37" : "The age isn't 37";
console.log(message);

// Switch
let day = 0;
let dayname;

switch(day) {
    case 0:
        dayname = "monday";
        break;
    case 1:
        dayname = "tuesday";
        break;
    case 2:
        dayname = "wendnesday";
        break;
    case 3:
        dayname = "thursday";
        break;
    case 4:
        dayname = "friday";
        break;
    case 5:
        dayname = "saturday";
        break;
    case 6:
        dayname = "sunday";
        break;
    default:
        dayname = "Number day incorrect";
}