// CONSOLE

// ------------------------------------------------------------------------LOG
// It is use to display information

console.log(`Hi there`);

// ------------------------------------------------------------------------ERROR

console.error(`This is a error message`);

// ------------------------------------------------------------------------WARN

console.warn(`This is a advert message`);

// ------------------------------------------------------------------------INFO

console.warn(`This is a info message`);

// ------------------------------------------------------------------------TABLE

let data = [
    ["Jose", 37],
    ["Nata", 22],
    ["Jeral", 19],
]

console.table(data);

let data2 = [
    {name: "Jacke", age : 50},
    {name: "Leo", age : 53},
    {name: "Edmundo", age : 90},
]

console.table(data2);

// ------------------------------------------------------------------------GROUP

console.group("Pets");
console.log("Dog : Matias");
console.log("Cat : Hellsing");

// ------------------------------------------------------------------------TIME

console.time("Execution time 1");

for(let i = 0; i<10000; i++){

}

console.timeEnd("Execution time 1");

// ------------------------------------------------------------------------ASSERT

let age = 17;

console.assert(age >= 18, "The use have to be major than 18");

// ------------------------------------------------------------------------COUNT

console.count("Click");

console.count("Click");

console.countReset("Click");

// ------------------------------------------------------------------------TRACE

function funA(){
    funB();
};

function funB(){
    console.trace("Following execution")
}

funA();

// ------------------------------------------------------------------------CLEAR

// console.clear();