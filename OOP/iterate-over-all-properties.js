// own properties and prototype properties. Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
for(let prop in beagle){
  if(beagle.hasOwnProperty(prop)){
    ownProps.push(prop);
  } else {
    prototypeProps.push(prop);
  }
}

console.log(ownProps);
console.log(prototypeProps);
