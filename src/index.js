
console.log(data);

//Create the card (li element which will contain all others)
const list = document.querySelector('ul')
const card = document.createElement('li')
card.setAttribute('class','card')
list.append(card)


//get the name from data.js, assign it to a variable, append it to card.
const pokemonName = document.createElement('h2')
    pokemonName.innerText = `${data[0].name}`
card.append(pokemonName)

//get the name from data.js, assign it to a variable, append it to card.


const image = document.createElement('img')
//     image.src = `${data[0].sprites.other[1].front_default}`
card.append(image)


//create and append the stats ul with all its li 
const stats = document.createElement('ul')
card.append(stats)


const hp = document.createElement('li')
stats.append(hp)

const attack = document.createElement('li')
stats.append(attack)

const defense = document.createElement('li')
stats.append(defense)

const specialAttack = document.createElement('li')
stats.append(specialAttack)

const specialDefense = document.createElement('li')
stats.append(specialDefense)

const speed= document.createElement('li')
stats.append(speed)



console.log(data[0]);
