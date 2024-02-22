const cardList = document.querySelector(".cards")
let imgDefault = true
const pokemons = [{}]

console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

// Handle user input

function handleSelect(pokemon, imgUrl) {
    togglePokemonImg(pokemon, imgUrl)
}

// Update data
// Janky :/
function togglePokemonImg(pokemon, imgUrl) {
    for (const i in pokemons) {
        if (pokemons[i].name === pokemon.name) 
        {
            pokemons[i].img = imgUrl
        }
    }

    renderCards()
}

// Loading data

function loadImages(pokemon) {
    let images = []
    for (const i in pokemon.sprites) {
        if (pokemon.sprites[i] != null) {
            if (typeof pokemon.sprites[i] === 'string') {
                let img = {};
                img.title = i
                img.url = pokemon.sprites[i]
                images.push(img)
            } 
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
    cardTitle.innerHTML = pokemon.name
    cardLi.appendChild(cardTitle)

    // Create and add the images
    //const imageArray = loadImages(pokemon)
    let cardImg = document.createElement("img")
    cardImg.setAttribute('width', '256')
    cardImg.setAttribute('class', 'card--img')
    cardImg.setAttribute('src', pokemon.img)
    cardLi.appendChild(cardImg)

    let dropdown = document.createElement("select")
    dropdown.setAttribute('id', 'image-menu--dropdown')
    const imgArray = pokemon.imgArr

    for (const i in imgArray) {
        let option = document.createElement("option")

        option.setAttribute('value', imgArray[i].url)
        option.innerHTML = imgArray[i].title.replaceAll('_', ' ')
        dropdown.appendChild(option)
        option.addEventListener('change', console.log('Changed'))
        option.addEventListener('click',(event) => handleSelect(pokemon, imgArray[i].url))
    }
    cardLi.appendChild(dropdown)

    // Create and add the stats
    // Create the surrounding unordered list
    let cardUL = document.createElement("ul")
    cardUL.setAttribute('class', 'card--text')
    for (const i in pokemon.stats) { // Iterate through the stats
        let cardLi = document.createElement("li")
        const str = pokemon.stats[i].stat + ': ' + pokemon.stats[i].val
        cardLi.innerHTML = str
        cardUL.appendChild(cardLi)
    }
    cardLi.appendChild(cardUL)

    const gameH3 = document.createElement("h3")
    gameH3.setAttribute('id', 'game-appearences--title')
    gameH3.innerHTML = "Game appearences"
    cardLi.appendChild(gameH3)

    let gameUL = document.createElement("ul")
    gameUL.setAttribute('class', 'card--text')
    gameUL.setAttribute('id', 'game-appearences--list')

    for (let i in pokemon.gameApp) {
        let gameLi = document.createElement("li")
        gameLi.innerHTML = pokemon.gameApp[i].gameTitle
        gameUL.appendChild(gameLi)
    }
    cardLi.appendChild(gameUL)

    return cardLi
}

/**
 * TODO: Toggle images on pokemon. Check the data loaded here, and use these objects to populate html
 * Then, change images that way?? idk. We'll see :)
 */
function loadPokemons() {
    for (let i = 0; i < data.length; i++) {
        pokemons[i] = {
            name: capitalize(data[i].name),
            img: data[i].sprites.other['official-artwork'].front_default,
            imgArr: [],
            stats: [],
            gameApp: []
        }
        for (let j = 0; j < data[i].stats.length; j++) {
            pokemons[i].stats.push({stat: data[i].stats[j].stat.name.toUpperCase(), 
            val: data[i].stats[j].base_stat})
        }
        for (let k = 0; k < data[i].game_indices.length; k++) {
            pokemons[i].gameApp.push({
                gameTitle: 
                "Pokemon " + capitalize(data[i].game_indices[k].version.name)
            })
        }
        pokemons[i].imgArr = loadImages(data[i])
        console.log("imuguharr ", pokemons[i].imgArr[0])
        console.log("why ", {img: {title: 'default', url:data[i].sprites.other['official-artwork'].front_default}})
        pokemons[i].imgArr.push({title: 'default', url:data[i].sprites.other['official-artwork'].front_default})
    }

}


// Render the cards
function renderCards() {
    cardList.innerHTML = ""
    const cards = []
    for (let i = 0; i < data.length; i++) {
        cardList.appendChild(loadCard(pokemons[i]))
    }
}

// Extra helper functions

// Capitalize the first letter of the names
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1, str.length)
}


function main() {
    loadPokemons()
    renderCards()
}

main()