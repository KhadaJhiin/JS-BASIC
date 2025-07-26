// Objects

// So, the data types we saw earlier are known as primitives types, but all data that
// is not primitive is of object type

// The objects are very similar to maps, because they are composed of a group of properties
// in the form of "key" and "value"

// ---------------------------------------Sintax

let person = {
    name: "Jose",
    age: 30,
    alias: "Migue",
}

// ---------------------------------------Manipulation

//First 
console.log(person.name);   

// Second
console.log(person["age"]);

// ---------------------------------------Modification
person.name = "Leo";
console.log(person.name)

// ---------------------------------------Delete properties

delete person.age;
console.log(person);

// ---------------------------------------Add properties

person.email = "Joselo@gmail.com";
person["Id"] = 1252; 
console.log(person);

// ---------------------------------------Method or functions

let personTwo = {
    name : "Jerald",
    age : 19,
    walk : function(){
        console.log("The person is walking");
    }
}

personTwo.walk();

// ---------------------------------------Objects nested

let personThree = {
    name : "Natha",
    age : 19,
    walk : function(){
        console.log("The person is walking");
    },
    job:{
        name: "programer",
        exp:2,
        work:function(){
            console.log(`I'm a ${this.name} and I'm resolving a bug`);
        }
    }
}

console.log(personThree);
console.log(personThree.job);
console.log(personThree.job.name);
console.log(personThree.job.work());

// ---------------------------------------Comparison between objects

// They are always false, we can compare them value to value, but
// we could do it the another way, but we will see that in the future.

// ---------------------------------------Object iteration

for(let key in personThree){
    console.log(`This is the last print, ${key} = ${personThree[key]}`);
}

