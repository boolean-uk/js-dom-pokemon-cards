const pokemonListUL = document.querySelector("#card-list");

function renderPokemons() {
    pokemonListUL.innerHTML = ""
    pokemonListUL.classList.add("cards");

    for(let i = 0; i < data.length; i++) {
        const pokemon = data[i]
        const pokemonLi = document.createElement('li')
        pokemonLi.setAttribute('id', pokemon.id)
        pokemonLi.classList.add("card");
        
        const h2 = document.createElement('h2')
        h2.classList.add('card--title')
        h2.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        
        const img = document.createElement('img')
        img.classList.add('card--img')
        img.setAttribute('src', pokemon.sprites.front_default)
        img.setAttribute('width', '256')
        
        const ul = document.createElement('ul')
        ul.classList.add('card--text')
        
        const stats = pokemon.stats;
        for (const stat of stats) {
            const liStat = document.createElement('li')
            liStat.textContent = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`
            ul.appendChild(liStat)
        }
        
        pokemonLi.appendChild(h2)
        pokemonLi.appendChild(img)
        pokemonLi.appendChild(ul)
        
        pokemonListUL.appendChild(pokemonLi)
    }
}

function main() {
    renderPokemons();
}

main();
