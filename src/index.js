// console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
console.log(data[0]);

const cards = document.querySelector(".cards");
const newCard = document.createElement("li");
newCard.classList.add("card");
const heading = document.createElement("h2");
heading.classList.add("card--title");
heading.innerText = "Bulbasaur";
newCard.append(heading);
const image = document.createElement('img')
image.classList.add('card--img')
image.setAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png')
image.setAttribute('width', 256)
newCard.append(image)
const text = document.createElement('ul')
text.classList.add('card--text')

// newCard.innerText = "Bulbasaur"

cards.append(newCard);
