function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  let m = arr.length;

  for(let i =0;i<m;i++){
    let count = 0;
    for(let k = 0;k<arr[i].length;k++){
      let d = arr[i][k];
      if (d==elem){
        count +=1;
      }
    }
    if (count<1){
      newArr.push([...arr[i]])
    }
  }


  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
