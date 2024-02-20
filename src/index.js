// Wait for DOM to finish loading before generating the cards
document.addEventListener('DOMContentLoaded', function() {
    const parent = document.querySelector('.cards');
    //console.log(data);

    //You can start simple and just render a single 
    //pokemon card from the first element
    // console.log(data);
    GeneratePokemonCards(data, parent)
});

function GeneratePokemonCards(pokemonData, parentElement) {
    
    pokemonData.forEach((pokemon) => {
        const pokemonCard = GenerateCard(pokemon)
        parentElement.appendChild(pokemonCard)
    })
}

/**
 * Generate the card for the provided pokemon
 * @param {Object} pokemon A Object from the Array of pokemon objects in data.js
 * @returns A <li> element, with multiple attached child elements defining the pokemon card
 */
function GenerateCard(pokemon) {
    const imagePaths = [
        pokemon.sprites.other["official-artwork"].front_default,
        pokemon.sprites.front_default,
        pokemon.sprites.front_shiny,
        pokemon.sprites.versions["generation-i"]["red-blue"].front_default,
        pokemon.sprites.versions["generation-ii"].crystal.front_default,
        pokemon.sprites.versions["generation-iii"]["ruby-sapphire"].front_default,
        pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_default,
        pokemon.sprites.versions["generation-v"]["black-white"].front_default,
        pokemon.sprites.versions["generation-vi"]["omegaruby-alphasapphire"].front_default,
        pokemon.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_default
    ]

    const CardImageDescription = [
        'Official artwork',
        'Default',
        'Shiny',
        'Gen 1: Red/Blue',
        'Gen 2: Crystal',
        'Gen 3: Ruby/Sapphire',
        'Gen 4: Diamond/Pearl',
        'Gen 5: Black/White',
        'Gen 6: Omega-Ruby/Alpha-Sapphire',
        'Gen 7: Ultra-Sun/Ultra-Moon'
    ]

    const cardElement = document.createElement('li')
    cardElement.classList.add("card")
    
    const header = GenerateCardHeader(pokemon)
    cardElement.appendChild(header)

    const pokemonImageContainer = GeneratePokemonImage(imagePaths, CardImageDescription)
    header.appendChild(pokemonImageContainer)
    
    const pokemonStats = GenerateStatList(pokemon)
    cardElement.appendChild(pokemonStats)

    const accordion = GenerateDetailsAccordion(pokemon)
    cardElement.appendChild(accordion)
    return cardElement
}

/**
 * Generate the Header element for the pokemon card
 * @param {Object} pokemon A Object from the Array of pokemon objects in data.js
 * @returns Header element for the pokemon card
 */
function GenerateCardHeader(pokemon) {
    // Generate header of card
    const header = document.createElement('h2')
    header.classList.add("card--title")
    let name = pokemon.name
    header.textContent = name.charAt(0).toUpperCase() + name.slice(1)
    return header
}

/**
 * Generate the Image element for the pokemon card
 * @param {string[]} imgPaths Paths to all possible src paths/images for the pokemon image
 * @param {string[]} imgDescs String of description for each possible pokemon image
 * @returns A div element, containing a description (<p>) and and image (<img>)
 */
function GeneratePokemonImage(imgPaths, imgDescs) {
    let continueSlideshow = true
    let lockSlideshow = false
    // Generate the card image
    const imageContainer = document.createElement("div")
    imageContainer.classList.add("imageContainer")
    const imageDescription = document.createElement("p")
    const image = document.createElement('img')
    image.width = "256"
    image.classList.add("card--img")
    image.src = imgPaths[0]
    imageDescription.textContent = imgDescs[0]
    imageDescription.style.fontSize = "small"

    const resetButton = GenerateResetButton()
    resetButton.addEventListener("click", () => {
        // Hide the button when pressed
        resetButton.style.display = "none"
        // Continue slideshow
        continueSlideshow = true
        lockSlideshow = false
    })

    // First click now stop the slideshow, 2nd and onward changes image
    image.addEventListener("click", () => {
        // Stop slideshow when image clicked and show the reset button
        if (!lockSlideshow) {
            lockSlideshow = true
            resetButton.style.display = "block"
        } else {
            // Move to next image/description
            let elementIndex = imgPaths.indexOf(image.src)
            image.src = imgPaths[(elementIndex + 1) % imgPaths.length]
            imageDescription.textContent = imgDescs[(elementIndex + 1) % imgPaths.length]
        }
    })

    image.addEventListener("mouseover", () => {
        continueSlideshow = false
    })

    image.addEventListener("mouseout", () => {
        if (!lockSlideshow) {
            continueSlideshow = true
        }
    })



    


    const maxTime = 2000 // Maximum time 10s (10000ms)
    const minTime = 1000 // Minimm time 2s (2000ms)
    const UPDATE_TIME = Math.floor(Math.random() * (maxTime - minTime + 1) + minTime)
    setInterval(() => {
        if (continueSlideshow) {
            let elementIndex = imgPaths.indexOf(image.src)
            image.src = imgPaths[(elementIndex + 1) % imgPaths.length]
            imageDescription.textContent = imgDescs[(elementIndex + 1) % imgPaths.length]
        }
    }, UPDATE_TIME)
    

    imageContainer.appendChild(image)
    imageContainer.appendChild(resetButton)
    imageContainer.appendChild(imageDescription)

    return imageContainer   
}


/**
 * Generat the stat list for the provided pokemon
 * @param {Object} pokemon A Object from the Array of pokemon objects in data.js
 * @returns <ul> element with mupltie attached children <li> elements 
 */
function GenerateStatList(pokemon) {
    // Generate the card list
    const cardStats = document.createElement('ul')
    cardStats.classList.add("card--text")
    
    // Generate the stats within the list
    pokemon.stats.forEach((key) => {
        const stat = document.createElement('li')
        stat.textContent = `${key.stat.name.toUpperCase()}: ${key.base_stat}`
        cardStats.appendChild(stat)
    })

    return cardStats    
}

/**
 * Generate the button and subsequent <li> children on the panel that gets displayed. Also inserts the eventListener onto the object.
 * @param {Object} pokemon A Object from the Array of pokemon objects in data.js
 * @returns <button> element with a hidden child <ul> that lists several <li> elements. <ul> appears when button pressed
 */
function GenerateDetailsAccordion(pokemon) {
    const accordion = document.createElement("button")
    accordion.classList.add("accordion")
    accordion.textContent = "Featured in"
    accordion.addEventListener("click", function() {
        accordion.classList.toggle("active")
        let displayStyle = this.childNodes[1].style
        if (displayStyle.display === "block") {
            displayStyle.display = "none"
        }  else {
            displayStyle.display = "block"
        }
    })
    
    const accordionPanel = document.createElement("div")
    accordionPanel.classList.add("panel")
    accordion.appendChild(accordionPanel)
    
    const accordionList = document.createElement("ul")
    accordionPanel.appendChild(accordionList)
    
    pokemon.game_indices.forEach((game) => {
        const appearance = document.createElement("li")
        let name = game.version.name.charAt(0).toUpperCase() + game.version.name.slice(1)
        appearance.textContent = `${name}`
        accordionList.appendChild(appearance)
    })
    return accordion
}

function GenerateResetButton() {

    const resetButton = document.createElement("button")
    const resetButtonImage = document.createElement("img")
    resetButtonImage.src = "./src/media/reset_icon.png"
    resetButtonImage.classList.add("imageBtnImage")
    resetButton.appendChild(resetButtonImage)
    resetButton.classList.add("imageBtn")

    return resetButton
}