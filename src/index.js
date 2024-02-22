console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

const pokemonListUL = document.querySelector(".cards")

function createPokemonCard() {
    pokemonListUL.innerHTML = ""

    for(let i = 0; i < data.length; i++) {
        const pokemon = data[i]
        const pokemonFirstLi = document.createElement('li')
        pokemonFirstLi.setAttribute("class", "card") 

        const pokemonH2 = document.createElement('h2')
        pokemonH2.setAttribute("class", "card--title")
        pokemonH2.innerText = pokemon.name

        const pokemonIMG = document.createElement('img')
        pokemonIMG.setAttribute("width", "256")
        pokemonIMG.setAttribute("class", "card--img")
        pokemonIMG.setAttribute("src", pokemon.sprites.front_default)

        const pokemonInnerUL = document.createElement('ul')
        pokemonInnerUL.setAttribute("class", "card--text")

        const pokemonHPLi = document.createElement('li')
        const pokemonAttackLi = document.createElement('li')
        const pokemonDefenseLi = document.createElement('li')
        const pokemonSPALi = document.createElement('li')
        const pokemonSPDLi = document.createElement('li')
        const pokemonSpeedLi = document.createElement('li')

    
        for(j = 0; j < pokemon.stats.length; j++) {
            if(pokemon.stats[j].stat.name === "hp") {
                pokemonHPLi.innerText = 'HP: ' + pokemon.stats[j].base_stat
            }
            else if (pokemon.stats[j].stat.name === "attack") {
                pokemonAttackLi.innerText = 'ATTACK: ' + pokemon.stats[j].base_stat
            }
            else if (pokemon.stats[j].stat.name === "defense") {
                pokemonDefenseLi.innerText = 'DEFENSE: ' + pokemon.stats[j].base_stat
            }
            else if (pokemon.stats[j].stat.name === "special-attack") {
                pokemonSPALi.innerText = 'SPECIAL-ATTACK: ' + pokemon.stats[j].base_stat
            }
            else if (pokemon.stats[j].stat.name === "special-defense") {
                pokemonSPDLi.innerText = 'SPECIAL-DEFENSE: ' + pokemon.stats[j].base_stat
            }
            else if (pokemon.stats[j].stat.name === "speed") {
                pokemonSpeedLi.innerText = 'SPEED: ' + pokemon.stats[j].base_stat
            }
        }

        const pokemonGamesLi = document.createElement('li')

        let allGames = [];

        const generations = Object.keys(pokemon.sprites.versions) 
        
        for (let j = 0; j < generations.length; j++) {
            const generationKey = generations[j] 
            const generationGameNames = Object.keys(pokemon.sprites.versions[generationKey]);
        
            for (let k = 0; k < generationGameNames.length; k++) {
              const gameName = generationGameNames[k]
              if (!allGames.includes(gameName)) { 
                allGames.push(gameName); 
              }
            }
        }

        pokemonGamesLi.innerText = "Appears in games: " + allGames.join(", ")
        


        pokemonInnerUL.appendChild(pokemonHPLi)
        pokemonInnerUL.appendChild(pokemonAttackLi)
        pokemonInnerUL.appendChild(pokemonDefenseLi)
        pokemonInnerUL.appendChild(pokemonSPALi)
        pokemonInnerUL.appendChild(pokemonSPDLi)
        pokemonInnerUL.appendChild(pokemonSpeedLi)
        pokemonInnerUL.appendChild(pokemonGamesLi)

    
        pokemonFirstLi.appendChild(pokemonH2)
        pokemonFirstLi.appendChild(pokemonIMG)
        pokemonFirstLi.appendChild(pokemonInnerUL)

        pokemonListUL.appendChild(pokemonFirstLi)
        
    }
}

      
      async function main() {        
        createPokemonCard()
    }

    main()