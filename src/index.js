const cardList = document.querySelector(".cards")


console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

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

    let cardImg = document.createElement("img")
    cardImg.setAttribute('width', '256')
    cardImg.setAttribute('class', 'card--img')
    cardImg.setAttribute('src', pokemon.sprites.other['official-artwork'].front_default)
    console.log(pokemon.sprites.other['official-artwork'].front_default)
    cardLi.appendChild(cardImg)

    let cardUL = document.createElement("ul")
    for (const stat in pokemon.stats) {
        let cardLi = document.createElement("li")
        const str = pokemon.stats[stat].stat.name.toUpperCase() + ': ' + pokemon.stats[stat].base_stat
        console.log(str)
        cardLi.innerHTML = str
        cardUL.appendChild(cardLi)
    }
    cardLi.appendChild(cardUL)

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