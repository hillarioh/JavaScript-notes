From

const createPerson = (name, age, gender) => {
  "use strict";
  // Only change code below this line


  return {
    name: name,
    age: age,
    gender: gender
  };
  // Only change code above this line
};

To


const createPerson = (name,age,gender)=> {
  "use strict";

  return ({name,age,gender});
 
}