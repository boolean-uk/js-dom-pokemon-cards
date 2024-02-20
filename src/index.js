
// console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
// console.log(data[0]);
function capitalise(word){
  return word.charAt(0).toUpperCase() + word.slice(1)
}

const getArtName = (art) =>{
  artName = []
  
  for (var key in art) {
      artName.push(`<option value="${key}">${capitalise(key)}</option>`)
    }
  return artName
}

const getArt = (pokemon) =>{
  let art = {}
   // Populate the baseStatsByName object
   art['official-artwork'] = pokemon.sprites.other["official-artwork"].front_default
  const object = pokemon.sprites.versions
  Object.keys(object).forEach(key => {
      const value = object[key];
      Object.keys(value).forEach(key2 => {
      const value2 = value[key2];
      art[key2] = value2.front_default
    })
    
  });
    return art
}
  
const getGame = (pokemon) =>{
    let games = []
    // Populate the baseStatsByName object
    pokemon.game_indices.forEach((game_indice) => {
       games.push(`<li>${capitalise(game_indice.version.name)}</li>`)
    });
    return games.join('')
}

const createMon = (pokemon) =>
{
    // Create an object to store the base stats by stat name
    const baseStatsByName = {};
    
    // Populate the baseStatsByName object
    pokemon.stats.forEach((stat) => {
        const statName = stat.stat.name;
        baseStatsByName[statName] = stat.base_stat;
    });
   
    const art = getArt(pokemon);
    // console.log(art)
    let a = 'official-artwork';
    // return `<li>${mon.name}</li>`
    return `<li class="card" data-pokemon-art="${art}" data-pokemon-name = "${pokemon.name}">
    <h2 class="card--title">${capitalise(pokemon.name)}</h2>
    <div>
    <select class = "card--slct" name="art" id="art">
    ${getArtName(art)}
    </select>
    </div>
    <button class = "card--btn" value='select' id='selectbtn' name='selectbtn'>Select</button>
    <img
      width="256"
      class="card--img"
      src="${art[a]}"
    />
    <ul class="card--text">
      <li>HP: ${baseStatsByName["hp"]}</li>
      <li>ATTACK: ${baseStatsByName["attack"]}</li>
      <li>DEFENSE: ${baseStatsByName["defense"]}</li>
      <li>SPECIAL-ATTACK: ${baseStatsByName["special-attack"]}</li>
      <li>SPECIAL-DEFENSE: ${baseStatsByName["special-defense"]}</li>
      <li>SPEED: ${baseStatsByName["speed"]}</li>
    </ul>
    <div>
      <ul>
        Games:
        ${getGame(pokemon)}
      </ul>  
    </div>
  </li>`
}
const createAllMons = (monList) =>
{
    return monList.map(p => createMon(p))
}


document.getElementsByClassName('cards')[0].innerHTML = createAllMons(data).join('')


// Event listener for toggling artworks
const cardElements = document.querySelectorAll('.card');
cardElements.forEach(cardElement => {
    const imgElement = cardElement.querySelector('.card--img');
    const button = cardElement.querySelector('.card--btn');
    const e = cardElement.querySelector(".card--slct");
    

    button.addEventListener('click', () => {
      let text = e.options[e.selectedIndex].text.toLowerCase();

      const pokemonName = cardElement.getAttribute("data-pokemon-name")
      const test = cardElement.getAttribute("data-pokemon-art")
      const pokemon = data.find(p => p.name === pokemonName);
      art = getArt(pokemon)

      imgElement.setAttribute('src', art[text]);
    });
});