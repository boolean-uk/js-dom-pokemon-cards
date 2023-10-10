
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);
const list = document.querySelector('.cards');

for (let i = 0; i < data.length; i++) {

const pokemon = data[i]
    const pokemonBeast = document.createElement("li");
    list.append(pokemonBeast)

    const attributeList = document.createElement("ul");
    pokemonBeast.setAttribute("class", "card")

    const header = document.createElement("h2");
    pokemonBeast.append(header)

    header.setAttribute("class", "card--title")
    header.innerText = pokemon.name
    header.style.textTransform = "capitalize"
    attributeList.setAttribute("class", "card--text")
    attributeList.style.listStyle = "none"
    attributeList.style.lineHeight = "1.8"


    const image = document.createElement("img");
    pokemonBeast.append(image)
    pokemonBeast.append(attributeList)
    pokemonBeast.style.listStyle = "none"
    
    image.setAttribute("class", "card--img")
    image.src = pokemon.sprites.other["official-artwork"].front_default
    

    for (let a = 0; a < pokemon.stats.length; a++) {
        const attributeName = pokemon.stats[a].stat.name
        const attributeValue = pokemon.stats[a].base_stat
        const attributeListItem = document.createElement("li")
        attributeListItem.innerText = `${attributeName}: ${attributeValue}`.toUpperCase()
        attributeList.append(attributeListItem)
    }

 const background = document.c


}