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

const fallBackImage = 'https://www.invoicera.com/wp-content/uploads/2023/11/default-image.jpg';

const defaultStyles = {
    backgroundColor: "169, 169, 169",
    overlayBackground: "linear-gradient(-45deg, #ff5781, #5bbe9d)"
};

const typeStyles = {
    bug: { backgroundColor: "168,184,32", overlayBackground: "linear-gradient(-45deg, #b381a5, #6b7aac)" },
    fire: { backgroundColor: "240,128,48", overlayBackground: "linear-gradient(-45deg, #ff5781, #5bbe9d)" },
    water: { backgroundColor: "104,144,240", overlayBackground: "linear-gradient(-45deg, #ff5781, #5bbe9d)" },
    grass: { backgroundColor: "120,200,80", overlayBackground: "linear-gradient(-45deg, #ff5781, #5bbe9d)" },
    normal: { backgroundColor: "168,168,120", overlayBackground: "linear-gradient(-45deg, #ff5781, #5bbe9d)" },
    poison: { backgroundColor: "160,64,160", overlayBackground: "linear-gradient(-45deg, #ff5781, #5bbe9d)" },
    electric: { backgroundColor: "248,208,48", overlayBackground: "linear-gradient(-45deg, #ff5781, #5bbe9d)" },
    ground: { backgroundColor: "224,192,104", overlayBackground: "linear-gradient(-45deg, #ff5781, #5bbe9d)" },
    fairy: { backgroundColor: "238,153,172", overlayBackground: "linear-gradient(-45deg, #ff5781, #5bbe9d)" },
    fighting: { backgroundColor: "192,48,40", overlayBackground: "linear-gradient(-45deg, #ff5781, #5bbe9d)" },
    psychic: { backgroundColor: "248,88,136", overlayBackground: "linear-gradient(-45deg, #ff5781, #5bbe9d)" },
    rock: { backgroundColor: "184,160,56", overlayBackground: "linear-gradient(-45deg, #ff5781, #5bbe9d)" },
    ghost: { backgroundColor: "112,88,152", overlayBackground: "linear-gradient(-45deg, #ff5781, #5bbe9d)" },
    ice: { backgroundColor: "152,216,216", overlayBackground: "linear-gradient(-45deg, #ff5781, #5bbe9d)" },
    dragon: { backgroundColor: "112,56,248", overlayBackground: "linear-gradient(-45deg, #ff5781, #5bbe9d)" },
    dark: { backgroundColor: "112,88,72", overlayBackground: "linear-gradient(-45deg, #ff5781, #5bbe9d)" },
    steel: { backgroundColor: "184,184,208", overlayBackground: "linear-gradient(-45deg, #ff5781, #5bbe9d)" },
    flying: { backgroundColor: "168,144,240", overlayBackground: "linear-gradient(-45deg, #ff5781, #5bbe9d)" },
    stellar: { backgroundColor: "124,199,178", overlayBackground: "linear-gradient(-45deg, #ff5781, #5bbe9d)" },
};


let currentImageIndex = 0;
let currentPage = 0;
const perPage = 9;
let totalPages = 1;
let shouldHaveGradient = true;
let searchTerm = '';
let fullDataCache = [];
let pdata = [];
let favouritePokemon = [];
let filterByFavourites = false;

async function getFullPokemonData() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1302`);
    const data = await response.json();
    return data.results;

}

async function getPokemonData() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${perPage}&offset=${currentPage * perPage}`);
    const data = await response.json();
    totalPages = Math.ceil(data.count / perPage);
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
            ${pokemon.cries ? `
            <audio class="pokemon-cry">
                <source src="${pokemon.cries.latest}" type="audio/ogg">
            </audio>`
            : ''}
            <div class="card-glow-effect"></div>
            <div class="card-shiny-overlay"></div>
            <div class="card-shiny-texture"></div>
            <div class="card-base-shiny-texture"></div>
            <h2 class="card--title">${capitalize(pokemon.name)}</h2>
            <button class="favourite-button">${favouritePokemon.some(p => p.name === pokemon.name) ? "★" : "☆"}</button>
            <div class="image--container">
                <div class="card--img--background"> </div>
                <img
                    width="256"
                    class="card--img"
                    src="${imageUrl ?? fallBackImage}"
                />
            </div>
            <ul class="card--text">
                <li><b class="hp">HP</b> ${pokemon.stats[0].base_stat}</li>
                <li><b class="atk">ATTACK</b> ${pokemon.stats[1].base_stat}</li>
                <li><b class="def">DEFENSE</b> ${pokemon.stats[2].base_stat}</li>
                <li><b class="spa">SPECIAL-ATTACK</b> ${pokemon.stats[3].base_stat}</li>
                <li><b class="spd">SPECIAL-DEFENSE</b> ${pokemon.stats[4].base_stat}</li>
                <li><b class="spe">SPEED</b> ${pokemon.stats[5].base_stat}</li>
            </ul>
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Speaker_Icon.svg" class="play-audio"></img>
            <button class="toggle-appeared-in-button">Show more info</button>
            <div class="appeared-in">
                <h3>Appeared in</h3>
                <ul">
                    ${pokemon.game_indices.map(game => `<li><a href=${game.version.url}>Pokemon ${capitalize(game.version.name)}</a></li>`).join('')}
                </ul>
            </div>
        `;
    // Color code cards based on type
    const overlay = card.querySelector('.card-shiny-overlay');
    const type = pokemon.types[0]?.type.name || 'default';
    const { backgroundColor, overlayBackground } = typeStyles[type] || defaultStyles;
    card.style.backgroundColor = backgroundColor;
    card.style.setProperty('--main-color', backgroundColor)
    overlay.style.backgroundImage = shouldHaveGradient ? overlayBackground : 'none';

    const appearedIn = card.querySelector('.appeared-in');
    appearedIn.style.display = 'none';
    cards.appendChild(card);

    // Favourite button
    const favouriteButton = card.querySelector('.favourite-button');
    favouriteButton.addEventListener('click', () => {
        if (favouritePokemon.some(p => p.name === pokemon.name)) {
            favouritePokemon = favouritePokemon.filter(p => p.name !== pokemon.name);
            favouriteButton.textContent = "☆";
        }
        else {
            favouritePokemon.push(pokemon);
            favouriteButton.textContent = "★";
        }
    });

    // Audio
    const audio = card.querySelector('.pokemon-cry');
    audio.volume = 0.2;
    const playAudioButton = card.querySelector('.play-audio');
    playAudioButton.addEventListener('click', () => {
        audio.play();
    });

    // Toggle appeared-in list with button click
    const button = card.querySelector('.toggle-appeared-in-button');
    button.addEventListener('click', () => {
        appearedIn.style.display = appearedIn.style.display === 'none' ? 'block' : 'none';
        button.textContent = appearedIn.style.display === 'none' ? 'Show more info' : 'Hide info';
        card.style.overflowY = appearedIn.style.display === 'none' ? 'hidden' : 'scroll';
        if (appearedIn.style.display === 'block') {
            card.scrollTop = card.scrollHeight;
        }
        else {
            card.scrollTop = 0;
        }

    });

    // Cycle through images with click
    const imageElement = card.querySelector('.card--img');
    imageElement.addEventListener('click', () => {
        cycleImage(imageElement)
    });


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
        let count = 0;
        let nextImage;
        while (!nextImage) {
            count++
            currentImageIndex++;
            currentImageIndex = (currentImageIndex) % spritePaths.length; // Increment the index and cycle back to 0 if it exceeds the array length
            nextImage = getNestedProperty(pokemon.sprites, spritePaths[currentImageIndex]);
            if (count > spritePaths.length) {
                nextImage = fallBackImage;
                break;
            }
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

function renderUI() {
    const nextPage = document.querySelector('.next-page');
    const lastPage = document.querySelector('.last-page');
    const minusten = document.querySelector('.minus-ten');
    const plusten = document.querySelector('.plus-ten');
    const prevPage = document.querySelector('.previous-page');
    const firstPage = document.querySelector('.first-page');
    const pageNumber = document.querySelector('.page-number');
    const title = document.querySelector('.title-clickable');
    const favourites = document.querySelector('.favourites');

    title.addEventListener('click', () => {
        currentPage = 0;
        searchTerm = '';
        pageNumber.textContent = currentPage + 1;
        getAndDisplayPokemon();
    });

    pageNumber.textContent = currentPage + 1;
    nextPage.addEventListener('click', () => {
        if (currentPage < totalPages - 1) {
            currentPage++;
            pageNumber.textContent = currentPage + 1;
            getAndDisplayPokemon();
        }
    });
    lastPage.addEventListener('click', () => {
        currentPage = totalPages - 1;
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
    firstPage.addEventListener('click', () => {
        currentPage = 0;
        pageNumber.textContent = currentPage + 1;
        getAndDisplayPokemon();
    });


    minusten.addEventListener('click', () => {
        if (currentPage > 9) {
            currentPage -= 10;
            pageNumber.textContent = currentPage + 1;
            getAndDisplayPokemon();
        }
    });

    plusten.addEventListener('click', () => {
        if (currentPage < totalPages - 10) {
            currentPage += 10;
            pageNumber.textContent = currentPage + 1;
            getAndDisplayPokemon();
        }
    });

    const toggleGradientButton = document.querySelector('.toggle-gradient');
    toggleGradientButton.addEventListener('click', () => {
        shouldHaveGradient = !shouldHaveGradient;
        const gradient = shouldHaveGradient ? 'linear-gradient(-45deg, rgb(48, 92, 134), rgb(112, 83, 150))' : 'none';
        toggleGradientButton.textContent = shouldHaveGradient ? 'Gradient ON' : 'Gradient OFF';
        toggleGradientButton.style.backgroundImage = gradient;
        displayPokemon(pdata);
    });

    const searchBar = document.querySelector('.searchbar');
    searchBar.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            const searchValue = searchBar.value;
            searchHandler(searchValue);
        }
    });

    const searchButton = document.querySelector('.search-button');
    searchButton.addEventListener('click', () => {
        const searchValue = searchBar.value;
        searchHandler(searchValue);
    });

    favourites.addEventListener('click', () => {
        if (filterByFavourites) {
            filterByFavourites = false;
            currentPage = 0;
            getAndDisplayPokemon();
        }
        else {
            filterByFavourites = true;
            currentPage = 0;
            pdata = favouritePokemon;
            displayPokemon(pdata);
            hidePagination();
        }
    });

}

function searchHandler(searchValue) {
    if (searchValue && searchValue.length > 2 && searchValue !== searchTerm) {
        searchTerm = searchValue;
        currentPage = 0;
        filterPokemon();
    }
    else {
        searchTerm = '';
        currentPage = 0;
        getAndDisplayPokemon();
    }
}

function updatePaginationButtons() {
    const minusten = document.querySelector('.minus-ten');
    const plusten = document.querySelector('.plus-ten');
    if (currentPage < 10) {
        minusten.style.display = 'none';
    }
    else {
        minusten.style.display = 'block';
    }

    if (currentPage > totalPages - 11) {
        plusten.style.display = 'none';
    }
    else {
        plusten.style.display = 'block';
    }
}

async function getAndDisplayPokemon() {
    loadingData();
    pdata = await getPokemonData()
    displayPokemon(pdata);
    showPagination();
    showAfterLoading();
}

async function filterPokemon() {
    const filteredData = fullDataCache.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()));
    pdata = await Promise.all(filteredData.map(async pokemon => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return data;
    }));
    displayPokemon(pdata);
}

function displayPokemon() {
    cards.innerHTML = '';
    pdata.forEach(pokemon => renderCard(pokemon));
    if (!searchTerm) {
        showPagination();
        updatePaginationButtons();
    }
    else {
        hidePagination();
    }
}

function hidePagination() {
    const pagination = document.querySelector('.pagination');
    pagination.style.display = 'none';
}
function showPagination() {
    const pagination = document.querySelector('.pagination');
    const pageNum = document.querySelector('.page-number');
    pagination.style.display = 'flex';
    pageNum.textContent = currentPage + 1;
}

function hideWhileLoading() {
    const toggleGradientButton = document.querySelector('.toggle-gradient');
    toggleGradientButton.style.display = 'none';
    const searchBar = document.querySelector('.searchbar');
    const searchButton = document.querySelector('.search-button');
    searchBar.style.display = 'none';
    searchButton.style.display = 'none';
}
function showAfterLoading() {
    const toggleGradientButton = document.querySelector('.toggle-gradient');
    toggleGradientButton.style.display = 'block';
    const searchBar = document.querySelector('.searchbar');
    const searchButton = document.querySelector('.search-button');
    searchBar.style.display = 'block';
    searchButton.style.display = 'block';
}

function loadingData() {
    cards.innerHTML = '';
    hidePagination();
    hideWhileLoading();
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

async function main() {
    fullDataCache = await getFullPokemonData();
    getAndDisplayPokemon();
    renderUI();
}

main();