// -----------------------------------------------------------------REGULAR EXPRESSIONS

// SINTAX

const regex = /abc/;
const regex2 = RegExp("abc");

// It becomes our "abc" or whatever you put there, in a regex expression, which has a lot of
// associated functions very usefull in our scripts

const text = "Hello abc Javascript";

console.log(regex.test(text));
console.log(regex2.test(text));

// test() :It returns true if the regular expression really is in the text

const regex3 = /d+/;





