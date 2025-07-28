// 1. Catch an exeption using try-catch

// 2. Catch an exeption using try-catch and finally

// 3. Throw an generic exeption

// 4. Create a custom exeption

// 5. Throw a custom exeption

// 6. Throw many exeptions acording the logic used

// 7. Catch many exeptions an just one try-catch

class JoseloError extends Error {
    constructor(message, a, b) {
        super(message);
        this.a = a;
        this.b = b;
    }

    printError() {
        console.log(`This is a custom error, the numbers are ${this.a} + ${this.b}`);
    };
}

function sum(a, b) {
    if (a == "Jose") {
        throw new JoseloError("This is a Joselo error", a, b);
    }

    if (typeof (a) != "number" || typeof (b) != "number") {
        throw new TypeError("A type Error has ocurred...");
    }


    return a + b;
}

try {
    //sum(mms);
    //sum(2, "3");
    sum("Jose", 4)
} catch (error) {
    if (error instanceof JoseloError) {
        console.log(error.message);
        error.printError();
    } else if (error instanceof TypeError) {
        console.log(error.message);
    } else if (error instanceof Error) {
        console.log("There is an error in the function" + error.message);
    }
} finally {
    console.log("Please try whith a valid number.");
}

// 8. Create a loop that tries transform to float each value and catch and display the errors

console.log("----------SOLVE NUMBER 8");

let values = ["4", 5.6, 4, 3, "jose", true];

const valueConverter = (valueArray) => {
    let newValues = [];
    valueArray.forEach((value) => {
        if (Number.isNaN(parseFloat(value))) {
            throw new Error("This is not a number " + value);
        } else {
            newValues.push(parseFloat(value));
        }
    });
    return newValues;
};

try {
    console.log(valueConverter(values));
} catch (error) {
    console.log(error.message);
}


// 9. Create a function that verfy if an object has a specific propertie and throw a custom exeption

console.log("-------------------Solution exercise number 9");

class PropiedadNoPermitidaError extends Error {
    constructor(message) {
        super(message);
    }
}

let person = {
    "name": "Jose",
    "age": 30,
    // "forbiden" : true
}

function veryfier(person) {
    if ("forbiden" in person) {
        throw new PropiedadNoPermitidaError(`This person is Forbiden`);
    } else {
        console.log(`Name : ${person.name} age : ${person.age}`);
    }
}

try {
    veryfier(person);
} catch (error) {
    console.log(error.message);
}

// 10. Create a function that perform retries in case of error up to a maximum of 10

console.log("---------------------------------------Number 10 solution")

function a() {
    console.log(`${c} is an error`);
}

function attempterFunction(a) {
    let count = 0;
    while (count <= 10) {
        try {
            a();
            break;
        } catch (error) {
            console.log("This an provocated error" + error.message);
            count += 1;
        }
    }
}

attempterFunction(a);

