//DICHIARAZIONE VARIABILI document.

let hideButton = document.querySelector('#hideButton');
let colorButton = document.querySelector('#colorButton');
let boldButton = document.querySelector('#boldButton');

let pContainer = document.querySelector('.pContainer');

let paragraphs = document.querySelectorAll('p');
console.log(paragraphs)

let cardsCont = document.querySelector('.cardsCont');
let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
// console.log(firstName); console.log(lastName);  //CONTROLLO

//ARRAY CARDS
// [{'nome': coso, 'ruolo': kingOfTheBongo, 'foto': https://picsum.photos/200}]
let ourPeople = []

//FUNZIONI UTILI
function randNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
};
function randRgb(){
    return randNum(0, 255);
}
function addCard(){

};
function pushPerson(){
    ourPeople.push({
        name: `${firstName} ${lastName}`,
        ruolo: 'nun sacc',
        foto: `https://picsum.photos/200`
    })
    addCard()
};


//EVENTI
hideButton.addEventListener('click', ()=>{
    pContainer.classList.toggle('d-none');
});


colorButton.addEventListener('click', ()=>{
    paragraphs.forEach(el=>{
        el.style.color = `rgb(${randRgb()}, ${randRgb()}, ${randRgb()})`
    });
});

boldButton.addEventListener('click', ()=>{
    paragraphs.forEach(el=>{
        el.classList.toggle('fw-bold')
    });
});