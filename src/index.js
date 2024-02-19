console.log(data);

console.log(data[0]);

//selecting the HTML element with the class 'card'. This will give me a reference to
//the container where I'll be adding the pokemon card
const cardsContainer = document.querySelector(".cards");

// First, need to store the different image URLs for each card.
// using the front_default, front_shiny, and other.official-artwork.front_default URLs for toggling.
//adding an array of image URLs to each pokemon object in the data array
data.forEach((pokemon) => {
  pokemon.imageUrls = [
    pokemon.sprites.front_default,
    pokemon.sprites.front_shiny,
    pokemon.sprites.other["official-artwork"].front_default,
  ];
  // The initial image index is 0
  pokemon.currentImageIndex = 0;
});
//need to update the src attribute of the <img>

//looping through each element of the data array, calling the elements 'pokemon'
data.forEach((pokemon) => {
  //for each pokemon in the data array I am creating a new <li> element, a list item,
  //using document.create()
  const card = document.createElement("li");
  //Then I am adding the class 'card' to this list using classList.add()
  //This class is helping to style the card later using css
  card.classList.add("card");

  //Inside each list item I am creating a <h2> element (heading) to display the
  //name of the Pokemon
  const title = document.createElement("h2");
  //adding the class 'card--title' to this heading for styling purposes
  title.classList.add("card--title");
  //Then I am setting its text content to the name of the current Pokemon
  title.textContent = pokemon.name;

  //creating an <img> element to display the Pokemon image
  const image = document.createElement("img");
  //again adding the 'card--img' class for styling puposes
  image.classList.add("card--img");
  //setting its width to 256pixels
  image.width = 256;
  //The src attribute of the image is set to the URL of the Pokemon official artwork
  //image which is accesed throught the 'sprite' object in the data array for each pokemon
  //image.src = pokemon.sprites.other["official-artwork"].front_default; //only one image for each pokemon
  image.src = pokemon.imageUrls[pokemon.currentImageIndex]; //updated to have multiple URLs for each pokemon

  //added eventlistener to listen for clicks in order to toggle
  image.addEventListener("click", () => {
    // Increment the current image index when it is clicked, looping back to 0 if it exceeds the array length
    // ensures that the index stays within the bounds of the imageUrls array length by using the modulo
    //operator %. This means that if currentImageIndex reaches the end of the array, it wraps around to the beginning (index 0).
    pokemon.currentImageIndex =
      (pokemon.currentImageIndex + 1) % pokemon.imageUrls.length;

    //After updating the currentImageIndex, this line updates the src attribute of the <img> element with the new image URL.
    //It retrieves the URL from the imageUrls array using the updated currentImageIndex.
    image.src = pokemon.imageUrls[pokemon.currentImageIndex];
  });

  //crearing an <ul> element (unordered list) to display the Pokemon stats.
  const textList = document.createElement("ul");
  //adding the 'card--text' class for styling
  textList.classList.add("card--text");

  //looping through the stats array of the current pokemon.
  pokemon.stats.forEach((stat) => {
    //for each stat I am creating a new <li> element.
    const listItem = document.createElement("li");
    //setting the text content of each list item to display the stat name in
    //uppercase and its base value (look at data array)
    listItem.textContent = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`;
    //Then appending each list item to the <ul> element created earlier
    textList.appendChild(listItem);
  });

  const textListGames = document.createElement("ul");
  //adding the 'card--text' class for styling
  textListGames.classList.add("card--textGames");

  //looping through the stats array of the current pokemon.
  pokemon.game_indices.forEach((index) => {
    //for each stat I am creating a new <li> element.
    const listItemGames = document.createElement("li");
    //setting the text content of each list item to display the stat name in
    //uppercase and its base value (look at data array)
    listItemGames.textContent = `${index.version.name.toUpperCase()}: ${
      index.game_index
    }`;
    //Then appending each list item to the <ul> element created earlier
    textListGames.appendChild(listItemGames);
  });

  //appending title, image and list of stats to the <li> element (the card)
  //created earlier
  card.appendChild(title);
  card.appendChild(image);
  card.appendChild(textList);
  card.appendChild(textListGames);

  //appending each card to the cardsContainer, which is the <ul> element containing
  //all cards
  cardsContainer.appendChild(card);
});
