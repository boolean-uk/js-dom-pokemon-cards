
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
    pokemonCard.setAttribute('class', 'card');
    pokemonList.append(pokemonCard);

// Card Title
    const pokemonTitle = document.createElement('h2');
    pokemonTitle.setAttribute('class', 'card--title');
    pokemonTitle.innerText = currentObject.name.charAt(0).toUpperCase() + currentObject.name.slice(1);
    pokemonCard.append(pokemonTitle);






}