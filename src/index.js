
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

//add hp stat
const hp = document.createElement('li')
const hpValue = getStat(pokemon.stats, 'hp')
hp.textContent = `HP: ${hpValue}`

cardText.append(hp)

//add attack hp

const attack = document.createElement('li')
const attackValue = getStat(pokemon.stats, 'attack')
attack.textContent = `ATTACK: ${attackValue}`

cardText.append(attack)

//add attack hp

const defense = document.createElement('li')
const defenseValue = getStat(pokemon.stats, 'defense')
defense.textContent = `DEFENSE: ${defenseValue}`

cardText.append(defense)


//add elements to the card
pokemonElement.append(cardTitle)
pokemonElement.append(pokemonImage)
pokemonElement.append(cardText)
//add card to the cards list
cardList.append(pokemonElement)
}

// gets the stats array for each pokemon and the name of the stat we want. Then the function
// loops through the stats array, and when it finds the desired
// stat name, it returns the base_stat value
function getStat(stats, statName) {

    for(let i = 0; i < stats.length; i++){
        const statsChild = stats[i]
        console.log(statsChild.stat.name)
        if(statsChild.stat.name === statName)
        {
            return statsChild.base_stat;
        }
        
    }
    return 0;
}
//You can start simple and just render a single 
//pokemon card from the first element
// console.log(data[0]);
