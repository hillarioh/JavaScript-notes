let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);

console.log(result);
// let A4 = "haaaah";
// let A2 = "haah";
// let A100 = "h" + "a".repeat(100) + "h";
// let multipleA = /ha{3,}h/;
// multipleA.test(A4); // Returns true
// multipleA.test(A2); // Returns false
// multipleA.test(A100); // Returns true