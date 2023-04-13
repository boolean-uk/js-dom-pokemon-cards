
// console.log(data);
// refer to the ul in the body with class 'cards'
const cardList = document.querySelector('.cards')
// check if we correctly assigned the ul element in the body.html
// console.log(cardList) (just to check if it runs)

for (let i = 0; i < data.length; i++) {
    // console.log(data[i])
    const pokemon = data[i]
    // call the funciton generate card, wich is responsible generating each card for evey pokemon.
    generateCard (pokemon)
}
function generateCard (pokemon) {
const pokemonElement = document.createElement('li')
pokemonElement.classList.add('card')
// check the card.html from the template dicectory to read out the information for each card
const cardTitle = document.createElement('h2')
cardTitle.classList.add('card--title')
const pokemonName = pokemon.name.replace(pokemon.name.charAt(0), pokemon.name.charAt(0).toUpperCase())
cardTitle.innerText = pokemonName
pokemonElement.append(cardTitle)

cardList.append(pokemonElement)
}
//function
//You can start simple and just render a single 
//pokemon card from the first element
// console.log(data[0]);
