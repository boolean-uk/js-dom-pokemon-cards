
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);
const pokemonList = document.querySelector(".cards");

for (let i = 0; i < data.length; i++) {
    //Variables
    const pokemon = data[i];
    const pokemonCard = document.createElement("li");
    const attributeList = document.createElement("ul");
    const header = document.createElement("h2");
    const image = document.createElement("img");
    const pokemonApp = document.createElement("ul");
    const appearances = document.createElement("h2");

    //Card
    pokemonList.append(pokemonCard)
    pokemonCard.setAttribute("class", "card")
    pokemonCard.style.listStyle = "none"
    pokemonCard.append(header)
    pokemonCard.append(image)
    pokemonCard.append(attributeList)
    pokemonCard.append(appearances)
    pokemonCard.append(pokemonApp)

    //Card Header
    header.setAttribute("class", "card--title")
    header.innerText = pokemon.name
    header.style.textTransform = "capitalize"

    //Card Image
    image.setAttribute("class", "card--img")
    image.src = pokemon.sprites.other["official-artwork"].front_default
    image.style.width = "250px"

    //Card Attributes
    attributeList.setAttribute("class", "card--text")
    attributeList.style.listStyle = "none"
    attributeList.style.lineHeight = "2rem"

    for (let j = 0; j < pokemon.stats.length; j++) {
        const attributeName = pokemon.stats[j].stat.name
        const attributeValue = pokemon.stats[j].base_stat
        const attributeListItem = document.createElement("li")
        attributeListItem.innerText = `${attributeName}: ${attributeValue}`.toUpperCase()
        attributeList.append(attributeListItem)
    }

    //Card Generation Header
    appearances.innerText = "Appearances"

    //Card Generation
    pokemonApp.setAttribute("class", "card--text")
    pokemonApp.style.listStyle = "none"
    for (k = 0; k < pokemon.game_indices.length; k++) {
        const pokemonGen = document.createElement("li")
        const generationName = pokemon.game_indices[k].version.name
        pokemonGen.innerText = `GEN: ${generationName}`
        pokemonGen.style.textTransform = "capitalize"
        pokemonGen.style.lineHeight = "1.4rem"
        pokemonApp.append(pokemonGen)
    }

    //Card Image Toggle
    const toggle = () => {
        const originalImage = pokemon.sprites.other["official-artwork"].front_default
        const alternateImage = pokemon.sprites.other["dream_world"].front_default
        image.src === originalImage ? image.src = alternateImage : image.src = originalImage
    }
    pokemonCard.addEventListener("click", toggle)
}

