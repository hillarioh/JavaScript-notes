// DOM ELEMENT REFERENCES
const hobbiesResult = document.getElementById('hobbies-result');
const transportResult = document.getElementById('transport-result');
const musicResult = document.getElementById('music-result');

const hobbyDoc = document.getElementById('hobbies-result');
// let count = document.getElementById('hobbies-result').childElementCount;

document.getElementById('sports-checkbox').addEventListener('change',($event)=>{

    if($event.target.checked){
        hobbyDoc.children[0].classList.remove('text-secondary');
    } else {
        hobbyDoc.children[0].classList.add('text-secondary');
    }
});

document.getElementById('games-checkbox').addEventListener('change',($event)=>{

    if($event.target.checked){
        hobbyDoc.children[1].classList.remove('text-secondary');
    } else {
        hobbyDoc.children[1].classList.add('text-secondary');
    }
});

document.getElementById('music-checkbox').addEventListener('change',($event)=>{

    if($event.target.checked){
        hobbyDoc.children[2].classList.remove('text-secondary');
    } else {
        hobbyDoc.children[2].classList.add('text-secondary');
    }
});

const radioButtons = document.getElementsByName('transport-method');

// Radio Button Event Listeners
for(let i=0; i<radioButtons.length;i++){

    radioButtons[i].addEventListener('change',($event)=>{
        transportResult.textContent = $event.target.value;

    });
}

const selectButton = document.getElementById('music-preference');
musicResult.textContent = selectButton.value;

selectButton.addEventListener('change',($event)=>{
        musicResult.textContent = $event.target.value;
});
