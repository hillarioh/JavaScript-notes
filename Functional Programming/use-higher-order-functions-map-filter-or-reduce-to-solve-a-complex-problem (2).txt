const squareList = (arr) => {
  // Only change code below this line
  
   let r = arr.filter(x => (x>0) && Number.isInteger(x)).reduce((ar,x)=>{
     ar.push(x*x);
     return ar;
   },[]);
  return r;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
