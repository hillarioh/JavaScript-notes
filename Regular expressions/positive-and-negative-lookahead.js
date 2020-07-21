// A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:

// let password = "abc123";
// let checkPass = /(?=\w{3,6})(?=\D*\d)/;
// checkPass.test(password); // Returns true

// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, do not begin with numbers, and have two consecutive digits.

let sampleWord = "astronaut";
let pwRegex = /^\D(?=\w{5})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);

console.log(result);

// let quit = "qu";
// let noquit = "qt";
// let quRegex= /q(?=u)/;
// let qRegex = /q(?!u)/;
// console.log(quit.match(quRegex)); // Returns ["q"]
// console.log(quit.match(qRegex)); // 
// console.log(noquit.match(qRegex)); // Returns ["q"]
// console.log(noquit.match(quRegex)); // 