function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 4,
  eat: function(){
    console.log("nyam nyam nyam");
  },
  describe: function(){
    console.log("my name is " + this.name);
  }

};

let gary = new Dog("blacky");

gary.eat();
gary.describe();