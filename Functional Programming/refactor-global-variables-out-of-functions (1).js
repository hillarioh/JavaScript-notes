// The global variable
let bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (myList,bookName) {
  let current = [...myList];

  current.push(bookName);
  // return [...list, bookName]; opt 2
  return current;
  
  // Change code above this line
}

// Change code below this line
function remove (myList,bookName) {
  let current = [...myList]
  var book_index = current.indexOf(bookName);
  if (book_index >= 0) {

    current.splice(book_index, 1);
    return current;

    // Change code above this line
    }
}

// function remove(list, bookName) {
//   return list.filter(book => book !== bookName);
// }

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
// console.log(newBookList);
