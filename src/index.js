
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

const viewOfCards = (pokemon)=>{
const game = pokemon.game

const generateNames = () => {
    const versionList = game.map((index) => `<li>${capitalizeFirstLetter(index.version.name)}</li>`)
    return `<ul>${versionList.join('')}</ul>`
}

const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.splice(1)
}

    const stats = {}

    pokemon.stats.array.forEach((s) => {
        const statName = stat.stat.name
        stats[statName] = state.base_stat
    });

const art = getArtworks(pokemon)

    return `
<li class="card" data-pokemon-name="${pokemon.name}" data-current-artwork="0">
    <h2 class="card-title">${capitalizeFirstLetter(pokemon.name)}</h2>
    <img
        width="256"
        class="card--img"
        src=${art[0]}
        />
        <ul class="card--text">
        <li>HP: ${stats["hp"]}</li>
        <li>ATTACK: ${stats["attack"]}</li>
        <li>DEFENSE: ${stats["defense"]}</li>
        <li>SPECIAL-ATTACK: ${stats["special-attack"]}</li>
        <li>SPECIAL-DEFENSE: ${stats["special-defense"]}</li>
        <li>SPEED: ${stats["speed"]}</li>
    </ul>
    <div class="card-appearances">
    Appearace: ${generateNames()}
    </div>

    <button class="toggle-image-btn">Toggle Image</button>

</li>`
    }

    const getArtworks = (pokemon) => {
        const urls = []
        
        if (pokemon.sprites) {
            
            if (pokemon.sprites.front_default) {
                urls.push(pokemon.sprites.front_default);
            }
            if (pokemon.sprites.back_default) {
                urls.push(pokemon.sprites.back_default);
            }
    
            
            if (pokemon.sprites.front_shiny) {
                urls.push(pokemon.sprites.front_shiny);
            }
            if (pokemon.sprites.back_shiny) {
                urls.push(pokemon.sprites.back_shiny);
            }
    
           
            if (pokemon.sprites.other) {
                if (pokemon.sprites.other["official-artwork"] && pokemon.sprites.other["official-artwork"].front_default) {
                    urls.push(pokemon.sprites.other["official-artwork"].front_default);
                }
                if (pokemon.sprites.other.dream_world && pokemon.sprites.other.dream_world.front_default) {
                    urls.push(pokemon.sprites.other.dream_world.front_default);
                }
            }
    
            
            if (pokemon.sprites.versions) {
                for (const generation in pokemon.sprites.versions) {
                    const versionObj = pokemon.sprites.versions[generation];
                    for (const versionName in versionObj) {
                        const versionSprites = versionObj[versionName];
                        if (versionSprites.front_default) {
                            urls.push(versionSprites.front_default);
                        }
                        if (versionSprites.back_default) {
                            urls.push(versionSprites.back_default);
                        }
                        
                    }
                }
            }
        }
    
        return urls.filter(Boolean);
    }

    

    const CardArray = (pokemonList) => {
        return pokemonList.map(p=>viewOfCards(p))
    }


document.getElementsByName('cards')[0].innerHTML = CardArray(data).join('')

const pokemonElements = document.querySelectorAll('.card')
pokemonElements.forEach(card => {
    const imageElement = pokemonElements.querySelector('.card--img')

    imageElement.addEventListener('click', () => {
        const nameOfPokemon = pokemonElements.getAttribute('data-pokemon-name')
        const pokemon = data.find(p => p.name === pokemonName)
        const artworkIndex = parseInt(pokemonElements.getAttribute('data-current-artwork'), 10)
        const artworks = getArtworks(pokemon)
        const nextArtworkIndex = (artworkIndex + 1) % artworks.length

        imageElement.setAttribute('src', artworks[nextArtworkIndex])
        pokemonElements.setAttribute('data-current-artwork', nextArtworkIndex.toString())
    })
})
