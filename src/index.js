
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

    const stats = {}
    pokemon.stats.array.forEach((s) => {
        const statName = stat.stat.name
        viewOfCards[statName] = state.base_stat
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
