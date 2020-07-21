function countOnline(users) {
  // Only change code below this line
  let count = 0;
  for(let user in users){
    if (users[user].online==true){
      count++;
    }

  }
  return count;
  // Only change code above this line
}

let usersObj = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

console.log(countOnline(usersObj));
