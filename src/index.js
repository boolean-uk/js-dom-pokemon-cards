function createCard(pokemonData, cardsContainer) {
    const list = document.createElement('li')
    list.classList.add('card')
    cardsContainer.append(list)

    const heading = document.createElement('h2')
    heading.classList.add('card--title')
    heading.innerText = capitalize(pokemonData.name)
    list.append(heading)

    createImage(pokemonData, list)

    const ul = document.createElement('ul')
    ul.classList.add('card--text')
    list.append(ul)

    const stats = pokemonData.stats
    for (let i = 0; i < stats.length; i++) {
        const currentStat = stats[i].stat.name.toUpperCase()
        const statValue = stats[i].base_stat
        const li = document.createElement('li')
        li.innerText = `${currentStat}: ${statValue}`
        ul.append(li)
    }
    
    createList(pokemonData, list)
}

function createImage(pokemonData, list) {
    const img = document.createElement('img')
    img.classList.add('card--img')
    img.src = pokemonData.sprites.other["official-artwork"]["front_default"]
    img.width = 256
    img.setAttribute('data-shiny', pokemonData.sprites.front_shiny)
    img.setAttribute('data-default', pokemonData.sprites.other["official-artwork"]["front_default"])
    img.addEventListener('click', toggle)
    list.append(img)
}

function toggle(event) {
    const imgElement = event.target
    const defaultImg = imgElement.getAttribute('data-default')
    const shinyImg = imgElement.getAttribute('data-shiny')
    
    if (imgElement.src === defaultImg) {
        imgElement.src = shinyImg
    } else {
        imgElement.src = defaultImg
    }
}

function createList(pokemonData, list) {
    const games = pokemonData.game_indices
    const details = document.createElement('details')
    details.classList.add('card--text')
    const summary = document.createElement('summary')
    details.append(summary)
    summary.textContent = 'Appears in:'
    for (let i = 0; i < games.length; i++) {
        const gameName = `Pokemon ` + capitalize(games[i].version.name)
        const game = document.createElement('li')
        game.innerText = gameName
        details.append(game)
    }
    list.append(details)
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const cardsContainer = document.querySelector('.cards')
data.forEach((pokemonData) => {
    createCard(pokemonData, cardsContainer)
})