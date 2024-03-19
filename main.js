//DICHIARAZIONE VARIABILI document.

let hideButton = document.querySelector('#hideButton');
let colorButton = document.querySelector('#colorButton');
let boldButton = document.querySelector('#boldButton');
let pContainer = document.querySelector('.pContainer');
let paragraphs = document.querySelectorAll('p');
// console.log(paragraphs) //CONTROLLO

let cardsCont = document.querySelector('.cardsCont');
let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
let teacher = document.querySelector('#teacher'); //CHECKED == TRUE ?
let student = document.querySelector('#student'); //CHECKED == TRUE ?
// console.log(teacher); console.log(student);
// console.log(firstName); console.log(lastName);  //CONTROLLO
let formButton = document.querySelector('#formButton');

//ARRAY CARDS
// [{'nome': coso, 'ruolo': kingOfTheBongo, 'foto': https:\\picsum.photos/200}]
const ourPeople = [{'name': 'coso', 'ruolo': 'kingOfTheBongo', 'foto': 'https://picsum.photos/200'}]

//FUNZIONI UTILI
function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
function randRgb() {
    return randNum(0, 255);
};

function addCard() {
    cardsCont.innerHTML = '';
    ourPeople.forEach((person) => {
        let col = document.createElement("div");
        col.classList.add('col-12', 'col-md-3');
        col.innerHTML = ` <div class="card">
                              <img src=${person.foto} class="card-img-top" alt="...">
                              <div class="card-body">
                                  <h5 class="card-title">${person.name}</h5>
                                  <p>${person.ruolo}</p>
                                  <a href="#" class="btn btn-primary">Preonta colonscopia</a>
                              </div>
                          </div>`
        cardsCont.appendChild(col);
    })
};
function role() {
    return teacher.checked ? 'Teacher' : 'Student'
};
function pushPerson() {
    console.log(firstName.value); // CONTROLLO
    console.log(lastName.value); // CONTROLLO
    console.log(ourPeople); //CONTROLLO
    ourPeople.push({name: firstName.value+' '+lastName.value, ruolo: role(), foto: `https://picsum.photos/200`});
};




//EVENTI
hideButton.addEventListener('click', ()=> {
    pContainer.classList.toggle('d-none');
});


colorButton.addEventListener('click', ()=> {
    paragraphs.forEach(el => {
        el.style.color = `rgb(${randRgb()}, ${randRgb()}, ${randRgb()})`
    });
});

boldButton.addEventListener('click', ()=> {
    paragraphs.forEach(el => {
        el.classList.toggle('fw-bold')
    });
});

addCard() //CONTROLLO
formButton.addEventListener('click', ()=> {
    pushPerson();
    addCard();
});