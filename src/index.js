const cardList = document.querySelector(".cards")


console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

// Capitalize the first letter of the names
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1, str.length)
}

function loadCard(pokemon) {
    // Create the surrounding list item
    const cardLi = document.createElement("li")
    cardLi.setAttribute('class', 'card')

    // Create and add the title
    let cardTitle = document.createElement("h2")
    cardTitle.setAttribute('class', 'card--title')
    cardTitle.innerHTML = capitalize(pokemon.name)
    cardLi.appendChild(cardTitle)

    // Create and add the images
    let cardImg = document.createElement("img")
    cardImg.setAttribute('width', '256')
    cardImg.setAttribute('class', 'card--img')
    cardImg.setAttribute('src', pokemon.sprites.other['official-artwork'].front_default)
    console.log(pokemon.sprites.other['official-artwork'].front_default)
    cardLi.appendChild(cardImg)

    // Create and add the stats
    // Create the surrounding unordered list
    let cardUL = document.createElement("ul")
    cardUL.setAttribute('class', 'card--text')
    for (const i in pokemon.stats) { // Iterate through the stats
        let cardLi = document.createElement("li")
        const str = pokemon.stats[i].stat.name.toUpperCase() + ': ' + pokemon.stats[i].base_stat
        cardLi.innerHTML = str
        cardUL.appendChild(cardLi)
    }
    cardLi.appendChild(cardUL)

    let gameH3 = document.createElement("h3")
    gameH3.innerHTML = "Game appearences"
    cardLi.appendChild(gameH3)

    let gameUL = document.createElement("ul")
    for (let i in pokemon.game_indices) {
        let gameLi = document.createElement("li")
        gameLi.innerHTML = pokemon.game_indices[i].version.name
        gameUL.appendChild(gameLi)
    }
    cardLi.appendChild(gameUL)

    return cardLi
}

// Render the cards
function renderCards() {
    const cards = []
    for (let i = 0; i < data.length; i++) {
        cardList.appendChild(loadCard(data[i]))
    }
}


function main() {
    renderCards()
}

main()