console.log(data);

//You can start simple and just render a single
//pokemon card from the first element

function reRender() {
	document.body.innerHTML = "";
}

function createAllCards() {
	data.forEach((pokemon) => {
		createPokemonCard(pokemon);
	});
}

function createPokemonCard(pokemon) {
	const card = document.createElement("li");
	const title = document.createElement("h2");
	const image = document.createElement("img");
	const cardText = document.createElement("li");

	card.classList.add("card");
	title.classList.add("card--title");
	image.classList.add("card--img");
	image.width = "256";
	cardText.classList.add("card--text");

	title.textContent = capitalizeFirstLetter(pokemon.name);
	image.src = pokemon.sprites.other["official-artwork"].front_default;
	pokemon.stats.forEach((statData) => {
		const statType = statData.stat.name.toUpperCase();
		const statValue = statData.base_stat;
		const statLi = document.createElement("li");
		statLi.textContent = `${statType}: ${statValue}`;
		statLi.classList.add("stat--text");
		cardText.appendChild(statLi);
	});

	card.appendChild(title);
	card.appendChild(image);
	card.appendChild(cardText);

	document.querySelector(".cards").appendChild(card);
}

function capitalizeFirstLetter(string) {
	const firstLetter = string[0].toUpperCase();
	const rest = string.slice(1);
	return firstLetter + rest;
}

function main() {
	createAllCards();
}

main();
console.log(data[0]);
