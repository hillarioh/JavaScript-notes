const header = document.querySelector('header');
const blueButton = document.getElementById('color-button-blue');
const greenButton = document.getElementById('color-button-green');
const brownButton = document.getElementById('color-button-brown');
const noneButton = document.getElementById('color-button-none');

blueButton.addEventListener('click', () => {
    header.classList.add('blue-background', 'text-white');
    header.classList.remove('brown-background', 'green-background');
});

greenButton.addEventListener('click', () => {
    header.classList.add('green-background', 'text-white');
    header.classList.remove('brown-background', 'blue-background');
});

brownButton.addEventListener('click', () => {
    header.classList.add('brown-background', 'text-white');
    header.classList.remove('blue-background', 'green-background');
});

greenButton.addEventListener('click', () => {
    header.classList.add('green-background', 'text-white');
    header.classList.remove('brown-background', 'blue-background');
});

noneButton.addEventListener('click', () => {
    header.classList.remove('blue-background', 'green-background','brown-background');
});

const addPost = document.getElementById('add-post');
const removePost = document.getElementById('remove-post');

addPost.addEventListener('click',() => {
    createNewPost();
});

removePost.addEventListener('click',()=>{
    deletePosr();
})

const createNewPost=()=>{

    let newArticle = document.createElement('article');
    let newHeading = document.createElement('h5');
    let newPara = document.createElement('p');

    newArticle.textContent = 'Another Blog Post';
    newPara.textContent = "Hide at bottom of staircase to trip human. Ask for petting." + 
    "Roll on the floor purring your whiskers off. Trip on catnip nap all day,"+
    "eat too much then proceed to regurgitate all over living room carpet while"+ 
    "humans eat dinner nya nya nyan. Attack the child groom yourself 4"+
    "hours - checked, have your beauty sleep 18 hours - checked, be fabulous for"+ 
    "the rest of the day - checked playing with balls of wool";

    newArticle.appendChild(newHeading);
    newArticle.appendChild(newPara);

    newArticle.classList.add('list-group-item');

    let section = document.querySelector('section');
    section.appendChild(newArticle);
  
}

const deletePosr =()=>{
    let section = document.querySelector('section');
    let count = document.querySelector('section').childElementCount;

    if(count>1){
        section.removeChild(section.childNodes[count-1]);
    }

    
    
}