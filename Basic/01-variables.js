/* Variables are like a boxes, where we're going to save
    data and values.
*/

// VAR : function and global scope

var helloWorldVar = "Hello varibale VAR, in EcmaScript!";
console.log(helloWorldVar);

helloWorldVar = "Hello again, variable VAR in EcmaScript!";
console.log(helloWorldVar);

// LET : block scope

let helloWorldLet = "I'm a LET variable, hello !";
console.log(helloWorldLet);

helloWorldLet = "I'm a redeclarated LET variable, hello !";
console.log(helloWorldLet);

// CONST : block scope and not redeclaration

const constVariable = "Hello I'm a CONST variable";
console.log(constVariable);

// constVariable = "I'm a ERROR because I can't be redeclarated."