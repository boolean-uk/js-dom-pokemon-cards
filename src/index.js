
console.log(data);

data.forEach (element => {

//Create the card (li element which will contain all others)
const list = document.querySelector('ul')
const card = document.createElement('li')
card.setAttribute('class','card')
list.append(card)


//get the name from data.js, assign it to a variable, append it to card.
const pokemonName = document.createElement('h2')
    pokemonName.innerText = `${data[data.indexOf(element)].name}`
    pokemonName.setAttribute('class', 'card--title')
card.append(pokemonName)

//get the name from data.js, assign it to a variable, append it to card.


const image = document.createElement('img')
image.setAttribute('class','card--img')
// image.setAttribue('src', data[0].sprites.others[1].front_default)
card.append(image)


//create and append the stats ul with all its li 
const stats = document.createElement('ul')
stats.setAttribute('class', 'card--text')
card.append(stats)


const hp = document.createElement('li')
stats.append(hp)
hp.innerText = 'hp'

const attack = document.createElement('li')
stats.append(attack)
attack.innerText = 'attack'

const defense = document.createElement('li')
stats.append(defense)
defense.innerText = 'defense'

const specialAttack = document.createElement('li')
stats.append(specialAttack)
specialAttack.innerText = 'specialAttack'

const specialDefense = document.createElement('li')
stats.append(specialDefense)
specialDefense.innerText = 'specialDefense'

const speed= document.createElement('li')
stats.append(speed)
speed.innerText = 'speed'

})

console.log(data[0]);
