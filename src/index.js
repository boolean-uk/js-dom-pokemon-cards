const body = document.querySelector('body');
const cardContainer = document.getElementsByClassName('cards');

function pokeTitle(pokemon) {
    const cardTitle = document.createElement('h2');
    cardTitle.setAttribute('class', 'card--text');
    cardTitle.innerText = `${pokemon.name}`;
    return cardTitle;
};

function pokeStats(pokemon) {
    const cardStats = document.createElement('ul');
    cardStats.setAttribute('class', 'card--text');
    pokemon.stats.forEach((stat) => {
        const statName = document.createElement('li');
        statName.innerText = `${stat.stat.name}: ${stat.base_stat}`;
        cardStats.append(statName);
    });
    return cardStats;
}

function genTitle(pokemon) {
    const cardGenTitle = document.createElement('h3');
    cardGenTitle.setAttribute('class', 'card--text');
    cardGenTitle.innerText = 'Game Versions';
    return cardGenTitle;
}

function pokeGen(pokemon) {
    const cardGen = document.createElement('ul');
    cardGen.setAttribute('class', 'card--text');
    pokemon.game_indices.forEach((version) => {
        const gameName = document.createElement('li');
        gameName.innerText = `${version.version.name}`;
        cardGen.append(gameName);
    });
    return cardGen;
}

function imageSwitch(pokemon) {
    const originalImg = document.createElement('img');
    const newImg = document.createElement('img');
    originalImg.setAttribute('class', 'card--img');
    newImg.setAttribute('class', 'card--img');
    originalImg.src = `${pokemon.sprites.other['official-artwork'].front_default}`;
    newImg.src = `${pokemon.sprites.other.dream_world.front_default}`;
    originalImg.style.width = '250px';
    newImg.style.width = '250px';
    originalImg.addEventListener('mouseover', () => {
        originalImg.replaceWith(newImg);
    });
    newImg.addEventListener('mouseout', () => {
        newImg.replaceWith(originalImg);
    });
    return originalImg;
}


data.forEach((pokemon) => {
    const div = document.createElement('div');
    div.setAttribute('class', 'card');
    div.append(pokeTitle(pokemon));
    div.append(imageSwitch(pokemon));
    div.append(pokeStats(pokemon));
    div.append(genTitle(pokemon));
    div.append(pokeGen(pokemon));
    cardContainer[0].append(div);
});