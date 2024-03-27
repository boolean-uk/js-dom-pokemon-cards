const cardsList = document.querySelector('.cards')

for (let i = 0; i < data.length; i++) {
    const pokemonCard = document.createElement('li')
    pokemonCard.style.listStyleType = 'none'
    pokemonCard.classList.add('card')
    cardsList.append(pokemonCard)

    const cardTitle = document.createElement('h2')
    cardTitle.style.textTransform = 'capitalize'
    cardTitle.classList.add('card--title')
    cardTitle.innerText = data[i].name
    pokemonCard.append(cardTitle)

    const cardImage = document.createElement('img')
    cardImage.setAttribute('width', '256')
    cardImage.classList.add('card--img')
    cardImage.setAttribute('src', data[i].sprites.other['official-artwork'].front_default)
    pokemonCard.append(cardImage)

    const statList = createStats(data[i])
    pokemonCard.append(statList)

    const gameList = createGameIndices(data[i])
    pokemonCard.append(gameList)
}

function createStats(pokemon) {
    const statList = document.createElement('ul')
    statList.style.margin = '1rem'
    statList.style.padding = '0'
    for(let i = 0; i < pokemon.stats.length; i++) {
        const statLi = document.createElement('li')
        statLi.style.listStyleType = 'none'
        statLi.style.textTransform = 'uppercase'
        statLi.style.lineHeight = '2'
        statLi.append(pokemon.stats[i].stat.name)
        const statLiEnd = document.createElement('span')
        statLi.appendChild(statLiEnd)
        statLiEnd.after(': ')
        statLi.append(pokemon.stats[i].base_stat)
        statList.append(statLi)
    }
    return statList
}

function createGameIndices(pokemon) {
    const gameList = document.createElement('select')
    gameList.classList.add('card--text')
    gameList.style.margin = '1rem'
    const gameMenuName = document.createElement('option')
    gameMenuName.setAttribute('hidden', '')
    gameMenuName.innerText = 'GAME VERSION'

    gameList.append(gameMenuName)
    for(let i = 0; i < pokemon.game_indices.length; i++) {
        const gameMenu = document.createElement('option')
        gameMenu.append(pokemon.game_indices[i].version.name)
        gameMenu.setAttribute('value', pokemon.game_indices[i].version.name)

        gameList.append(gameMenu)
    }
    return gameList

}