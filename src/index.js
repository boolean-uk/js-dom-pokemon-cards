
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);


// create the card HTML elements
// append/stitch them together
// add the li to the ul

for (let i = 0; i < data.length; i++) {
    const pokemonObj = data[i];
    const pokemonUL = document.querySelector(".cards");
  
    const pokemonLI = document.createElement("li");
    pokemonLI.setAttribute("class", "card");
    pokemonUL.appendChild(pokemonLI);
  
    const title = document.createElement("h2");
    title.setAttribute("class", "card--title");
    let nameToBeChanged = pokemonObj.name;
    nameToBeChanged = nameToBeChanged[0].toUpperCase() + nameToBeChanged.slice(1);
    title.innerText = nameToBeChanged;
    console.log(title.innerText);
  
    pokemonLI.appendChild(title);
  
    const image = document.createElement("img");
    image.width = 256;
    image.setAttribute("class", "card--img");
    image.src = pokemonObj.sprites.other["official-artwork"].front_default;
    pokemonLI.appendChild(image);
  
    const stats = document.createElement("ul");
    stats.setAttribute("class", "card--text");
    pokemonLI.appendChild(stats);
  
    for (let i = 0; i < pokemonObj.stats.length; i++) {
      const listItem = document.createElement("li");
      listItem.innerText = `${pokemonObj.stats[i].stat.name.toUpperCase()}: ${
        pokemonObj.stats[i].base_stat
      }`;
      listItem.style.lineHeight = 2;
      stats.appendChild(listItem);
    }
  }


