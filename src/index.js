// Assigning the data from the global window object to the variable pokemonData
const pokemonData = window.data;

// Selecting the container element with the class 'cards'
const cardContainer = document.querySelector('.cards');

// Initialize imgCount variable to keep track of unique image IDs
let imgCount = 0;

// Array of image types to toggle through
const imgList = ["front_default", "front_shiny", "back_default", "back_shiny"];

let count = 0;

// Function to toggle the image on a card
function toggleChangeImage(pokemon, id) {
  count = (count + 1) % imgList.length; // Cycle through image types
  document.querySelector(`#${id}`).src = pokemon.sprites[imgList[count]];
}

// Function to create a card element for each Pokemon in the data
function createCard(pokemon) {
  // Creating a list item element for the card
  const card = document.createElement('li');
  card.classList.add('card'); // Adding 'card' class to the card element

  // Creating a title element for the card
  const title = document.createElement('h2');
  title.classList.add('card--title'); // Adding 'card--title' class to the title element
  title.textContent = pokemon.name.english; // Setting the text content of the title element
  card.appendChild(title); // Appending the title element to the card

  // Creating an image container element for the card
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('card--image-container'); // Adding 'card--image-container' class to the image container element

  // Creating the main image element for the card
  const mainImage = document.createElement('img');
  mainImage.classList.add('card--img'); // Adding 'card--img' class to the main image element
  mainImage.src = pokemon.sprites.other['official-artwork'].front_default; // Setting the source attribute of the main image
  mainImage.id = `img-${imgCount++}`; // Assigning a unique ID for the main image
  mainImage.style.width = '200px'; // Set the width of the main image
  mainImage.style.height = '200px'; // Set the height of the main image
  imageContainer.appendChild(mainImage); // Appending the main image to the image container

  // Adding event listener to toggle between main and alternate images on click
  mainImage.addEventListener('click', () => {
    toggleChangeImage(pokemon, mainImage.id);
  });

  // Add toggle functionality for alternate image if available
  if (pokemon.sprites.other.dream_world.front_default) {
    const alternateImage = document.createElement('img');
    alternateImage.classList.add('card--alt-img'); // Adding 'card--alt-img' class to the alternate image element
    alternateImage.src = pokemon.sprites.other.dream_world.front_default; // Setting the source attribute of the alternate image
    alternateImage.style.display = 'none'; // Initially hiding the alternate image
    alternateImage.id = `img-${imgCount++}`; // Assigning a unique ID for the alternate image
    alternateImage.style.width = '250px'; // Set the width of the alternate image
    alternateImage.style.height = '250px'; // Set the height of the alternate image
    imageContainer.appendChild(alternateImage); // Appending the alternate image to the image container

    // Adding event listener to toggle between main and alternate images on click
    alternateImage.addEventListener('click', () => {
      toggleChangeImage(pokemon, alternateImage.id);
    });
  }

  card.appendChild(imageContainer); // Appending the image container to the card

  // Creating a list element for displaying Pokemon stats
  const textList = document.createElement('ul');
  textList.classList.add('card--text'); // Adding 'card--text' class to the list element

  // Looping through the stats of the Pokemon and creating list items for each stat
  const stats = [
    { name: 'HP', value: pokemon.stats[0].base_stat },
    { name: 'ATTACK', value: pokemon.stats[1].base_stat },
    { name: 'DEFENSE', value: pokemon.stats[2].base_stat },
    { name: 'SPECIAL-ATTACK', value: pokemon.stats[3].base_stat },
    { name: 'SPECIAL-DEFENSE', value: pokemon.stats[4].base_stat },
    { name: 'SPEED', value: pokemon.stats[5].base_stat },
  ];

  for (const stat of stats) {
    const textItem = document.createElement('li');
    textItem.textContent = `${stat.name}: ${stat.value}`;
    textList.appendChild(textItem);
  }

  card.appendChild(textList); // Appending the stats list to the card

  return card; // Returning the constructed card element
}

// Function to execute the main functionality of rendering cards for each Pokemon
function main() {
  console.log("running main()");
  // Looping through the Pokemon data and creating a card for each one
  pokemonData.forEach(pokemon => {
    const card = createCard(pokemon);
    cardContainer.appendChild(card); // Appending each card to the card container
  });
}

main(); // Execute the main function
