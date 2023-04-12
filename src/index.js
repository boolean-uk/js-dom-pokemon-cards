
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

// Create a constant for each element we have to insert e.g. h2, img, ul
// for loop for number of cards i.e. length of data array
// append elements in order

const pokemonList = document.querySelector(".cards")


for (let i = 0; i < data.length; i++) {

    const currentObject = data[i]

// Card Body
    const pokemonCard = document.createElement("li");
    pokemonCard.style.listStyleType = "none"
    pokemonCard.setAttribute('class', 'card');
    pokemonList.append(pokemonCard);

// Card Title
    const pokemonTitle = document.createElement('h2');
    pokemonTitle.setAttribute('class', 'card--title');
    pokemonTitle.innerText = currentObject.name.charAt(0).toUpperCase() + currentObject.name.slice(1);
    pokemonCard.append(pokemonTitle);

// Card Image
    const pokemonImage = document.createElement('img')
    pokemonImage.setAttribute('width', '256');
    pokemonImage.setAttribute('class', 'card--img');
    pokemonImage.setAttribute('src', currentObject.sprites.other["official-artwork"].front_default);
    function toggleImage() {
        if (pokemonImage.getAttribute('src') === currentObject.sprites.other["official-artwork"].front_default) {
          pokemonImage.setAttribute('src', currentObject.sprites.other.dream_world.front_default);
        } else {
          pokemonImage.setAttribute('src', currentObject.sprites.other["official-artwork"].front_default);
        }
      }      
      pokemonImage.addEventListener('click', toggleImage);
    pokemonCard.append(pokemonImage);
    

// Card Stats
    const pokemonCardTextList = document.createElement("ul");
    pokemonCardTextList.setAttribute('class', 'card--text');
    pokemonCard.append(pokemonCardTextList);
    pokemonCardTextList.style.listStyleType = "none"
        for (let j = 0; j < currentObject.stats.length; j++) {
            const statName = currentObject.stats[j].stat.name
            const statNumber = currentObject.stats[j].base_stat
            const pokemonStats = document.createElement("li");
            pokemonStats.innerText = `${statName}: ${statNumber}`.toUpperCase()
            pokemonCardTextList.append(pokemonStats)
        }

// Game Appearances

    const gameAppearances = document.createElement("details")
    const summary = document.createElement("summary")
    summary.innerText = "Appearances"
    gameAppearances.append(summary)
    pokemonCard.append(gameAppearances)
    const appearanceList = document.createElement("ul")
    appearanceList.style.listStyleType = "none"
    gameAppearances.append(appearanceList)
        for (let k = 0; k < currentObject.game_indices.length; k++) {
            const gameName = currentObject.game_indices[k].version.name
            const capitalName = gameName.charAt(0).toUpperCase() + gameName.slice(1)
            const gameVersion = document.createElement("li")
            gameVersion.innerText = `Name: ${capitalName}`
            appearanceList.append(gameVersion)
        }
}