const cardList = document.querySelector(".cards")


console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

// Update data

function togglePokemonImg(pokemon, img) {
    pokemon.cardImg = img;
    renderCards()
}

// Loading data

function loadImages(pokemon) {
    let images = []
    for (const i in pokemon.sprites) {
        if (pokemon.sprites[i] != null) {
            let img = {};
            img.title = i
            img.url = pokemon.sprites[i]
            images.push(img)
        }
    }

    return images
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
    //const imageArray = loadImages(pokemon)
    let cardImg = document.createElement("img")
    cardImg.setAttribute('width', '256')
    cardImg.setAttribute('class', 'card--img')
    cardImg.setAttribute('src', pokemon.sprites.other['official-artwork'].front_default)
    console.log(pokemon.sprites.other['official-artwork'].front_default)
    cardLi.appendChild(cardImg)

    let dropdown = document.createElement("select")
    const imgArray = loadImages(pokemon)
    for (const i in imgArray) {
        let option = document.createElement("option")

        option.setAttribute('value', imgArray[i].url)
        option.innerHTML = imgArray[i].title
        dropdown.appendChild(option)
    }
    cardLi.appendChild(dropdown)

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

// Extra helper functions

// Capitalize the first letter of the names
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1, str.length)
}


function main() {
    renderCards()
}

main()