// console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
// console.log(data[0]);

function pokeMonMoves(data, statIndex) {
  const innerUl = document.createElement("ul");
  innerUl.setAttribute("class", "card--text");
  outerLi.append(innerUl);

  for (let i = 0; i < 6; i++) {
    const game_index = data[statIndex].stats[i].base_stat;
    const name = data[i].stats[i].stat.name;
    const nameUpper = name.toUpperCase();
    const innerLi = document.createElement("li");
    innerLi.innerText = `${nameUpper}: ${game_index}`;
    innerUl.append(innerLi);
  }
}

const ul = document.querySelector("ul");
let outerLi = document.createElement("li");

const pokeMon = (data) => {
  for (let index = 0; index < data.length; index++) {
    // Create an li element and set a class attribute for it. Append to ul element
    outerLi = document.createElement("li");
    outerLi.setAttribute("class", "card");
    ul.append(outerLi);

    // Create an h2 element that will take a text value for innerText. Append to li element
    const h2 = document.createElement("h2");
    const pokeName = data[index].name;
    const capitaliseName = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);

    h2.innerText = capitaliseName; // inner-text to be injected dynamically
    h2.setAttribute("class", "card--title");
    outerLi.append(h2);

    const img = document.createElement("img");
    img.setAttribute("width", "256");
    img.setAttribute("class", "card--img");
    const imgSrc = data[index].sprites.other["official-artwork"].front_default;
    img.setAttribute("src", imgSrc);
    outerLi.append(img);

    pokeMonMoves(data, index);
  }
};

pokeMon(data);
