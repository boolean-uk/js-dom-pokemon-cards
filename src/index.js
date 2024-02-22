
const pokemonList = document.querySelector(".cards")

main()

//You can start simple and just render a single 
//pokemon card from the first element

function main() {
    renderCards()
}

function renderCards() {

    for (let i = 0; i < data.length; i++) {
        pokemonList.appendChild(renderCard(i))
    }
}

function renderCard(num) {
    const pokemon = data[num]

    const card = document.createElement('li')
    card.className = 'card'

    // Header
    const header = document.createElement('h2')
    header.className = 'card--title'
    header.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    card.appendChild(header)

    // Image
    const img = document.createElement('img')
    img.src = pokemon.sprites.other['official-artwork'].front_default
    img.className = 'card--img'
    img.width = 256

    card.appendChild(img)

    // Stats 
    const cardStats = document.createElement('ul')
    cardStats.className = 'card--text'
    for (let i = 0; i < pokemon.stats.length; i++) {
        const stat = document.createElement('li')
        let statName = pokemon.stats[i].stat.name.toUpperCase()
        let statValue = pokemon.stats[i].base_stat
        stat.textContent = `${statName}: ${statValue}`
        cardStats.appendChild(stat)
    }
    card.appendChild(cardStats)

    return card
}


