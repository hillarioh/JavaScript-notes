const articles = document.getElementsByTagName('article');
const paragraphs = document.getElementsByTagName('p');

const whiteTextElements = document.getElementsByClassName('text-white');

const firstArticle = articles[0];
const secondParagraph = paragraphs[1];

const sidebar =document.getElementById('sidebar');

const myFunction=()=>{

    //Scenario
    let x,i;
    x = document.querySelectorAll('h3');
    for(i=0;i<x.length;i++){
        x[i].style.backgroundColor = "green";
    }
}

// const mainHeading = document.getElementById('main-heading');
// // Get access to the DOM
// mainHeading.textContent = 'Modify the Dom';

const header = document.getElementById('page-header');
// header.innerHTML = '<h3>Modify the DOM</h3>';
header.style.padding="1em";
header.classList.remove('bg-dark');
header.style.backgroundColor = '#B54135';

const myFunction1=()=>{

    document.getElementById('page-header').classList.add('mystyle');
}

header.innerHTML = '<h2>Modify the DOM</h2>';
header.classList.add('text-center');

sidebar.classList.remove('bg-info');
sidebar.classList.add('bg-primary');

header.style.padding = '1em';
header.classList.remove('bg-dark');
header.style.backgroundColor = '#B54135';

let newArticle = document.createElement('article');
let newHeading = document.createElement('h3');
let newPara = document.createElement('p');

newArticle.textContent = 'Article 004';
newPara.textContent = 'Good bye';

newArticle.appendChild(newHeading);
newArticle.appendChild(newPara);

newArticle.classList.add('m-2','p-2','border','border-secondary');
newArticle.setAttribute('id','art-004');

const main = document.querySelector('main');
main.appendChild(newArticle);