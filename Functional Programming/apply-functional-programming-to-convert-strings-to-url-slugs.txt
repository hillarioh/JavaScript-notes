// The global variable
var globalTitle = "Winter Is Coming";

// Only change code below this line
function urlSlug(title) {
  let arr = title.split(/\W/);
  let i =0;
  let ss = arr.filter(x => x!= '').reduce((str,s)=>{
    if (i!=0){
      str +='-';
    }
    str += s
    i++;
    return str.toLowerCase();
  },'');
  return ss;

}
// Only change code above this line

// function urlSlug(title) {
//   return title
//     .split(/\W/)
//     .filter(obj => {
//       return obj !== "";
//     })
//     .join("-")
//     .toLowerCase();
// }
