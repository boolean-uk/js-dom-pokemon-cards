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
let currentImageIndex = 0;
let currentPage = 0;
const perPage = 9;
async function getPokemonData() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${currentPage * perPage}`);
    const data = await response.json();
    const fullData = await Promise.all(data.results.map(async pokemon => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return data;
    }));
    return fullData;
}

async function renderCard(pokemon) {
    const card = document.createElement('li');
    card.classList.add('card');
    const imageUrl = getNestedProperty(pokemon.sprites, spritePaths[0]);
    card.innerHTML = `
            <div class="card-glow-effect"></div>
            <div class="card-shiny-overlay"></div>
            <div class="card-shiny-texture"></div>
            <div class="card-base-shiny-texture"></div>
            <h2 class="card--title">${capitalize(pokemon.name)}</h2>
            <div class="image--container">
                <div class="card--img--background"> </div>
                <img
                    width="256"
                    class="card--img"
                    src="${imageUrl}"
                />
            </div>
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
    const overlay = card.querySelector('.card-shiny-overlay');
    switch (pokemon.types[0].type.name) {
        case 'bug':
            card.style.backgroundColor = "#bad247";
            card.style.borderColor = "#fed758";
            overlay.style.backgroundImage = "linear-gradient(-45deg, #b381a5, #6b7aac)"
            break;
        case 'fire':
            card.style.backgroundColor = "#f08069";
            card.style.borderColor = "#d15136";
            overlay.style.backgroundImage = "linear-gradient(-45deg, #ff5781, #5bbe9d)"
            break;
        case 'water':
            card.style.backgroundColor = "#51beef";
            card.style.borderColor = "#05649a";
            overlay.style.backgroundImage = "linear-gradient(-45deg, #ff5781, #5bbe9d)"
            break;
        case 'grass':
            card.style.backgroundColor = "#a5ce96";
            card.style.borderColor = "#359e4a";
            overlay.style.backgroundImage = "linear-gradient(-45deg, #ff5781, #5bbe9d)"
            break;
        case 'normal':
            card.style.backgroundColor = "darkgrey";
            card.style.borderColor = "#fed758";
            overlay.style.backgroundImage = "linear-gradient(-45deg, #ff5781, #5bbe9d)"
            break;
        case 'poison':
            card.style.backgroundColor = "#b155bd";
            card.style.borderColor = "#8e3e8f";
            overlay.style.backgroundImage = "linear-gradient(-45deg, #ff5781, #5bbe9d)"
            break;
        case 'electric':
            card.style.backgroundColor = "#fff261";
            card.style.borderColor = "#f2cb55";
            overlay.style.backgroundImage = "linear-gradient(-45deg, #ff5781, #5bbe9d)"
            break;
        case 'ground':
            card.style.backgroundColor = "#c9a438";
            card.style.borderColor = "#d3b55f";
            overlay.style.backgroundImage = "linear-gradient(-45deg, #ff5781, #5bbe9d)"
            break;
        case 'fairy':
            card.style.backgroundColor = "#f0a9c9";
            card.style.borderColor = "#f2cb55";
            overlay.style.backgroundImage = "linear-gradient(-45deg, #ff5781, #5bbe9d)"
            break;
        case 'fighting':
            card.style.backgroundColor = "#d3b55f";
            card.style.borderColor = "#f2cb55";
            overlay.style.backgroundImage = "linear-gradient(-45deg, #ff5781, #5bbe9d)"
            break;
        case 'psychic':
            card.style.backgroundColor = "#f0a9c9";
            card.style.borderColor = "#f2cb55";
            overlay.style.backgroundImage = "linear-gradient(-45deg, #ff5781, #5bbe9d)"
            break;
        case 'rock':
            card.style.backgroundColor = "#c9a438";
            card.style.borderColor = "#d3b55f";
            overlay.style.backgroundImage = "linear-gradient(-45deg, #ff5781, #5bbe9d)"
            break;
        case 'ghost':
            card.style.backgroundColor = "#6b7aac";
            card.style.borderColor = "#b381a5";
            overlay.style.backgroundImage = "linear-gradient(-45deg, #ff5781, #5bbe9d)"
            break;
        case 'ice':
            card.style.backgroundColor = "#51beef";
            card.style.borderColor = "#05649a";
            overlay.style.backgroundImage = "linear-gradient(-45deg, #ff5781, #5bbe9d)"
            break;
        case 'dragon':
            card.style.backgroundColor = "#6b7aac";
            card.style.borderColor = "#b381a5";
            overlay.style.backgroundImage = "linear-gradient(-45deg, #ff5781, #5bbe9d)"
            break;
        case 'dark':
            card.style.backgroundColor = "#6b7aac";
            card.style.borderColor = "#b381a5";
            overlay.style.backgroundImage = "linear-gradient(-45deg, #ff5781, #5bbe9d)"
            break;
        case 'steel':
            card.style.backgroundColor = "#d3b55f";
            card.style.borderColor = "#f2cb55";
            overlay.style.backgroundImage = "linear-gradient(-45deg, #ff5781, #5bbe9d)"
            break;
        case 'flying':
            card.style.backgroundColor = "#b155bd";
            card.style.borderColor = "#8e3e8f";
            overlay.style.backgroundImage = "linear-gradient(-45deg, #ff5781, #5bbe9d)"
            break;
        default:
            card.style.backgroundColor = "darkgrey";
            card.style.borderColor = "#fed758";
            overlay.style.backgroundImage = "linear-gradient(-45deg, #ff5781, #5bbe9d)"
            break;
    }

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


    // Shiny texture
    const cardShinyTexture = card.querySelector('.card-shiny-texture');

    // Parralax effect on hover
    card.addEventListener('mousemove', (e) => {
        const cardBoundingRect = card.getBoundingClientRect();
        const relativeX = (e.clientX - cardBoundingRect.left)
        const relativeY = (e.clientY - cardBoundingRect.top)
        card.style.setProperty('--x', relativeX + 'px');
        card.style.setProperty('--y', relativeY + 'px');

        const { clientX, clientY } = e;
        const { left, top, width, height } = card.getBoundingClientRect();

        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const deltaX = clientX - centerX;
        const deltaY = centerY - clientY;

        cardShinyTexture.style.setProperty('--mask-x', `${deltaX}px`);
        cardShinyTexture.style.setProperty('--mask-y', `${-deltaY}px`);
        cardShinyTexture.style.opacity = 1;

        const rotationX = deltaY / height * 20;
        const rotationY = deltaX / width * 20;

        card.style.transform = `perspective(1000px) rotateX(${-rotationX}deg) rotateY(${-rotationY}deg)`;
        imageElement.style.transform = `scale(1.1) perspective(700px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

        const normalizedDeltaX = deltaX / (width / 2);
        const normalizedDeltaY = deltaY / (height / 2);

        const clampedDeltaX = normalizedDeltaX * 30;
        const clampedDeltaY = normalizedDeltaY * 30;
        imageElement.style.filter = `brightness(1.1) contrast(1.1) drop-shadow(${-clampedDeltaX}px ${clampedDeltaY}px 15px rgba(2, 2, 0, 0.3))`;

    });
    // Reset transform on mouseleave
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0deg) rotateY(0deg)';
        imageElement.style.transform = 'scale(1) perspective(500px) rotateX(0deg) rotateY(0deg)'
        imageElement.style.filter = `brightness(1) contrast(1) drop-shadow(0px 20px 10px rgba(2, 2, 0, 0.2))`
        cardShinyTexture.style.opacity = 0;
    });

    // Cycle through images when clicking the image
    function cycleImage(img) {
        let nextImage;
        while (!nextImage) {
            currentImageIndex++;
            currentImageIndex = (currentImageIndex) % spritePaths.length; // Increment the index and cycle back to 0 if it exceeds the array length
            nextImage = getNestedProperty(pokemon.sprites, spritePaths[currentImageIndex]);
        }
        img.src = nextImage;
    }
}

// Iterate through the array of keys to get the nested property
function getNestedProperty(obj, keys) {
    return keys.reduce((o, k) => o[k], obj);
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function renderPagination() {
    const nextPage = document.querySelector('.next-page');
    const prevPage = document.querySelector('.previous-page');
    const pageNumber = document.querySelector('.page-number');
    pageNumber.textContent = currentPage + 1;
    nextPage.addEventListener('click', () => {
        currentPage++;
        pageNumber.textContent = currentPage + 1;
        getAndDisplayPokemon();
    });
    prevPage.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            pageNumber.textContent = currentPage + 1;
            getAndDisplayPokemon();
        }
    });
}

async function getAndDisplayPokemon() {
    loadingData();
    const data = await getPokemonData()
    cards.innerHTML = '';
    data.forEach(pokemon => renderCard(pokemon));
}

function loadingData() {
    cards.innerHTML = '';
    const loadingDiv = document.createElement('div');
    const loadingIcon = document.createElement('h1');
    loadingIcon.innerHTML = `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`;
    loadingDiv.appendChild(loadingIcon);
    const loadingText = document.createElement('h1');
    loadingText.textContent = 'Loading...';
    loadingDiv.appendChild(loadingText);
    loadingDiv.classList.add('loading-div');
    cards.appendChild(loadingDiv);
}

function main() {
    getAndDisplayPokemon();
    renderPagination();
}

main();