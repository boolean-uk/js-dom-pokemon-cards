
// console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

const cards = document.querySelector('.cards')
const newCard = document.createElement('li')
newCard.classList.add('card')
newCard.innerText = "Bulbasaur"
cards.append(newCard)