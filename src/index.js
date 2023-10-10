console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
console.log(data[0]);

const cards = document.querySelector(".cards");



data.forEach((value) => {

const card = document.createElement("li");
card.setAttribute("class", "card");
cards.append(card);

const h2 = document.createElement("h2");
h2.setAttribute("class", "card--title");
h2.innerText = `${value.name}`;
card.append(h2);

const img = document.createElement("img");
img.setAttribute("class", "card--img");
img.setAttribute("width", "256");
img.setAttribute(
    "src",
    `${value.sprites.other['official-artwork'].front_default}`
);
card.append(img);

const ul = document.createElement("ul");
ul.setAttribute("class", "card--text");
card.append(ul)

const HP = document.createElement("li")
HP.innerText = `HP: ${value.stats[0].base_stat}`;
ul.append(HP)

const ATTACK = document.createElement("li")
ATTACK.innerText = `ATTACK: ${value.stats[1].base_stat}`
ul.append(ATTACK)

const DEFENSE = document.createElement("li")
DEFENSE.innerText = `DEFENSE: ${value.stats[2].base_stat}`
ul.append(DEFENSE)

const SPECIALATTACK = document.createElement("li")
SPECIALATTACK.innerText = `SPECIAL-ATTACK: ${value.stats[3].base_stat}`
ul.append(SPECIALATTACK)

const SPECIALDEFENSE = document.createElement("li")
SPECIALDEFENSE.innerText = `SPECIAL-DEFENSE: ${value.stats[4].base_stat}`
ul.append(SPECIALDEFENSE)

const SPEED = document.createElement("li")
SPEED.innerText = `SPEED: ${value.stats[5].base_stat}`
ul.append(SPEED)
})
