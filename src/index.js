
console.log(data)

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0])

function createCard(pokemonId) {
    const pokemon = data.find((pokemon) => pokemon.id === pokemonId)
    const cardsUl = document.querySelector('.cards')
    const cardLi = document.createElement('li')
    cardLi.setAttribute('class', 'card')
    const header = createHeaderAndImg(pokemon)
    cardLi.appendChild(header)
    const image = createImg(pokemon)
    cardLi.appendChild(image)
    const stats = createStats(pokemon)
    cardLi.appendChild(stats)
    const games = createGames(pokemon)
    cardLi.appendChild(games) 
    cardsUl.appendChild(cardLi)
}

function createHeaderAndImg(pokemon) {
    const h2 = document.createElement('h2')
    h2.setAttribute('class', 'card-title')
    h2.innerText = pokemon.name
    return h2
}

function createImg(pokemon) {
    const image = document.createElement('img');
    image.setAttribute('src', pokemon.sprites.other['official-artwork'].front_default)
    image.setAttribute('width', '256')
    image.setAttribute('class', 'card--img')
    return image
}

function createStats(pokemon) {
    const ul = document.createElement('ul')
    ul.setAttribute('class', 'card--text')

    pokemon.stats.forEach(stat => {
        const li = document.createElement('li')
        li.innerText = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`
        ul.appendChild(li)
    });

    return ul
}

function createGames(pokemon) {
    const games = document.createElement('ul')
    games.setAttribute('class', 'card--game-info')

    pokemon.game_indices.forEach(game => {
        const li = document.createElement('li')
        li.innerText = game.version.name.toUpperCase()
        games.appendChild(li)
    });

    return games
}

function main() {
    for (let i = 1; i <= data.length; i++) {
        createCard(i)
    }
}

main()

