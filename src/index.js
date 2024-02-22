

const cardList = document.querySelector(".cards")


data.forEach(pokemon => {
    const pokemonCard = document.createElement('li')
    pokemonCard.className = 'card'

    const pokemonName = document.createElement('h2')
    pokemonName.className = 'card--title'
    pokemonName.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    pokemonCard.appendChild(pokemonName)

    const pokemonImg = document.createElement('img')
    pokemonImg.width = 256
    pokemonImg.className = 'card--img'
    pokemonImg.src = pokemon.sprites.other['official-artwork'].front_default
    pokemonCard.append(pokemonImg)

    const pokemonInfo = document.createElement('ul')
    pokemonInfo.className = 'card--text'

    pokemon.stats.forEach((stat) => {
        const statLi = document.createElement('li')
        statLi.textContent = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`
        pokemonInfo.append(statLi)
    })
    pokemonCard.append(pokemonInfo)

    const pokemonGameAppearances = document.createElement('ul')
    pokemonGameAppearances.className = 'card--text'
    const gameAppearances = document.createElement('li')
    
    let games = '';
    pokemon.game_indices.forEach((game_indice) => {
        games += game_indice.version.name + ", "
    })
    gameAppearances.textContent = "Games: " + games
    pokemonGameAppearances.append(gameAppearances)

    pokemonCard.append(pokemonGameAppearances)

    cardList.append(pokemonCard)
})

const cards = document.querySelectorAll(".card")

var swapImage = function() {
    pokemonName = this.children[0].textContent;
    
    data.forEach((pokemon) => {
        if (pokemon.name == pokemonName.toLowerCase()) {
            if (this.children[1].src === pokemon.sprites.other.dream_world.front_default) {
                this.children[1].src = pokemon.sprites.other['official-artwork'].front_default
            } else {
                this.children[1].src = pokemon.sprites.other.dream_world.front_default
            }
        }
    })
}

for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', swapImage, false)
}