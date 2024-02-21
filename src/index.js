const cardsUl = document.querySelector(".cards")

for (const currentData of data) {
    const cardLi = document.createElement('li')
    cardLi.classList.add('card')

    //H2
    const header = renderHeader(currentData);
    cardLi.appendChild(header);

    //IMAGE
    const imgElement = renderImage(currentData);
    cardLi.appendChild(imgElement);

    //STATS
    const statsUl = renderStats(currentData);
    cardLi.appendChild(statsUl)

    // Append the li element to the ul element
    cardLi.style.listStyleType = 'none'
    cardsUl.appendChild(cardLi);
}

function renderHeader(cardData) {
    const header = document.createElement('h2');
    header.classList.add('card--title')
    header.textContent = cardData.name[0].toUpperCase() + cardData.name.slice(1);
    return header;
}

function renderImage(cardData) {
    const imgElement = document.createElement('img');
    imgElement.src = cardData.sprites.other['official-artwork'].front_default;
    imgElement.classList.add('card--img')
    imgElement.width = 256
    return imgElement;
}

function renderStats(cardData) {
    const statsUl = document.createElement('ul');
    statsUl.classList.add('card--text')

    for (const stat of cardData.stats) {
        const statLi = document.createElement('li');
        statLi.textContent = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`;
        statLi.style.listStyleType = 'none'
        statsUl.appendChild(statLi);
    }
    return statsUl;
}

