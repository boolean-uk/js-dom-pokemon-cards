
function renderCards() {
    const cardList = document.querySelector(".cards")
    data.forEach(pokemon => {

        cardList.append(renderCard(pokemon))
    })
}

function renderCard(pokemon) {
    const pokemonCard = document.createElement('li')
    pokemonCard.className = 'card'

    pokemonCard.appendChild(createTitle(pokemon.name))

    pokemonCard.append(createImg(pokemon.sprites.other['official-artwork'].front_default))

    pokemonCard.append(createStatInfo(pokemon.stats))

    pokemonCard.append(createGameAppearances(pokemon.game_indices))

    return pokemonCard
}

function createTitle(name) {
    const pokemonName = document.createElement('h2')
    pokemonName.className = 'card--title'
    pokemonName.textContent = name.charAt(0).toUpperCase() + name.slice(1)
    return pokemonName
}

function createImg(sprite) {
    const pokemonImg = document.createElement('img')
    pokemonImg.width = 256
    pokemonImg.className = 'card--img'
    pokemonImg.src = sprite
    return pokemonImg
}

function createStatInfo(stats) {
    const pokemonInfo = document.createElement('ul')
    pokemonInfo.className = 'card--text'

    stats.forEach((stat) => {
        const statLi = document.createElement('li')
        statLi.textContent = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`
        pokemonInfo.append(statLi)
    })
    return pokemonInfo
}

function createGameAppearances(gameIndices) {
    const pokemonGameAppearances = document.createElement('ul')
        pokemonGameAppearances.className = 'card--text'
        const gameAppearances = document.createElement('li')
        
        let games = '';
        gameIndices.forEach((game_indice) => {
            games += game_indice.version.name + ", "
        })
        gameAppearances.textContent = "Games: " + games
        pokemonGameAppearances.append(gameAppearances)
    return pokemonGameAppearances
}

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

function addClickEventToCards() {
    const cards = document.querySelectorAll(".card")
    for (var i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', swapImage, false)
    }
}

function main() {
    renderCards()
    addClickEventToCards()
}

main()