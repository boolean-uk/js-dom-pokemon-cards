function renderCards() {
    const cardsContainer = document.querySelector('.cards')

    for (let i = 0; i < data.length; i++) {
        const pokemon = data[i]

        // New card list item
        const cardItem = document.createElement('li')
        cardItem.className = 'card'

        // Header
        const header = document.createElement('h2')
        header.className = 'card--title'
        header.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)

        // Image
        const img = document.createElement('img')
        img.width = 256
        img.className = 'card--img'
        img.src = pokemon.sprites.other["official-artwork"].front_default

        // Stats
        const stats = document.createElement('ul')
        stats.className = 'card--text'

        for (let j = 0; j < pokemon.stats.length; j++) {
            const stat = pokemon.stats[j]

            const statItem = document.createElement('li')
            statItem.textContent = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`
            stats.appendChild(statItem)
        }

        const games = document.createElement('section')
        games.className = 'card--games'
        const gamesHeader = document.createElement('p')
        gamesHeader.textContent = 'Appears in: '
        const gamesList = document.createElement('ul')
        gamesList.className = 'card--games-list'

        for (let k = 0; k < pokemon.game_indices.length; k++) {
            const game = pokemon.game_indices[k]

            const gameItem = document.createElement('li')
            gameItem.textContent = game.version.name.charAt(0).toUpperCase() + game.version.name.slice(1)
            gamesList.appendChild(gameItem)
        }

        // Adding game section to card
        games.appendChild(gamesHeader)
        games.appendChild(gamesList)

        // Adding elements to card
        cardItem.appendChild(header)
        cardItem.appendChild(img)
        cardItem.appendChild(stats)
        cardItem.appendChild(games)

        // Adding card to list
        cardsContainer.appendChild(cardItem)
    }
}

function main() {
    renderCards()
}

main()