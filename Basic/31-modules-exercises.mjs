// 1. Export a function

// 7. Export a function for default

export default function plus(a, b) {
    console.log(a * b);
}

// 2. Export a constant

export const NAME = "Jose";

// 3. Export a class

export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// 4. Import a function
// 5. Import a constant
// 6. Import a class

import { expAdd, PI, Person1} from "./28-export-modules.mjs";

// 8. Import a function for defect

import defaultFunction from "./28-export-modules.mjs";

defaultFunction(5,6);


