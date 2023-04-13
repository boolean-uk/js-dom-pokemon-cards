function element(tag, className) {
    // create element
    const element = document.createElement(tag)
    // set class name to card--img
    if (className) element.classList.add(className)

    return element
}

function imageElement(className, imagePath, width, height) {
    const img = element('img', className)
    img.setAttribute('src', imagePath)
    img.setAttribute('width', width)
    img.setAttribute('height', height)

    return img
}

function textElement(tag, className, text) {
    const e = element(tag, className)
    if (text) e.innerText = text

    return e
}

function listElement(tag, className, listStyle, text) {
    const e = element(tag, className)
    if (text) e.innerText = text
    if (listStyle) e.style.listStyleType = listStyle

    return e
}

function pokemonName(name) {
    return textElement('h2', 'card--title', name)
}

function pokemonImage(img) {
    return imageElement('card--img', img, 256, 256)
}

function pokemonStat(statName, statValue) {
    const pokemonStat = listElement('li', null, 'none', null)
    pokemonStat.style.padding = '5px'

    pokemonStat.innerText = `${statName}: ${statValue}`

    return pokemonStat
}

function pokemonStats(stats) {
    const pokemonStats = listElement('ul', 'card--text', 'none')

    stats.map(stat => pokemonStats.append(pokemonStat(stat.name, stat.value)))

    return pokemonStats
}

function loadPokemonGameVersions(games) {
    const pokemonGamesContainer = listElement('div', 'card--text', 'none', null)
    pokemonGamesContainer.style.textAlign = 'center'

    const pokemonGamesContainerTitle = textElement('div', 'card--text', 'Game Versions')
    pokemonGamesContainerTitle.style.fontWeight = 'bold'

    const pokemonGames = textElement('div', 'card--text', games.join(', '))
    pokemonGames.style.textAlign = 'justify'
    
    pokemonGamesContainer.append(pokemonGamesContainerTitle)
    pokemonGamesContainer.append(pokemonGames)

    return pokemonGamesContainer
}

function pokemonCard(pokemon, dreamWordVersion) {
    const card = listElement('li', 'card', 'none')
    
    card.append(pokemonName(pokemon.name[0].toUpperCase() + pokemon.name.substring(1)))

    if (dreamWordVersion)
        card.append(pokemonImage(pokemon.sprites.other['dream_world'].front_default))
    else
        card.append(pokemonImage(pokemon.sprites.other['official-artwork'].front_default))

    card.append(pokemonStats(pokemon.stats.map(attribute => ({ name: attribute.stat.name.toUpperCase(), value: attribute.base_stat }))))

    card.append(loadPokemonGameVersions(pokemon.game_indices.map((g) => g.version.name)))

    return card
}

function loadAllPokemon(dreamWordVersion) {
    const cards = document.querySelector('.cards')

    for (const pokemon of data) {
        cards.append(pokemonCard(pokemon, dreamWordVersion))
    }
}

function deleteAllPokemon() {
    const cards = document.querySelector('.cards')
    const cardlist = document.querySelectorAll('.card')

    for (const card of cardlist) cards.removeChild(card)
}

function createButton() {
    const buttonContainer = document.createElement('div')
    buttonContainer.style.textAlign = 'center'

    const button = document.createElement('button')
    button.innerText = 'Dream World Version'
    button.style.width = '150px'
    button.style.padding = '20px 10px'

    buttonContainer.append(button)

    const body = document.querySelector('body')
    const cards = document.querySelector('.cards')

    body.insertBefore(buttonContainer, cards)

    return button
}

function loadPage() {
    let state = {
        true: 'Dream World Version',
        false: 'Normal Version',
    }

    let dreamWordVersion = false

    const button = createButton()

    button.onclick = () => {
        button.innerText = state[dreamWordVersion]
        dreamWordVersion = !dreamWordVersion;
        deleteAllPokemon()
        loadAllPokemon(dreamWordVersion)
    };

    loadAllPokemon(dreamWordVersion)
}

loadPage()