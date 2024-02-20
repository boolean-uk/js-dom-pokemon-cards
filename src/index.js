const cards = document.createElement("ul");
cards.className = "cards";
for (let i = 0; i < data.length; i++) {
  const card = renderCard(data[i]);
  cards.appendChild(card);
}
document.body.appendChild(cards);

function renderCard(data) {
  const container = document.createElement("li");
  container.classList.add("card");

  const title = document.createElement("h2");
  title.innerText = capitalizeFirstLetter(data["name"]);
  title.setAttribute("class", "card--title");

  const img = document.createElement("img");
  img.width = 256;
  img.className = "card--img";
  img.src = data["sprites"]["front_default"];
  img.alt = "pokemon-image";

  const stats = document.createElement("ul");
  stats.className = "card--text";
  const statsData = data["stats"];
  for (let i = 0; i < statsData.length; i++) {
    const stat = statsData[i];
    const name = stat["stat"]["name"];
    const baseStat = stat["base_stat"];
    const listStat = document.createElement("li");
    listStat.innerText = `${name.toUpperCase()}: ${baseStat}`;
    stats.appendChild(listStat);
  }

  container.appendChild(title);
  container.appendChild(img);
  container.appendChild(stats);
  return container;
}

function capitalizeFirstLetter(word) {
  return word[0].toUpperCase() + word.slice(1);
}
