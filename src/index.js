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

function pokemonGameVersions(games) {
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

function pokemonCard(name, image, stats, gameVersions) {
    const card = listElement('li', 'card', 'none')
    
    card.append(pokemonName(name))
    card.append(pokemonImage(image))
    card.append(pokemonStats(stats))
    card.append(pokemonGameVersions(gameVersions))

    return card
}

function loadAllPokemon(pokemons) {
    const cards = document.querySelector('.cards')

    for (const pokemon of pokemons) {
        cards.append(
            pokemonCard(
                pokemon.name,
                pokemon.image,
                pokemon.stats,
                pokemon.games
            )
        )
    }
}

function deleteAllPokemon() {
    /* remove all children 
        const cards = document.querySelector('.cards')
        const cardlist = document.querySelectorAll('.card')

        for (const card of cardlist) cards.removeChild(card)
    */

   // set innerText to empty string
   const cards = document.querySelector('.cards')
   cards.innerText = ''
}

function createButton(pokemonVersions) {
    const body = document.querySelector('body')
    const cards = document.querySelector('.cards')

    const buttonContainer = document.createElement('div')
    const button = document.createElement('button')
    
    button.innerText = 'Dream World Version'
    button.style.width = '150px'
    button.style.padding = '20px 10px'
  
    buttonContainer.style.textAlign = 'center'
    buttonContainer.append(button)

    body.insertBefore(buttonContainer, cards)

    let defaultVersion = true
    button.innerText = 'Default Version'

    button.onclick = () => {
        defaultVersion = !defaultVersion;

        deleteAllPokemon()

        if (defaultVersion) {
            loadAllPokemon(pokemonVersions[0])
            button.innerText = 'Default Version'
        } else {
            loadAllPokemon(pokemonVersions[1])
            button.innerText = 'Dream World Version'
        }
    };
}

function pokemonVersions() {
    const defaultPokemons = data.map(pokemon => (
        {
            name: pokemon.name[0].toUpperCase() + pokemon.name.substring(1),
            image: pokemon.sprites.other['official-artwork'].front_default,
            stats: pokemon.stats.map(attribute => ({ name: attribute.stat.name.toUpperCase(), value: attribute.base_stat })),
            games: pokemon.game_indices.map((g) => g.version.name)
        }
    ))

    const dreamWorldPokemons = data.map(pokemon => (
        {
            name: pokemon.name[0].toUpperCase() + pokemon.name.substring(1),
            image: pokemon.sprites.other['dream_world'].front_default,
            stats: pokemon.stats.map(attribute => ({ name: attribute.stat.name.toUpperCase(), value: attribute.base_stat })),
            games: pokemon.game_indices.map((g) => g.version.name)
        }
    ))

    return [ defaultPokemons, dreamWorldPokemons ]
}

function loadPage() {
    const pokemons = pokemonVersions()
    
    createButton(pokemons)

    loadAllPokemon(pokemons[0])
}

loadPage()