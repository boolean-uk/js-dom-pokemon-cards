const cards = document.querySelector('.cards')

function drawCardName(pokemon) {
    const cardName = document.createElement('h2')
    cardName.classList.add('card--title')
    let pokemonName = pokemon.name
    cardName.textContent = pokemonName[0].toUpperCase() + pokemonName.slice(1)
    return cardName
}

function drawCardImage(pokemon) {
    const image = document.createElement('img')
    image.classList.add('card--img')
    image.setAttribute('width', 256)
    image.setAttribute('src', pokemon.sprites.other["official-artwork"].front_default)
    return image
}

function drawCardStats(pokemon) {
    const stats = document.createElement('ul')
    stats.classList.add('card--text')
    for (let i = 0; i < pokemon.stats.length; i++) {
        const stat = document.createElement('li')
        stat.textContent = `${pokemon.stats[i].stat.name.toUpperCase()}: ${pokemon.stats[i].base_stat}`
        stats.append(stat)
    }
    return stats
}

function drawGames(pokemon) {
    const games = document.createElement('ul')
    games.classList.add('card--game-info')
    for (let i = 0; i < pokemon.game_indices.length; i++) {
        const game = document.createElement('li')
        game.textContent = pokemon.game_indices[i].version.name
        games.append(game)
    }
    return games
}

function spriteURLs(sprites) {
    let spriteCollection = []
    for (const key in sprites) {
        if (sprites[key] != null) {
            if (typeof sprites[key] === "object") {
                spriteCollection = spriteCollection.concat(spriteURLs(sprites[key]))
            } else {
                spriteCollection.push(sprites[key])
            }
        }
    }
    return spriteCollection
}

function togglePicture(pokemon, card) {
    const currentImage = card.querySelector('.card--img')
    const sprites = spriteURLs(pokemon.sprites)
    let currentIndex = sprites.indexOf(currentImage.getAttribute('src'))
    if (currentIndex === sprites.length - 1) {
        currentIndex = 0
    }
    currentImage.setAttribute('src', sprites[currentIndex + 1])
}

function drawCards() {

    for (let i = 0; i < data.length; i++) {

        const card = document.createElement('li')
        card.classList.add('card')

        card.append(drawCardName(data[i]))
        card.append(drawCardImage(data[i]))
        card.append(drawCardStats(data[i]))


        card.addEventListener('click', () => togglePicture(data[i], card))

        card.append(drawGames(data[i]))
        cards.append(card)

    }
}

drawCards()
