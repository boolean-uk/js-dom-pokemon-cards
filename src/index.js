
console.log(data);
let card
let stats

const createCard = () => {
    const list = document.querySelector('ul')
    card = document.createElement('li')
    card.setAttribute('class','card')
    list.append(card)
}

const createPokemonName = (element) => {
    const pokemonName = document.createElement('h2')
    pokemonName.innerText = `${element.name}`
    pokemonName.setAttribute('class', 'card--title')
    card.append(pokemonName)
}

function renderImage(element) {

    const image = document.createElement('img')
    image.setAttribute('class','card--img')

    image.setAttribute('width', '256')

    image.setAttribute('src', `${element.sprites.other["official-artwork"].front_default}`)
    card.append(image)

}

function renderStats() {
    stats = document.createElement('ul')
    stats.setAttribute('class', 'card--text')
    card.append(stats)

}

function renderIndividualStat(s) {
        const statsElement = document.createElement('li')
        stats.append(statsElement)
        statsElement.innerText = `${s.stat.name}: ${s.base_stat}`   
}

data.forEach(element => {

    createCard()
    createPokemonName(element)
    renderImage(element)
    renderStats(element)

    element.stats.forEach(s => renderIndividualStat(s))


//not the most informative, just tried to add a section 
// const games = document.createElement('ul')
// card.append(games)


// element.game_indices.forEach(g => {

// const game = document.createElement('li') 
// games.append(game)
// game.innerText = `${g.version.name}` 
    
// })

})


//side note: earlier versions had ${data[data.indeOf(element].name} 
// instead of just, well, ${element.name} 
//... yeah. 
//..
//Just leaving that there so I (hopefully) remember to not get so focused on details that I loose sight of the, let's be honest here, glaringly obvious. 
