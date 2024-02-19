console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
console.log(data[0]);

const cardsUL = document.querySelector("ul"); //something;  adding ul seams to have worked

function RenderCards() {
  //clear list
  cardsUL.innerHTML = "";
  //loop thorugh data and get each pokemon object
  for (let i = 0; i < data.length; i++) {
    const pokemon = data[i];

    //make a card
    const cardLi = document.createElement("li");
    cardLi.setAttribute("class", "card");

    //create a new h2
    const cardH2 = document.createElement("h2");
    //setAttribute class on h2
    cardH2.setAttribute("class", "card--title");
    //set inner text to pokemon name
    cardH2.innerText = pokemon.name;
    //add h2 inside the list item
    cardLi.appendChild(cardH2);

    //create a new image
    const cardImg = document.createElement("img");
    //setAttribute width on image
    cardImg.setAttribute("width", 256);
    //setAttribute class on image
    cardImg.setAttribute("class", "card--img");
    //setAttribute source on immage
    cardImg.setAttribute("src", pokemon.sprites.front_default);
    //add image to list item
    cardLi.appendChild(cardImg);

    //create a new ul
    const cardUl = document.createElement("ul");

    //setAttribute class for ul
    cardUl.setAttribute("class", "card--text");
    //might want to add the list items here before i append
    cardLi.appendChild(cardUl);
    for (let i = 0; i < pokemon.stats.length; i++) {
      //create a listItem for stats
      const cardStatsLi = document.createElement("li");
      //add innerText to statsli
      cardStatsLi.innerText = `${pokemon.stats[i].stat.name.toUpperCase()}: ${
        pokemon.stats[i].base_stat
      }`;
      //add li to ul
      cardUl.appendChild(cardStatsLi);
    }

    cardsUL.appendChild(cardLi);
  }
}

function main() {
  console.log("runnign main()");
  RenderCards();
}

main();
