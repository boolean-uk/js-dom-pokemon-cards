console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

const pokemonListUL = document.querySelector(".cards")

function createPokemonCard() {
    pokemonListUL.innerHTML = ""

    for(let i = 0; i < data.length; i++) {
        const pokemon = data[i]

        //Creating the first list item tag
        const pokemonFirstLi = document.createElement('li')

        pokemonFirstLi.setAttribute("class", "card") 

        // Creating the h2 tag and setting the text to the pokemon's name
        const pokemonH2 = document.createElement('h2')

        pokemonH2.setAttribute("class", "card--title")

        pokemonH2.innerText = pokemon.name

        // Creating the image tag and setting the attributes with the corresponding information, width, class and the image of the pokemon
        const pokemonIMG = document.createElement('img')

        pokemonIMG.setAttribute("width", "256")
        pokemonIMG.setAttribute("class", "card--img")
        pokemonIMG.setAttribute("src", pokemon.sprites.front_default)

        // Creating the inner unordered list and setting the attribute to the corresponding class
        const pokemonInnerUL = document.createElement('ul')

        pokemonInnerUL.setAttribute("class", "card--text")

        // Creating the inner list items
        const pokemonInnerLiHP = document.createElement('li')
        const pokemonInnerLiATTACK = document.createElement('li')
        const pokemonInnerLiDEFENSE = document.createElement('li')
        const pokemonInnerLiSPECIALATTACK = document.createElement('li')
        const pokemonInnerLiSPECIALDEFENSE = document.createElement('li')
        const pokemonInnerLiSPEED = document.createElement('li')

        // Looping through the stats object array and checking the statnames and if they match a certain stat then the innertext is set to the base stat of that stat 
        for(j = 0; j < pokemon.stats.length; j++) {
            if(pokemon.stats[j].stat.name === "hp") {
                pokemonInnerLiHP.innerText = 'HP: ' + pokemon.stats[j].base_stat
            }
            else if (pokemon.stats[j].stat.name === "attack") {
                pokemonInnerLiATTACK.innerText = 'ATTACK: ' + pokemon.stats[j].base_stat
            }
            else if (pokemon.stats[j].stat.name === "defense") {
                pokemonInnerLiDEFENSE.innerText = 'DEFENSE: ' + pokemon.stats[j].base_stat
            }
            else if (pokemon.stats[j].stat.name === "special-attack") {
                pokemonInnerLiSPECIALATTACK.innerText = 'SPECIAL-ATTACK: ' + pokemon.stats[j].base_stat
            }
            else if (pokemon.stats[j].stat.name === "special-defense") {
                pokemonInnerLiSPECIALDEFENSE.innerText = 'SPECIAL-DEFENSE: ' + pokemon.stats[j].base_stat
            }
            else if (pokemon.stats[j].stat.name === "speed") {
                pokemonInnerLiSPEED.innerText = 'SPEED: ' + pokemon.stats[j].base_stat
            }
        }

        //EXTENSION
        const pokemonInnerLiGAMES = document.createElement('li')

        let allGames = [];

        // To get the generations as a list of key names.
        const generations = Object.keys(pokemon.sprites.versions) 
        
        for (let j = 0; j < generations.length; j++) {
            const generationKey = generations[j] // Getting each generation's key

            // Object.keys() use the generationKey variable to make a list of the names of the games in the different generations
            const generationGameNames = Object.keys(pokemon.sprites.versions[generationKey]);
        
            //With our list of games for a given generation, we loop through each game name.
            for (let k = 0; k < generationGameNames.length; k++) {
              const gameName = generationGameNames[k]
              if (!allGames.includes(gameName)) { // Avoid duplicates of game names
                allGames.push(gameName); // Add game name the pokemon appears in to the list
              }
            }
        }

        pokemonInnerLiGAMES.innerText = "Appears in games: " + allGames.join(", ")
        


        // Adding the list items to the inner unordered list
        pokemonInnerUL.appendChild(pokemonInnerLiHP)
        pokemonInnerUL.appendChild(pokemonInnerLiATTACK)
        pokemonInnerUL.appendChild(pokemonInnerLiDEFENSE)
        pokemonInnerUL.appendChild(pokemonInnerLiSPECIALATTACK)
        pokemonInnerUL.appendChild(pokemonInnerLiSPECIALDEFENSE)
        pokemonInnerUL.appendChild(pokemonInnerLiSPEED)
        pokemonInnerUL.appendChild(pokemonInnerLiGAMES) // EXTENSION

        // Adding all the inner list items to the first list item tag
        pokemonFirstLi.appendChild(pokemonH2)
        pokemonFirstLi.appendChild(pokemonIMG)
        pokemonFirstLi.appendChild(pokemonInnerUL)

        //Adding all the list items to the outer unordered list in the html file
        pokemonListUL.appendChild(pokemonFirstLi)
        
    }
}

function main() {
    createPokemonCard()
}

main()
