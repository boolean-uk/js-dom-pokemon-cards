console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
const generations = [
  "generation-i",
  "generation-ii",
  "generation-iii",
  "generation-iv",
  "generation-v",
  "generation-vi",
  "generation-vii",
  "generation-viii",
];

console.log(data[0]);
cardsList = document.querySelector(".cards");

for (let i = 0; i < data.length; i++) {
  cardsList.appendChild(createCard(data[i]));
}

function createCard(data) {
  let index = 0;

  const card = document.createElement("li");
  card.classList.add("card");

  const title = document.createElement("h2");
  title.classList.add("card--title");
  title.textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);

  const image = document.createElement("img");
  image.classList.add("card--img");
  let versions = data.sprites.versions;
  let gen = generations[index];
  image.src = data.sprites.other["official-artwork"].front_default;
  image.width = "256";
  image.height = "256";
  image.onclick = (e) => {
    index++;
    gen = generations[index % generations.length];
    let game = Object.values(versions[gen]);
    image.src = game[0].front_default;
    console.log(index);
  };

  const stats = document.createElement("ul");
  stats.classList.add("card--text");
  stats.style.listStyleType = "none";

  for (let i = 0; i < data.stats.length; i++) {
    const stat = data.stats[i];
    const listItem = document.createElement("li");
    listItem.textContent = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`;
    stats.appendChild(listItem);
  }
  const apperance = document.createElement("ul");
  apperance.classList.add("card--text");
  const para = document.createElement("p");
  para.textContent = "Apperances:";
  for (let i = 0; i < data.game_indices.length; i++) {
    const game = document.createElement("li");
    game.textContent = data.game_indices[i].version.name.toUpperCase();
    apperance.appendChild(game);
  }
  apperance.onclick = (e) => {
    if (apperance.style.display === "none") {
      apperance.style.display = "block";
    } else {
      apperance.style.display = "none";
    }
    para.onclick = (e) => {
      if (apperance.style.display === "none") {
        apperance.style.display = "block";
      } else {
        apperance.style.display = "none";
      }
    };
  };
  card.appendChild(title);
  card.appendChild(image);
  card.appendChild(stats);
  card.appendChild(para);
  card.appendChild(apperance);
  return card;
}
