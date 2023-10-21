const cards = document.querySelector(".cards");

data.forEach((pokemon) => {
    const name = pokemon.name;
    const photo1 = pokemon.sprites.other["official-artwork"].front_default;
    const photo2 = pokemon.sprites.other.dream_world.front_default;
    const games = pokemon.game_indices.map((i) => i.version.name).join(", ");

    // variables
    const card = document.createElement("li");
    const cardList = document.createElement("ul");
    const headerTitle = document.createElement("h2");
    const image = document.createElement("img");
    const image2 = document.createElement("img");

    // card
    cards.append(card);
    card.setAttribute("class", "card");
    card.append(headerTitle);
    card.append(image);
    card.append(image2);
    card.append(cardList);

    // card header
    headerTitle.setAttribute("class", "card--title");
    headerTitle.innerText = name;
    headerTitle.style.textTransform = "capitalize";

    // card image
    image.setAttribute("class", "card--img");
    image.src = photo1;
    image.setAttribute("width", "256");
    image2.setAttribute("class", "card--img card--img-another");
    image2.src = photo2;
    image2.setAttribute("width", "256");

    // card list
    cardList.setAttribute("class", "card--text");

    pokemon.stats.forEach((i) => {
        const li = document.createElement("li");
        li.innerText = `${i.stat.name.toUpperCase()}: ${i.base_stat}`;
        cardList.append(li);
    });

    const gamesElement = document.createElement("li");
    gamesElement.innerText = `APPEARED IN: ${games}`;
    cardList.append(gamesElement);
});
