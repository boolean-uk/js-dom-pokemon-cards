const createCard = (pokemon) => {
    const frontImages = [
        pokemon.sprites.front_default,
        pokemon.sprites.front_shiny,
        pokemon.sprites.other.dream_world.front_default
    ]

    let currentIndex = 0

    const changeImage = () => {
        currentIndex = (currentIndex + 1) % frontImages.length
        img.src = frontImages[currentIndex]
    };

    const cardElement = document.createElement('ul')
    cardElement.classList.add('card')

    const titleElement = document.createElement('h2')
    titleElement.classList.add('card--title')
    titleElement.textContent = capitalizeFirstLetter(pokemon.name)
    cardElement.appendChild(titleElement)

    const img = document.createElement('img')
    img.width = '256'
    img.classList.add('card--img')
    img.src = pokemon.sprites.other['official-artwork'].front_default
    img.addEventListener('click', changeImage)
    cardElement.appendChild(img)

    const textElement = document.createElement('ul')
    textElement.classList.add('card--text')
    textElement.innerHTML = `
        <li>HP: ${pokemon.stats[0].base_stat}</li>
        <li>ATTACK: ${pokemon.stats[1].base_stat}</li>
        <li>DEFENSE: ${pokemon.stats[2].base_stat}</li>
        <li>SPECIAL-ATTACK: ${pokemon.stats[3].base_stat}</li>
        <li>SPECIAL-DEFENSE: ${pokemon.stats[4].base_stat}</li>
        <li>SPEED: ${pokemon.stats[5].base_stat}</li>
    `
    cardElement.appendChild(textElement)

    const gamesElement = document.createElement('div')
    const h3Element = document.createElement('h3')
    h3Element.textContent = 'Appeared in:'
    gamesElement.appendChild(h3Element)
    const gamesList = document.createElement('ul')
    pokemon.game_indices.forEach((game_indice) => {
        const listItem = document.createElement('li')
        listItem.textContent = capitalizeFirstLetter(game_indice.version.name)
        gamesList.appendChild(listItem)
    })
    gamesElement.appendChild(gamesList)
    cardElement.appendChild(gamesElement)

    return cardElement
}

const createAllCards = (pokemonList) =>{
    const cardElements = pokemonList.map(p => createCard(p))
    return cardElements
}

document.addEventListener("DOMContentLoaded", function(event) {
    const cardsContainer = document.getElementsByClassName('cards')[0]
    const cards = createAllCards(data)
    cards.forEach(card => {
        cardsContainer.appendChild(card)
    })
})

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}
