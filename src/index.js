const pokemonCards = document.querySelector(".cards");

function main() {
    for (let i = 0; i < data.length; i++) {
        pokemonCards.appendChild(renderCard(i))
    }
}

function renderCard(i) {
    const pokemon = data[i]

    const card = document.createElement('li')
    card.className = 'card'

    const header = document.createElement('h1')
    header.className = 'card-title'
    header.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    card.appendChild(header)

    const img = document.createElement('img')
    img.src = pokemon.sprites.other['official-artwork'].front_default
    img.className = 'card-img'
    img.height = 350
    img.width = 350
    card.appendChild(img)

    const cardStats = document.createElement('ul')
    cardStats.className = 'card-stats'
    for (let i = 0; i < pokemon.stats.length; i++) {
        const stat = pokemon.stats[i]
        const statName = stat.stat.name.toUpperCase()
        const statValue = stat.base_stat
        const statItem = document.createElement('li')
        statItem.textContent = `${statName}: ${statValue}`
        cardStats.appendChild(statItem)
    }
    card.appendChild(cardStats)


    const versionsDropdown = document.createElement('select')
    versionsDropdown.className = 'versions-dropdown'
    Object.keys(pokemon.sprites.versions).forEach((generation) => {
        Object.keys(pokemon.sprites.versions[generation]).forEach((game) => {
            const versionOption = document.createElement('option')
            const versionName = game.replace(/-/g, ' ').toUpperCase()
            versionOption.textContent = versionName
            versionsDropdown.appendChild(versionOption)
        })
    })

    versionsDropdown.addEventListener('change', function() {
        const selectedVersion = this.value
        img.src = pokemon.sprites.versions['official-artwork'][selectedVersion]
    })
    card.appendChild(versionsDropdown)

    img.addEventListener('click', function() {
        toggleImage()
    })

    function toggleImage() {
        if (img.src === pokemon.sprites.other['official-artwork'].front_default) {
            img.src = pokemon.sprites.other['dream_world'].front_default
        } else {
            img.src = pokemon.sprites.other['official-artwork'].front_default
        }
    }
    return card;
}
main();