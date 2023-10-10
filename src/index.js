
console.log(data[0]);

//You can start simple and just render a single 
//pokemon card from the first element
const pokemonList = document.querySelector(".cards");

for (let i = 0; i < data.length; i++) {
    //Variables
    const pokemon = data[i]
    const pokemonCard = document.createElement("li");
    const attributeList = document.createElement("ul");
    const header = document.createElement("h2");
    const image = document.createElement("img");

    //Card
    pokemonList.append(pokemonCard)
    pokemonCard.setAttribute("class", "card")
    pokemonCard.style.listStyle = "none"
    pokemonCard.append(header)
    pokemonCard.append(image)
    pokemonCard.append(attributeList)

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
}