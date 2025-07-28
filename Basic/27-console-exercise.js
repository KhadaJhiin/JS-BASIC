// 1. Create a function that handles error correctly
// 2. Create a function that handles warn correctly
// 3. Create a function that handle info correctly

function errorFunction(a){
    if(a == 1){
        throw new Error("An provocated error has been released");
    }

    if(a == 2){
        throw new TypeError("A warnin has been triggered");
    }

    if(a ==3){
        throw new SyntaxError("An info has been released");
    }
};

try{
    errorFunction(3);
}catch(error){
    if(error instanceof TypeError){
        console.warn(error.message);
    }else if(error instanceof Error){
        console.error(error.message);
    }else if(error instanceof SyntaxError){
        console.info(error.message);
    }
};

// 4. Use a table

let data = [
    {name: "Jacke", age : 50},
    {name: "Leo", age : 53},
    {name: "Edmundo", age : 90},
]

console.table(data);

// 5. Use a group

console.group("Pets");
console.log("Dog : Matias");
console.log("Cat : Hellsing");

// 6. Use time method

console.time("Execution time 1");

for(let i = 0; i<10000; i++){

}

console.timeEnd("Execution time 1");

// 7. Validate with assert if a number is positive

let age = 17;

console.assert(age >= 18, "The use have to be major than 18");

// 8. Use a count

console.count("Click");

console.count("Click");

console.countReset("Click");

// 9. Use a trace

function funA(){
    funB();
};

function funB(){
    console.trace("Following execution")
}

funA();

// 10. Use clear

// console.clear();

