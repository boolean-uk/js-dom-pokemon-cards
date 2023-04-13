console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
console.log(data[0]);

for (let i = 0; i < data.length; i++) {
  // selecting the cards ul
  const cards = document.querySelector(".cards");

  //   createing the li
  const cardElement = document.createElement("li");

  //   adding the class in li
  cardElement.classList.add("card");

  //   createing the h2 for the card and adding a class and adding the name dynamically
  const cardTittle = document.createElement("h2");
  cardTittle.classList.add("card--tittle");
  cardTittle.innerText = data[i].name;

  //   creating the image adding the class and setting the attributes width and src
  const cardImage = document.createElement("img");
  cardImage.classList.add("card--img");
  cardImage.setAttribute("width", "256px");
  cardImage.setAttribute("src", data[i].sprites.back_shiny);

  // append h2,img to cardElement
  cardElement.append(cardTittle);
  cardElement.append(cardImage);

  // append cardElement to the card itself
  cards.append(cardElement);

  //   creating the inner ul and append it to the li and adding a class
  const stats = document.createElement("ul");
  stats.classList.add("card--text");
  cardElement.append(stats);
  //   creating the stats
  for (let j = 0; j < data[i].stats.length; j++) {
    const statsLi = document.createElement("li");

    statsLi.innerText =
      data[i].stats[j].stat.name.toUpperCase() +
      ": " +
      data[i].stats[j].base_stat;
    stats.append(statsLi);
  }
}
