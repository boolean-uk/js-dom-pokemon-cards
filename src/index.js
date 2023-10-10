const createCard = (pokemonEntry) => {
  const liParent = cardGallery;
  const liAttr = [["class", "card"]];
  const li = elementAdd("li", liParent, liAttr, null);

  const h2Attr = [["class", "card--title"]];
  const h2Text = pokemonEntry.name;
  elementAdd("h2", li, h2Attr, h2Text);

  const imgAttr = [
    ["width", "256"],
    ["class", "card--img"],
    ["src", pokemonEntry.sprites.other["official-artwork"].front_default],
  ];
  elementAdd("img", li, imgAttr, null);

  const ulAttr = [["class", "card--text"]];
  const ul = elementAdd("ul", li, ulAttr, null);

  stats = getStats(pokemonEntry);

  stats.forEach((stat) => {
    const key = Object.keys(stat)
    const text = `${key}: ${stat[key]}`
    elementAdd("li", ul, null, text);
  });
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

  Object.keys(stats).forEach((idx) => {
    const entry = stats[idx];
    const name = entry.stat.name;
    const base_stat = entry.base_stat;

    results.push({
      [name]: base_stat,
    });
  });

  return results;
};

function addAttr(attributePairs, element) {
  if (attributePairs) {
    attributePairs.forEach((pair) => {
      [key, value] = pair;
      element.setAttribute(key, value);
    });
  }
}

const pokemonEntry = data[0];

const cardGallery = select(".cards");

data.forEach((entry) => {
  createCard(entry);
})

