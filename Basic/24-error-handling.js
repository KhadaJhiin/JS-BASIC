// Error-handling

// We have to be able to manage or to handle the appear of error or exeptions in our programs

// ----------------------------------------------------TRY CATCH

let myObject;

try {
    console.log(myObject.email);
} catch (error) {
    console.log(`An error has occurred `, error.message)
}

// ----------------------------------------------------FINALLY

try {
    console.log(myObject.email);
} catch (error) {
    console.log(`An error has occurred `, error.message);
} finally {
    console.log(`This code will always be executed`);
}

// ----------------------------------------------------THROW
// ----------------------------------------------------CATCH MORE THAN ONE TYPE OF ERROR

function sumIntegers(a, b) {

    if (typeof (a) != "number" || typeof (b) != "number") {
        throw new TypeError("This function only adds NUMBERS.");
    }

    if (a == 0 || b == 0) {
        throw new SumZeroIntgers("A custom error has been thrown.", a, b);
    }

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("This function only adds integers.");
    }


    return a + b;
}

// ----------------------------------------------------CREATE CUSTOM EXCEPTIONS

class SumZeroIntgers extends Error {
    constructor(message, a, b) {
        super(message);
        this.a = a;
        this.b = b;
    }

    printNumbers() {
        console.log(this.a, " + ", this.b);
    }
}


try {
    // console.log(sumIntegers(5.5, 5));
    // console.log(sumIntegers(5, "5"));
    console.log(sumIntegers(0, 5));
} catch (error) {
    if (error instanceof SumZeroIntgers) {
        console.log(error.message);
        error.printNumbers();
    } else if (error instanceof TypeError) {
        console.log(`An type error has ocurred ` + error.message);
    } else if (error instanceof Error) {
        console.log(`An error has ocurred ` + error.message);
    }
}