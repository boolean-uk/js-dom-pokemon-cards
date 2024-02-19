console.log(data);

console.log(data[0]);

//selecting the HTML element with the class 'card'. This will give me a reference to
//the container where I'll be adding the pokemon card
const cardsContainer = document.querySelector(".cards");

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
  image.src = pokemon.sprites.other["official-artwork"].front_default;

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

  //appending title, image and list of stats to the <li> element (the card)
  //created earlier
  card.appendChild(title);
  card.appendChild(image);
  card.appendChild(textList);

  //appending each card to the cardsContainer, which is the <ul> element containing
  //all cards
  cardsContainer.appendChild(card);
});
