const cards = document.querySelector(".cards");

data.forEach((pokemon) => {
    const name = pokemon.name;
    const photo1 = pokemon.sprites.other["official-artwork"].front_default;
    const photo2 = pokemon.sprites.other.dream_world.front_default;
    const hp = pokemon.stats.find((i) => i.stat.name === "hp").base_stat;
    const attack = pokemon.stats.find(
        (i) => i.stat.name === "attack"
    ).base_stat;
    const defense = pokemon.stats.find(
        (i) => i.stat.name === "defense"
    ).base_stat;
    const special_attack = pokemon.stats.find(
        (i) => i.stat.name === "special-attack"
    ).base_stat;
    const special_defense = pokemon.stats.find(
        (i) => i.stat.name === "special-defense"
    ).base_stat;
    const speed = pokemon.stats.find((i) => i.stat.name === "speed").base_stat;

    const element = `
        <li class="card">
            <h2 class="card--title">${name}</h2>
            <img width="256" class="card--img"
                src="${photo1}" />
            <img width="256" class="card--img card--img-another"
                src="${photo2}" />
            <ul class="card--text">
                <li>HP: ${hp}</li>
                <li>ATTACK: ${attack}</li>
                <li>DEFENSE: ${defense}</li>
                <li>SPECIAL-ATTACK: ${special_attack}</li>
                <li>SPECIAL-DEFENSE: ${special_defense}</li>
                <li>SPEED: ${speed}</li>
            </ul>
        </li>
    `;

    cards.innerHTML += element;
});
