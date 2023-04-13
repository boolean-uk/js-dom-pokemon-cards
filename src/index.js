// console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
console.log(data[0].stats[0]);
console.log(data[0].stats[0].stat.name);

const cards = document.querySelector(".cards");
const newCard = document.createElement("li");
newCard.classList.add("card");
const heading = document.createElement("h2");
heading.classList.add("card--title");
heading.innerText = "Bulbasaur";
newCard.append(heading);
const image = document.createElement("img");
image.classList.add("card--img");
image.setAttribute(
  "src",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
);
image.setAttribute("width", 256);
newCard.append(image);
const text = document.createElement("ul");
text.classList.add("card--text");
for (let element = 0; element < data[0].stats.length; element++) {
  const newText = document.createElement("li");
  newText.innerText = `${data[0].stats[element].stat.name.toUpperCase()}: ${
    data[0].stats[element].base_stat
  }`;
  text.append(newText);
}
// data[0].stats.forEach((element) => {
//   const newText = document.createElement("li");
//   newText.innerText = `${data[0].stats[element].stat.name.toUpperCase()}: ${
//     data[0].stats[element].base_stat
//   }`;
//   text.append(newText);
// });

newCard.append(text);

cards.append(newCard);
