let i = 0;

const createPokemon = (pokemon) => {
  let text = `<li class="card">
  <h2 class="card--title">${pokemon.name}</h2>
  <img
    width="256"
    class="card--img"
    src=${pokemon.sprites.other['official-artwork'].front_default}
    id = ${pokemon.name}
    onclick = "changeImage(document.getElementById('${pokemon.name}'))"
  />
  <ul class="card--text">`;

  pokemon.stats.forEach(stat => {
    text += `<li>${stat.stat.name.toUpperCase()}: ${stat.base_stat}</li>`
  });

  text += `<li>Appeared in:`
  pokemon.game_indices.forEach(game => {
    text += ` ${game.version.name},`;
  });
  text = text.slice(0, -1);
  text += `.</li>`

  text += `  </ul>
  </li>`;
  return text;
}
const createAllPokemons = (pokemonList) => {
  return  pokemonList.map(p => createPokemon(p));
}

document.getElementsByClassName('cards')[0].innerHTML = createAllPokemons(data).join('');

const flattenJSON = (obj = {}, res = {}, extraKey = '') => {
  for(key in obj){
     if(typeof obj[key] !== 'object'){
        res[extraKey + key] = obj[key];
     }else{
        flattenJSON(obj[key], res, `${extraKey}${key}.`);
     };
  };
  return res;
};

const changeImage = (img) => {
  let pokemon = data.find(elm => elm.name == img.id);
  let images = flattenJSON(pokemon.sprites);
  let front_default = [];
  Object.keys(images).forEach(key =>{
    if ( key.includes("front_default")) front_default.push(images[key]);
  });
  let index = front_default.findIndex(elm => elm == img.src) + 1;
  img.src = index == front_default.length ? front_default[0] : front_default[index]
}