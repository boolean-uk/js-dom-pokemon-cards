
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element

console.log(data[0]);
const pokemonCardsUL = document.querySelector("ul")
//TOP LEVEL



function createTitle(pokemonData){
    const cardTitle = document.createElement("h2");
    cardTitle.className = "card--title"
    cardTitle.innerHTML = pokemonData.name
    return cardTitle
}

function createImage(pokemonData){
    const cardImage = document.createElement('img')
    //cardImage.setAttribute('width', '256')
    
    //cardImage.setAttribute('src', pokemonData.sprites.other['official-artwork'].front_default)
    
    cardImage.width = '256'
    cardImage.src = pokemonData.sprites.other['official-artwork'].front_default
    cardImage.className = "card--img"
    return cardImage
}

function add_stats(pokemonData){
    const stats = document.createElement('ul')
    stats.className = "card--text"
    console.log(pokemonData.stats)
    for(const pokemonStat of pokemonData.stats){
        console.log(pokemonStat)
        const stat = document.createElement('li')
        stat.innerHTML = `${pokemonStat.stat.name.toUpperCase()}: ${pokemonStat.base_stat}`
        stats.appendChild(stat)
    }
    return stats
}

function createCard(pokemonData){

    const card = document.createElement("li");
    card.className = "card"

    const title = createTitle(pokemonData)
    card.appendChild(title)

    const img = createImage(pokemonData)
    card.appendChild(img)

    stats = add_stats(pokemonData)
    card.appendChild(stats)

    pokemonCardsUL.appendChild(card)
}

for(const pokemon of data){
    createCard(pokemon)
}