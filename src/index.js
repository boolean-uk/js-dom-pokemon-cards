
// console.log(data);
// refer to the ul in the body with class 'cards'
const cardList = document.querySelector('.cards')
 /* remove annoying dots from each card */
cardList.style.listStyle = 'none'
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

// Add pokemon image to the card

const pokemonImage = document.createElement('img')
pokemonImage.classList.add('card--img')
pokemonImage.style.width = "256"

//look for the right image url for every card. We chooosed the front facing images from the sprites object
pokemonImage.setAttribute('src', pokemon.sprites.other["official-artwork"].front_default)

const cardText = document.createElement('ul')
cardText.classList.add('card--text')
const hp = document.createElement('li')
hp.textContent = `HP: ${}`

//add elements to the card
pokemonElement.append(cardTitle)
pokemonElement.append(pokemonImage)

//add card to the cards list
cardList.append(pokemonElement)
}
function getStat (stats, statName) {
    
}
//You can start simple and just render a single 
//pokemon card from the first element
// console.log(data[0]);
