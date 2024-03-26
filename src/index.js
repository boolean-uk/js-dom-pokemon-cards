// console.log(data)

//You can start simple and just render a single
//pokemon card from the first element
// console.log(data[1])

// console.log(data[0].stats[0].stat.name)

//   <li class="card">
//     <h2 class="card--title">Bulbasaur</h2>
//     <img
//       width="256"
//       class="card--img"
//       src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
//     />
//     <ul class="card--text">
//       <li>HP: 45</li>
//       <li>ATTACK: 49</li>
//       <li>DEFENSE: 49</li>
//       <li>SPECIAL-ATTACK: 65</li>
//       <li>SPECIAL-DEFENSE: 65</li>
//       <li>SPEED: 45</li>
//     </ul>
//   </li>
// </body>
// </html>

const pokemon = data

const inGames = (pokemon) => {
	const games = document.createElement("ul")
	games.classList.add = "card--text"

	const inGamesArr = pokemon.game_indices
	for (let i = 0; i < inGamesArr.length; i++) {
		const game = document.createElement("li")
		game.innerHTML = inGamesArr[i].version.name
		games.append(game)
	}

	return games
}

const pokemonCards = (pokemon) => {
	for (let i = 0; i < pokemon.length; i++) {
		const pokemon = data[i]

		//create and style the card
		const card = document.createElement("li")
		card.classList.add("card")
		card.style.listStyle = "none"
		card.style.backgroundColor = "darkgray"

		// create title
		const title = document.createElement("h2")
		title.classList.add("card--title")
		title.innerText = pokemon.name

		// append the title to the <li>
		card.append(title)

		//create the image
		const image = document.createElement("img")
		image.classList.add("card--img")

		image.setAttribute("width", 256)
		image.setAttribute(
			"src",
			pokemon.sprites.other["official-artwork"].front_default
		)

		// append the image to the <li>
		card.append(image)

		//create stats text
		const stats = document.createElement("ul")
		stats.classList.add("card--text")
		for (let i = 0; i < pokemon.stats.length; i++) {
			const stat = document.createElement("li")
			stat.innerText = `${pokemon.stats[i].stat.name}: ${pokemon.stats[i].base_stat}`
			stats.append(stat)
		}
		// append stats
		stats.style.listStyle = "none"
		card.append(stats)

		//extension 1 (Not sure if this is what is asked since I have no idea what are the games)

		const gamesAppearance = document.createElement("h3")
		gamesAppearance.className = "card--title"
		gamesAppearance.innerHTML = "Appearances"

		card.append(gamesAppearance)

		games = inGames(pokemon)
		games.style.listStyle = "square"

		card.append(games)

		// access the ul
		const deck = document.querySelector(".cards")

		// append the <li>(card) in the <ul>(deck)
		deck.append(card)
	}
}

pokemonCards(pokemon)
