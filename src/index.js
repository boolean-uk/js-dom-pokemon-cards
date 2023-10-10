
console.log(data);

data.forEach (element => {

//CARD
const list = document.querySelector('ul')
const card = document.createElement('li')
card.setAttribute('class','card')
list.append(card)


//NAME
const pokemonName = document.createElement('h2')
    pokemonName.innerText = `${element.name}`
    pokemonName.setAttribute('class', 'card--title')
card.append(pokemonName)

//IMAGE

const image = document.createElement('img')
image.setAttribute('class','card--img')

image.setAttribute('width', '256')

image.setAttribute('src', `${element.sprites.other["official-artwork"].front_default}`)
card.append(image)


//STATS
const stats = document.createElement('ul')
stats.setAttribute('class', 'card--text')
card.append(stats)

const hp = document.createElement('li')
stats.append(hp)
hp.innerText = `hp: ${element.stats[0].base_stat}`

const attack = document.createElement('li')
stats.append(attack)


// this is where I realised I needed a short break. 'data[data.indexOf(element)]', seriously!? I corrected the other instances (yes, this was the norm at one point, but though I'd just leave one out there as a hopefuly somewhat amusing wee reminder)
attack.innerText = `attack: ${data[data.indexOf(element)].stats[1].base_stat}`

const defense = document.createElement('li')
stats.append(defense)
defense.innerText = `defense: ${element.stats[2].base_stat}`

const specialAttack = document.createElement('li')
stats.append(specialAttack)
specialAttack.innerText = `specialAttack: ${element.stats[3].base_stat}`

const specialDefense = document.createElement('li')
stats.append(specialDefense)
specialDefense.innerText = `specialDefense ${element.stats[3].base_stat}`

const speed= document.createElement('li')
stats.append(speed)
speed.innerText = `speed: ${element.stats[5].base_stat}`

})

console.log(data[0]);
