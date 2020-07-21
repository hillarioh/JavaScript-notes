function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray

    for (let j = 0; j < 1; j++) {
      // Pushes n zeroes into the current row to create the columns
      newArray.push([0,0]);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
