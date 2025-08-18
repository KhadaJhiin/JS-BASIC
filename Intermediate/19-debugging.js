// ---------------------------------------------------------DEBUGGING(depuracion)

// ----------------------------CONSOLE.LOG() 

// This method can show us the values of variables at a specific point in time,
// helping us understand the flow of our code and identify any issues.

function sum (a,b){
    console.log("a : ", a);
    console.log("b : ", b);
    console.log("a", typeof a);
    console.log("b", typeof b);
    return a + b;
};

console.log(sum(2, "3"));

// --------------------------------------------------------PROFESSIONAL DEBUGGER

// We have a native debugger in our code editor. It allows us to set breakpoints,
// step through our code, and inspect variables at runtime.

function divide(a,b){
    if(b === 0){
        throw new Error("Division by zero error");
    }
    return a / b;
};

console.log(divide(4,0));





