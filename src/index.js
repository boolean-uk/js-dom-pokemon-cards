console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
console.log(data[0]);

// create the card HTML elements
// append/stitch them together
// add the li to the ul

const pokemonObj = data[0];
const pokemonUL = document.querySelector(".cards");

const pokemonLI = document.createElement("li");
pokemonLI.setAttribute("class", "card");
pokemonUL.appendChild(pokemonLI);

const title = document.createElement("h2");
title.setAttribute("class", "card--title");
title.innerText = pokemonObj.name;
pokemonLI.appendChild(title);

/* const image = document.createElement("img");
image

const liItems = document.createElement("li");

pokemonLI.setAttribute("class", "card");

image.setAttribute("class", "card--img");
liItems.setAttribute("class", "card--text"); */
