function Rockstar(){}

let funModule = (function(){
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  }
})();

let lecrae = new Rockstar();

funModule.singMixin(lecrae);
lecrae.sing();

