
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

const pokemonLists = document.querySelector('.cards')

for (let i = 0; i < data.length; i++) {
    const PoekmonData = data[i]
    // creating the card
    const singleCard = document.createElement('li')
    singleCard.setAttribute('class', 'card')
    pokemonLists.append(singleCard)
    // Poekmon Name
    const pokemonName = document.createElement('h2')
    pokemonName.setAttribute('class', 'card--title')
    pokemonName.innerText = PoekmonData.name
    singleCard.append(pokemonName)
    // pokemon img 
    const pokemonImg = document.createElement('img')
    pokemonImg.setAttribute('width','256')
    pokemonImg.setAttribute('class', 'card--img')
    pokemonImg.setAttribute('src', PoekmonData.sprites.other['official-artwork'].front_default)
    singleCard.append(pokemonImg)
    // stat list
    const pokemonStats = document.createElement('ul')
    pokemonStats.setAttribute('class', 'card--text')
    singleCard.append(pokemonStats)
    // add list items 
    for (let j = 0; j < PoekmonData.stats.length; j++) {
        const statName = PoekmonData.stats[j].stat.name
        const statLevel = PoekmonData.stats[j].base_stat
        const currentStat = document.createElement('li')
        currentStat.innerText = `${statName}; ${statLevel}`
        pokemonStats.append(currentStat)
        
    }
}