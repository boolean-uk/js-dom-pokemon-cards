console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

const pokemonList = document.querySelector('.cards')

for (let i = 0; i < data.length; i++) {
    const pokemonData = data[i]

    // CREATING THE CARD
    const singleCard = document.createElement("li")
    singleCard.setAttribute("class", "card")
    pokemonList.append(singleCard)

    // POKEMON NAME
    const pokemonName = document.createElement("h2")
    pokemonName.setAttribute("class", "card--title")
    pokemonName.innerText = pokemonData.name
    // <h2 class="card--title">Bulbasaur</h2>
    singleCard.append(pokemonName)

    // POKEMON IMG
    const pokemonImg = document.createElement("img")
    pokemonImg.setAttribute("width", "256")
    pokemonImg.setAttribute("class", "card--img")
    pokemonImg.setAttribute("src", pokemonData.sprites.other['official-artwork'].front_default)
    // <img width="256" class="card--img" src="link"/>
    singleCard.append(pokemonImg)

            // LIST FOR STATS
            const pokemonStats = document.createElement("ul")
            pokemonStats.setAttribute("class", "card--text")
            // <ul class="card--text"></ul>
            singleCard.append(pokemonStats)

            // PUTTING STATS INTO THE LIST ABOVE
            for (j = 0; j < pokemonData.stats.length; j++) {
                const statName = pokemonData.stats[j].stat.name
                const statLevel = pokemonData.stats[j].base_stat
                const currentStat = document.createElement("li")
                currentStat.innerText = `${statName}: ${statLevel}`
                pokemonStats.append(currentStat)
            }
}