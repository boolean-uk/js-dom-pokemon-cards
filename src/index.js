const cardTemplate = (pokemon)=>{
  const gameIndices = pokemon.game_indices;

  
  const getPokemonName = () => {
      const nameList = gameIndices.map((index) => `<li>${capitalizeBeginingOfName(index.version.name)}</li>`)
      return `<ul>${nameList.join('')}</ul>`
  };

  
  const capitalizeBeginingOfName = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1)
  }
  
  const pokemonStats = {}
  
  
  pokemon.stats.forEach((stat) => {
      const statName = stat.stat.name
      pokemonStats[statName] = stat.base_stat
  })
  
  const artworks = fetchArtwork(pokemon)

  return `
  <li class="card" data-pokemon-name="${pokemon.name}" data-current-artwork="0">
      <h2 class="card--title">${capitalizeBeginingOfName(pokemon.name)}</h2>
      <img
      width="256"
      class="card--img"
      src=${artworks[0]}
      />
      <ul class="card--text">
          <li>HP: ${pokemonStats["hp"]}</li>
          <li>ATTACK: ${pokemonStats["attack"]}</li>
          <li>DEFENSE: ${pokemonStats["defense"]}</li>
          <li>SPECIAL-ATTACK: ${pokemonStats["special-attack"]}</li>
          <li>SPECIAL-DEFENSE: ${pokemonStats["special-defense"]}</li>
          <li>SPEED: ${pokemonStats["speed"]}</li>
      </ul>
      

  </li>`
}
const fetchArtwork = (pokemon) => {
  const urlForArtwork = []

  if (pokemon.sprites) {
      
      if (pokemon.sprites.front_default) {
          urlForArtwork.push(pokemon.sprites.front_default)
      }
      if (pokemon.sprites.back_default) {
          urlForArtwork.push(pokemon.sprites.back_default)
      }

     
      if (pokemon.sprites.front_shiny) {
          urlForArtwork.push(pokemon.sprites.front_shiny)
      }
      if (pokemon.sprites.back_shiny) {
          urlForArtwork.push(pokemon.sprites.back_shiny)
      }

      
      if (pokemon.sprites.other) {
          if (pokemon.sprites.other["official-artwork"] && pokemon.sprites.other["official-artwork"].front_default) {
              urlForArtwork.push(pokemon.sprites.other["official-artwork"].front_default)
          }
          if (pokemon.sprites.other.dream_world && pokemon.sprites.other.dream_world.front_default) {
              urlForArtwork.push(pokemon.sprites.other.dream_world.front_default)
          }
      }

      
      if (pokemon.sprites.versions) {
          for (const generation in pokemon.sprites.versions) {
              const versionObj = pokemon.sprites.versions[generation]
              for (const versionName in versionObj) {
                  const versionSprites = versionObj[versionName]
                  if (versionSprites.front_default) {
                      urlForArtwork.push(versionSprites.front_default)
                  }
                  if (versionSprites.back_default) {
                      urlForArtwork.push(versionSprites.back_default)
                  }
                 
              }
          }
      }
  }

  return urlForArtwork.filter(Boolean)
}


const Cards = (pokemonList) => {
  return pokemonList.map(p=>cardTemplate(p))
}

document.getElementsByClassName('cards')[0].innerHTML = Cards(data).join('')


const cardAttributes = document.querySelectorAll('.card')
cardAttributes.forEach(cardElement => {
  const imageElement = cardElement.querySelector('.card--img')

  imageElement.addEventListener('click', () => {
      const pokemonName = cardElement.getAttribute('data-pokemon-name')
      const pokemon = data.find(p => p.name === pokemonName);
      const usingArtworkIndex = parseInt(cardElement.getAttribute('data-current-artwork'), 10)
      const artworks = fetchArtwork(pokemon)
      const nextArtworkIndex = (usingArtworkIndex + 1) % artworks.length

      imageElement.setAttribute('src', artworks[nextArtworkIndex])
      cardElement.setAttribute('data-current-artwork', nextArtworkIndex.toString())
  });
});