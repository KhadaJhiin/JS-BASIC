// 1. Create an object with three properties

let animal = {
    name : "Matias",
    weight : "8kg",
    height : "10cm" 
}

// 2. Access this object and display its values

console.log(animal.name);
console.log(animal.weight);
console.log(animal.height);

// 3. Add a new propertie

animal.breed = "fresh puder";

// 4. Delete one of the first three properties

delete animal.height;

console.log(animal);

// 5. Add a function and call it

animal.movement = function(){
    console.log("The animal is moving");
}

animal.movement();

// 6. Iterates the properties of the object

for(let value in animal){
    console.log(`Propertie ${value} is ${animal[value]}`);
}

// 7. Creates a nested object

let person = {
    name : "Jose",
    lastName : "Ortega",
    job : {
        name : "Programer",
        time : 8,
        pay : 500,
    }
}

console.log(person.job.name);

// 8. Access and display the value of the nested properties

console.log(person.job.name);
console.log(person.job.time);
console.log(person.job.pay);

// 9. Check both created objects are equals

console.log(animal === person);

// 10. Check if two different properties are equal

console.log(animal.name === person.name);


