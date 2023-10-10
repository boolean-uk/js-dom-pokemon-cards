console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
console.log(data[0]);

const cards = document.querySelector(".cards");

// data.forEach((value) => {
//     const pokeName = document.createElement('h2')
//     const listItem = document.createElement('li')
//     listItem.append(cards)
//     listItem.setAttribute("card")
//     pokeName.innerHTML = `${value.name}`
//     pokeName.setAttribute("card--title")
// })

const listItem = document.createElement("li");
listItem.setAttribute("class", "card");
cards.append(listItem);
const card = document.querySelector(".card");

const h2 = document.createElement("h2");
h2.setAttribute("class", "card--title");
h2.innerText = `bulbasaur`;
card.append(h2);

const img = document.createElement("img");
img.setAttribute("class", "card--img");
img.setAttribute("width", "256");
img.setAttribute(
    "src",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
);
card.append(img);

const ul = document.createElement("ul");
ul.setAttribute("class", "card--text");
card.append(ul)

const HP = document.createElement("li")
HP.innerText = 'HP: 45'
ul.append(HP)

const ATTACK = document.createElement("li")
ATTACK.innerText = 'ATTACK: 49'
ul.append(ATTACK)

const DEFENSE = document.createElement("li")
DEFENSE.innerText = 'DEFENSE: 49'
ul.append(DEFENSE)

const SPECIALATTACK = document.createElement("li")
SPECIALATTACK.innerText = 'SPECIALATTACK: 65'
ul.append(SPECIALATTACK)

const SPECIALDEFENSE = document.createElement("li")
SPECIALDEFENSE.innerText = 'SPECIALDEFENSE: 65'
ul.append(SPECIALDEFENSE)

const SPEED = document.createElement("li")
SPEED.innerText = 'SPEED: 45'
ul.append(SPEED)

