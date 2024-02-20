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
let currentImageIndex = 0; // hacky way to color code cards since the json does not contain type info
data.forEach(pokemon => {
    const card = document.createElement('li');
    card.classList.add('card');
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
        <button class="toggle-appeared-in-button">Show more info</button>
        <div class="appeared-in">
            <h3>Appeared in:</h3>
            <ul">
                ${pokemon.game_indices.map(game => `<li><a href=${game.version.url}>Pokemon ${capitalize(game.version.name)}</a></li>`).join('')}
            </ul>
        </div>
    `;
    // Color code cards based on type
    if (currentImageIndex < 3){
        card.style.backgroundColor = "#a5ce96";
        card.style.borderColor = "#359e4a";
    }
    else if (currentImageIndex < 6){
        card.style.backgroundColor = "#f08069";
        card.style.borderColor = "#d15136";
    }
    else if (currentImageIndex < 9){
        card.style.backgroundColor = "#51beef";
        card.style.borderColor = "#05649a";
    }
    else if (currentImageIndex < 15){
        card.style.backgroundColor = "#bad247";
        card.style.borderColor = "#fed758";
    }
    else{
        card.style.backgroundColor = "darkgrey";
        card.style.borderColor = "#fed758";
    }

    currentImageIndex++;
    const appearedIn = card.querySelector('.appeared-in');
    appearedIn.style.display = 'none';
    cards.appendChild(card);

    // Toggle appeared-in list with button click
    const button = card.querySelector('.toggle-appeared-in-button');
    button.addEventListener('click', () => {
        appearedIn.style.display = appearedIn.style.display === 'none' ? 'block' : 'none';
        button.textContent = appearedIn.style.display === 'none' ? 'Show more info' : 'Hide info';
    });
    
    // Cycle through images with click
    const imageElement = card.querySelector('.card--img');
    imageElement.addEventListener('click', () => cycleImage(imageElement));

    // The card should have some horizontal parralax effect when hovered
    // It should take into account the position of the mouse relative to the center of the card.
    // The movement should be signifant but never over 45 degrees.
    // It should only move in the x axis.
    card.addEventListener('mousemove', (e) => {
        const cardBoundingRect = card.getBoundingClientRect();
        const xAxis = (cardBoundingRect.width / 2 - (e.clientX - cardBoundingRect.left)) / 20;
        const yAxis = (cardBoundingRect.height / 2 - (e.clientY - cardBoundingRect.top)) / 20;
        card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });

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
    return keys.reduce((o, k) => o[k], obj);
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}