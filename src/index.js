
const container = document.createElement('ul');
container.className = 'cards';

for (let index = 0; index < data.length; index++) {
    const li = document.createElement('li');
    li.className = 'card';

    const h2 = document.createElement('h2');
    h2.className = 'card--title';
    h2.textContent = data[index].name;

    const img = document.createElement('img');
    img.width = '256';
    img.className = 'card--img';
    img.src = data[index].sprites.other['official-artwork'].front_default;

    const ul = document.createElement('ul');
    ul.className = 'card--text';

    const hp = document.createElement('li');
    hp.textContent = 'HP: ' + data[index].stats[0].base_stat;

    const attack = document.createElement('li');
    attack.textContent = 'ATTACK: ' + data[index].stats[1].base_stat;

    const defense = document.createElement('li');
    defense.textContent = 'DEFENSE: ' + data[index].stats[2].base_stat;

    const special_attack = document.createElement('li');
    special_attack.textContent = 'SPECIAL-ATTACK: ' + data[index].stats[3].base_stat;

    const special_defense = document.createElement('li');
    special_defense.textContent = 'SPECIAL-DEFENSE: ' + data[index].stats[4].base_stat;

    const speed = document.createElement('li');
    speed.textContent = 'SPEED: ' + data[index].stats[5].base_stat;

    ul.appendChild(hp);
    ul.appendChild(attack);
    ul.appendChild(defense);
    ul.appendChild(special_attack);
    ul.appendChild(special_defense);
    ul.appendChild(speed);

    li.appendChild(h2);
    li.appendChild(img);
    li.appendChild(ul);

    container.appendChild(li);
}

document.body.appendChild(container);
