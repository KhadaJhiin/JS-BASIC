// Loops ----------------------->

// Loops are control structures, essential for automating tasks with code repetition.

// For   ----------------------->

for (let i = 0; i < 5; i++) {
    console.log("Hello there");
}

let days = ["Monday", "Tusday", "Wendsday", "Thursday", "Friday", "Saturday", "Sunday"];

for (let j = 0; j < days.length; j++) {
    console.log(`The day ${j + 1} of the week is ${days[j]}`);
}

// While  ----------------------->

// This loop checks itself on each iteration, and if the condition is true, it continues with
// its iteration, but if the condition is false, the loop ends.

let i = 0;

while (i < 5) {
    console.log(`Loop while number ${i + 1}`);
    i++;
}

// do while ----------------------->

// This loop allows the code to run at least once, then the condition will be evaluated.

i = 6;

do {
    console.log(`Loop while number ${i + 1}`);
    i++;
} while (i < 5);

// for of  ----------------------->

// This type of loop iterates over an iterable object. Let's see how it works using 
// the data structures created in the most recent files. It even works with strings.

let myThirdArray = [1,2,"Jose", true];

let mySet = new Set(["Jose", "Miguel", 30]);

let myMap = new Map([
    ["name","Jose"],
    ["E-mail","joselo@gmail.com"],
    ["Edad",30],
]);

let myGirlfriendName = "Jeraldine";

for(let valor of myThirdArray){
    console.log(valor);
}

for(let valor of mySet){
    console.log(valor);
}

for(let valor of myMap){
    console.log(valor);
}

for(let valor of myGirlfriendName){
    console.log(valor);
}

// Continue and break

// This keywords are used inside the loops, let's see how it works with an example.

for(let i = 0; i < 10; i++){
    if(i == 4){
        continue;
    }else if (i == 6){
        break;
    }
    console.log(`Iteration ${i}`);
}