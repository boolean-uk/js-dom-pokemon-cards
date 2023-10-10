const pokemonList = document.querySelector(".cards");

for (let i = 0; i < data.length; i++) {
    const pokemon = data[i];

    const pokemonCard = document.createElement("li");
    pokemonList.append(pokemonCard)

    const header = document.createElement("h2");
    pokemonCard.append(header)

    const image = document.createElement("img");
    pokemonCard.append(image)

    const attributeList = document.createElement("ul");
    pokemonCard.append(attributeList)

    pokemonCard.setAttribute("class", "card")
    pokemonCard.style.listStyle = "none"
    
    header.setAttribute("class", "card--title")
    header.innerText = pokemon.name
    header.style.textTransform = "capitalize"

    image.setAttribute("class", "card--img")
    image.src = pokemon.sprites.other["official-artwork"].front_default

    attributeList.setAttribute("class", "card--text")
    attributeList.style.listStyle = "none"
    attributeList.style.lineHeight = "2"

    for (let i = 0; i < pokemon.stats.length; i++) {
        const attributeName = pokemon.stats[i].stat.name
        const attributeValue = pokemon.stats[i].base_stat
        const attributeListItem = document.createElement("li")
        attributeListItem.innerText = `${attributeName}: ${attributeValue}`.toUpperCase()
        attributeList.append(attributeListItem)
    }
}