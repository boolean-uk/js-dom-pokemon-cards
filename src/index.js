
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
pokemonImage.style.width = "256px"

//look for the right image url for every card. We chooosed the front facing images from the sprites object
pokemonImage.setAttribute('src', pokemon.sprites.other["official-artwork"].front_default)


//adding front and back face of the pokemon image in an array
const imgs = [
    pokemon.sprites.other["official-artwork"].front_default,
    pokemon.sprites.back_default,
]

//current starts from 0 (so the first image to show is the front)

let current = 0

//when the user clicks on the image, if the current variable is 0 we set it
//to 1 and vice versa
//then we update the source of the image to the imgs[current]
pokemonImage.addEventListener('click', function(e){
    if(current === 0) current = 1
    else current = 0
    pokemonImage.setAttribute('src', imgs[current])
})

const cardText = document.createElement('ul')
cardText.classList.add('card--text')
cardText.style.listStyle = 'none'

//add hp stat
const hp = document.createElement('li')
const hpValue = getStat(pokemon.stats, 'hp')
hp.textContent = `HP: ${hpValue}`

cardText.append(hp)

//add attack attack

const attack = document.createElement('li')
const attackValue = getStat(pokemon.stats, 'attack')
attack.textContent = `ATTACK: ${attackValue}`

cardText.append(attack)

//add attack defense

const defense = document.createElement('li')
const defenseValue = getStat(pokemon.stats, 'defense')
defense.textContent = `DEFENSE: ${defenseValue}`

cardText.append(defense)

//add attack special-attack

const specialAttack = document.createElement('li')
const specialAttackValue = getStat(pokemon.stats, 'special-attack')
specialAttack.textContent = `SPECIAL-ATTACK: ${specialAttackValue}`

cardText.append(specialAttack)

//add attack special-defense

const specialDefense = document.createElement('li')
const specialDefenseValue = getStat(pokemon.stats, 'special-defense')
specialDefense.textContent = `SPECIAL-DEFENSE: ${specialDefenseValue}`

cardText.append(specialDefense)

//add attack speed

const speed = document.createElement('li')
const speedValue = getStat(pokemon.stats, 'speed')
speed.textContent = `SPEED: ${speedValue}`

cardText.append(speed)

//Game section

const gamesText = document.createElement('ul')
gamesText.style.listStyle = 'none'

gamesText.classList.add('card--text')

const gameTitle = document.createElement('h2')
gameTitle.style.fontWeight = 'bold'
gameTitle.style.textAlign = 'left'
gameTitle.style.padding = '1rem'
gameTitle.innerText = 'GAMES'

for(let i = 0; i < pokemon.game_indices.length; i++){
    const gameChild = pokemon.game_indices[i]
    const game = document.createElement('li')
    game.textContent = gameChild.version.name.toUpperCase()
    gamesText.append(game)
}

//add elements to the card
pokemonElement.append(cardTitle)
pokemonElement.append(pokemonImage)
pokemonElement.append(cardText)
pokemonElement.append(gameTitle)
pokemonElement.append(gamesText)
//add card to the cards list
cardList.append(pokemonElement)
}

// gets the stats array for each pokemon and the name of the stat we want. Then the function
// loops through the stats array, and when it finds the desired
// stat name, it returns the base_stat value
function getStat(stats, statName) {

    for(let i = 0; i < stats.length; i++){
        const statsChild = stats[i]
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
