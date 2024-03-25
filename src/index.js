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
const card = document.createElement("li")
const deck = document.querySelector(".cards")

const title = (pokemon) => {
	const pName = document.createElement("h2")
	pName.classList.add("card--title")
	pName.innerText = pokemon.name
	return pName
}

const image = (pokemon) => {
	const pic = document.createElement("img")
	pic.classList.add("card--img")
	pic.setAttribute(
		"src",
		pokemon.sprites.other["official-artwork"].front_default
	)
	pic.setAttribute("width", 256)
	return pic
}

const pokStats = (pokemon) => {
	const stats = document.createElement("ul")
	stats.classList.add("card--text")
	for (let i = 0; i < pokemon.stats.length; i++) {
		const stat = document.createElement("li")
		stat.innerText = `${pokemon.stats[i].stat.name} : ${pokemon.stats[i].base_stat}`
		stats.append(stat)
	}
	return stats
}



const makeCards = (pokemon) => {
	card.classList.add("card")
	const name = title(pokemon)
	const picture = image(pokemon)
	const info = pokStats(pokemon)

	card.append(name)
	card.append(picture)
	card.append(info)
}


const main = (pokemon) => {
	for (let i = 0; i < pokemon.length; i++) {
		makeCards(pokemon[i])
		deck.append(card)
	}
}
main(pokemon)