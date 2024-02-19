const cards = document.querySelector('.cards')
const spriteSelect = document.querySelector('#sprite-select');

spriteSelect.addEventListener('change', () => {
    const selectedOption = JSON.parse(spriteSelect.options[spriteSelect.selectedIndex].value);
    console.log(selectedOption)
    cards.innerHTML = ''
    for(i = 0; i < data.length; i++) 
        drawCard(data[i], selectedOption);
});

spriteSelect.dispatchEvent(new Event('change'));


function drawCard(pokemon, selectedOption){
    // Card
    const card = document.createElement('div')        
    card.classList.add('card')
    
    // Name
    const name = document.createElement('h2')
    name.classList.add('card--title')
    name.innerText = capitalizeFirstLetter(pokemon.name)
    card.append(name)

    // Image
    const image = document.createElement('img');
    image.classList.add('card--img');
    const selectedSprite = selectedOption.value; // Get the selected sprite from the option value
    image.src = getSprite(pokemon, selectedOption); // Use the selected sprite
    card.append(image);

    // Stats
    const stats = document.createElement('ul')
    stats.classList.add('card--stats')

    pokemon.stats.forEach(statData => {
        let statText = document.createElement('li')
        statText.innerText = statData.stat.name.toUpperCase() + ": " + statData.base_stat
        stats.append(statText)
    });
    card.append(stats)

    // Games
    const games = document.createElement('ul')
    games.classList.add('card--games')

    pokemon.game_indices.forEach(gameData => {
        let gameText = document.createElement('li')
        gameText.innerText = gameData.version.name
        games.append(gameText)
    })
    card.append(games)

    // Expand/Collapse Games.
    card.addEventListener("click", function() {
        if (games.style.display === "block")
            games.style.display = "none";
        else
            games.style.display = "block";
    });

    cards.append(card)
}

// Function to get the selected sprite URL
function getSprite(pokemon, selectedOption) {
    const generation = selectedOption.generation;
    const game = selectedOption.game;
    const type = selectedOption.type;

    if (pokemon.sprites.versions?.[generation]?.[game]?.[type]) {
        return pokemon.sprites.versions[generation][game][type];
    } else if (pokemon.sprites.other?.[selectedOption.other]?.front_default) {
        return pokemon.sprites.other[selectedOption.other].front_default;
    }

    return null;
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
