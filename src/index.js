const cards = document.querySelector('.cards');
const spritePaths = [
    ['other', 'official-artwork', 'front_default'],
    ['other', 'dream_world', 'front_female'],
    ['other', 'dream_world', 'front_default'],
    ['back_default'],
    ['back_female'],
    ['back_shiny'],
    ['back_shiny_female'],
    ['front_default'],
    ['front_female'],
    ['front_shiny'],
    ['front_shiny_female']
]
//Change image when clicking the <img> tag, cycling through the images in pokemon.sprites.other['official-artwork']
data.forEach(pokemon => {
    let currentImageIndex = 0;
    const card = document.createElement('li');
    card.classList.add('card');
    card.style.listStyle = 'none';
    const imageUrl = getNestedProperty(pokemon.sprites, spritePaths[0]);
    card.innerHTML = `
        <h2 class="card--title">${capitalize(pokemon.name)}</h2>
        <img
            width="256"
            class="card--img"
            src="${imageUrl}"
        />
        <ul class="card--text">
            <li>HP: ${pokemon.stats[0].base_stat}</li>
            <li>ATTACK: ${pokemon.stats[1].base_stat}</li>
            <li>DEFENSE: ${pokemon.stats[2].base_stat}</li>
            <li>SPECIAL-ATTACK: ${pokemon.stats[3].base_stat}</li>
            <li>SPECIAL-DEFENSE: ${pokemon.stats[4].base_stat}</li>
            <li>SPEED: ${pokemon.stats[5].base_stat}</li>
        </ul>
        <h3>Appeared in:</h3>
        <ul>
            ${pokemon.game_indices.map(game => `<li><a href=${game.version.url}>Pokemon ${capitalize(game.version.name)}</a></li>`).join('')}
        </ul>
    `;
    cards.appendChild(card);

    const imageElement = card.querySelector('.card--img');
    imageElement.addEventListener('click', () => cycleImage(imageElement));

    function cycleImage(img) {
        let nextImage;
        while(!nextImage) {
            currentImageIndex++;
            currentImageIndex = (currentImageIndex) % spritePaths.length; // Increment the index and cycle back to 0 if it exceeds the array length
            nextImage = getNestedProperty(pokemon.sprites, spritePaths[currentImageIndex]);
        }
        img.src = nextImage;
    }
});

// Iterate through the array of keys to get the nested property
function getNestedProperty(obj, keys) {
    keys.forEach(key => {
        obj = obj[key];
    });
    return obj;
}


function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}