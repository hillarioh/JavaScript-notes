let favWord = "favorite";
let briWord = "favourite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);

console.log(result);

// let american = "color";
// let british = "colour";
// let rainbowRegex= /colou?r/;
// rainbowRegex.test(american); // Returns true
// rainbowRegex.test(british); // Returns true