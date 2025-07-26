// 1 Concatenate two strings.
let nameOf = "Jose";
let nameTo = "Jose";
let lastName = "Ortega";
let fullName = nameOf + lastName;
console.log(fullName);

// 2 Shows the length of a string.
console.log(fullName.length)

// 3 Displays the first and last characters of a string
console.log(nameOf[0],nameOf[nameOf.length-1]);

// 4 Converts a string to uppercase and lowercase
console.log(lastName.toLocaleUpperCase());
console.log(fullName.toLocaleLowerCase());

// 5 Creates a string on multiple lines.
let InfoText = `
    Hello, this is a text in multiple
    lines.
`;
console.log(InfoText);

// 6 Interpolate the value of a variable into a string
console.log(`Hello again, ${nameOf}`);

// 7 Replace all empty spaces in a string with hyphens
console.log(InfoText.replaceAll(" ","-"));

// 8 Check if a string contains a specific word
console.log(InfoText.includes("is"));

// 9 Check if two strings are equal
console.log(nameOf == nameTo);

// 10 Check if two strings have the same length
console.log(nameOf.length == lastName.length);