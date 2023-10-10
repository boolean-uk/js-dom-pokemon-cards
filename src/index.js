
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

const list = document.querySelector('.cards');


const h1Element = document.querySelector('h1');
h1Element.style.color = 'white';



for (let i = 0; i < data.length; i++) {

const pokemon = data[i]
    const pokemonBeast = document.createElement("li");
    list.append(pokemonBeast);


    const attributeList = document.createElement("ul");
    pokemonBeast.classList.add("class", "card")

    const header = document.createElement("h2");
    pokemonBeast.append(header);
    header.style.color = 'dark blue';


    header.setAttribute("class", "card--title");
    header.innerText = pokemon.name
    header.style.textTransform = "capitalize"
    attributeList.classList.add("class", "card--text");
    attributeList.style.listStyle = "none"
    attributeList.style.lineHeight = "1.8"


    const image = document.createElement("img");
    pokemonBeast.append(image);
    pokemonBeast.append(attributeList);
    pokemonBeast.style.listStyle = "none"
    
    image.setAttribute("class", "card--img");
    image.src = pokemon.sprites.other["official-artwork"].front_default
    

    for (let a = 0; a < pokemon.stats.length; a++) {
        const attribute = pokemon.stats[a].stat.name
        const attributeLevel = pokemon.stats[a].base_stat
        const attributeListItem = document.createElement("li")
        attributeListItem.innerText = `${attribute}: ${attributeLevel}`.toUpperCase()
        attributeList.append(attributeListItem)
    }



}