function Bird() {
  let weight = 15;
  
  this.getWeight = function(){
    return weight;
  }

}

let flute = new Bird();
console.log(flute.getWeight());