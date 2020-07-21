function checkPositive(arr) {
  // Only change code below this line
  let result = arr.every(function(currentValue){
    return currentValue > 0 ;
  });

  return result;

  // Only change code above this line
}
console.log(checkPositive([1, 2, 3, -4, 5]));
