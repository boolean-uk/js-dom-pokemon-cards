
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

// const body = document.querySelector('body');
// const cardContainer = document.getElementsByClassName('cards');

// data.forEach((pokemon) => {
//     const div = document.createElement('div');
//     const cardTitle = document.createElement('h2');
//     const img = document.createElement('img');
//     const cardText = document.createElement('ul');
//     const cardStat = document.createElement('p');

//     div.setAttribute('class', 'card');

//     cardTitle.innerText = `${pokemon.name}`;
//     img.setAttribute('src', pokemon.sprites.front_default);
//     cardText.innerText = `${pokemon.stats[1].base_stat}`;
//     cardStat.innerText = `${pokemon.stats[1].base_stat.name}`;
    
//     div.append(cardTitle);
//     div.append(img);
//     div.append(cardText);

//     cardContainer[0].append(div);
// });

const body = document.querySelector('body');
const cardContainer = document.getElementsByClassName('cards');

function pokeTitle(pokemon) {
    const cardTitle = document.createElement('h2');
    cardTitle.innerText = `${pokemon.name}`;
    return cardTitle;
};

function pokeImg(pokemon) {
    const cardImg = document.createElement('img');
    cardImg.setAttribute('src', `${pokemon.sprites.other["official-artwork"].front_default}`);
    return cardImg;
}

function pokeStats(pokemon) {
    const cardStats = document.createElement('ul');
    pokemon.stats.forEach((stat) => {
        const statName = document.createElement('li');
        statName.innerText = `${stat.stat.name}: ${stat.base_stat}`;
        cardStats.append(statName);
    });
    return cardStats;
}


data.forEach((pokemon) => {
    const div = document.createElement('div');
    div.setAttribute('class', 'card');
    div.append(pokeTitle(pokemon));
    div.append(pokeImg(pokemon));
    div.append(pokeStats(pokemon));
    cardContainer[0].append(div);
});





