
console.log(data);

data.forEach(element => {

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



element.stats.forEach(s => {

    const statsElement = document.createElement('li')
    stats.append(statsElement)
    statsElement.innerText = `${s.stat.name}: ${s.base_stat}`
})


//additional section 

const appearances = document.createElement('ul')
card.append(appearances)


element.game_indices.forEach(g => {

    const game = document.createElement('li') 
    appearances.append(game)
    game.innerText = `name: ${g.version.name}` 
    
})




})

console.log(data[0]);

//side note: earlier versions had ${data[data.indeOf(element].name} 
// instead of just, well, ${element.name} 
//... yeah. 
//..
//Just leaving that there so I (hopefully) remember to not get so focused on details that I loose sight of the, let's be honest here, glaringly obvious. 
