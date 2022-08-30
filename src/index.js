
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

let pokeList = document.querySelector('ul')

let pokeCards = []

for (let pokeMon of data) {
    let li = document.createElement("li");
    li.setAttribute("class", "card");

    const thisPokeMonCard = `
  <h2 class="card--title">${pokeMon.name}</h2>
  <img
    width="256"
    class="card--img"
    src="${pokeMon.sprites.other['official-artwork'].front_default}"
  />
  <ul class="card--text">
    <li>HP: ${pokeMon.stats[0].base_stat}</li>
    <li>ATTACK: ${pokeMon.stats[1].base_stat}</li>
    <li>DEFENSE: ${pokeMon.stats[2].base_stat}</li>
    <li>SPECIAL-ATTACK: ${pokeMon.stats[3].base_stat}</li>
    <li>SPECIAL-DEFENSE: ${pokeMon.stats[4].base_stat}</li>
    <li>SPEED: ${pokeMon.stats[5].base_stat}</li>
  </ul>
    `
li.innerHTML = thisPokeMonCard
pokeList.appendChild(li);
}

