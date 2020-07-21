//1. Recall that in functional programming, changing or altering things is called mutation, and the outcome is called a side effect. A function, ideally, should be a pure function, meaning that it does not cause any side effects.

// 2. Another principle of functional programming is to always declare your dependencies explicitly. This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.
// The global variable
var fixedValue = 4;

// Only change code below this line
function incrementer(value) {
  return value + 1;
  // Only change code above this line
}

// var newValue = incrementer(fixedValue); // Should equal 5
console.log(incrementer(fixedValue));
console.log(fixedValue); // Should print 4
