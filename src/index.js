const createCard = (pokemonEntry) => {
  const liParent = select(".cards");
  const liAttr = [["class", "card"]];
  const li = elementAdd("li", liParent, liAttr, null);

  const h2Attr = [["class", "card--title"]];
  const h2Text = pokemonEntry.name;
  elementAdd("h2", li, h2Attr, h2Text);

  const pokemonIndex = pokemonEntry.id - 1;
  const imgAttr = [
    ["width", "256"],
    ["class", "card--img"],
    ["src", pokemonEntry.sprites.other["official-artwork"].front_default],
    ["id", `cover-${pokemonIndex}`],
    ["onclick", `changeCoverImg(${pokemonIndex})`],
  ];
  elementAdd("img", li, imgAttr, null);

  const ulAttr = [["class", "card--text"]];
  const ul = elementAdd("ul", li, ulAttr, null);

  stats = getStats(pokemonEntry);

  placeStats(ul);

  const games = getGames(pokemonEntry);

  placeGameText(games, li);
};

const elementAdd = (tagName, tagParent, attributePairs, text) => {
  const element = document.createElement(tagName);

  addAttr(attributePairs, element);

  element.innerText = text;

  tagParent.append(element);

  return element;
};

const select = (selector) => {
  return document.querySelector(selector);
};

const getStats = (pokemonEntry) => {
  const stats = pokemonEntry.stats;

  let results = [];

  stats.forEach((entry, idx) => {
    const name = entry.stat.name;
    const base_stat = entry.base_stat;

    results.push({
      [name]: base_stat,
    });
  });

  return results;
};

const getGames = (pokemonEntry) => {
  const games = pokemonEntry.game_indices;
  const gameArray = [[], [], [], []];
  Object.keys(games).forEach((idx) => {
    gameArray[idx % 4].push(games[idx]["version"]["name"]);
  });
  return gameArray;
};

function placeStats(tagParent) {
  stats.forEach((stat) => {
    const key = Object.keys(stat);
    const text = `${key}: ${stat[key]}`;
    elementAdd("li", tagParent, null, text);
  });
}

function placeGameText(gameArray, tagParent) {
  gameArray.forEach((array, idx) => {
    const join = array.join(" ");
    const joinAttr = [["class", `border-text border-${idx}`]];
    elementAdd("span", tagParent, joinAttr, join);
  });
}

function addAttr(attributePairs, element) {
  if (attributePairs) {
    attributePairs.forEach((pair) => {
      [key, value] = pair;
      element.setAttribute(key, value);
    });
  }
}

const changeCoverImg = (coverIndex) => {
  const entry = data[coverIndex];
  const sprites = entry.sprites.other;

  const dream = sprites.dream_world.front_default;
  const official = sprites["official-artwork"].front_default;

  const cover = select(`#cover-${coverIndex}`);

  let url

  switch (cover.src) {
    case dream:
      url = official;
      break;
    default:
      url = dream;
      break;
  }
  addAttr([["src", url]], cover);
};

data.forEach((entry) => {
  createCard(entry);
});
