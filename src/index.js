
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);


const cardContainer = document.querySelector('.cards');

data.forEach((pokemon) => {
    const card = document.createElement('li');
    card.classList.add('card');

    const h2 = document.createElement('h2');
    h2.textContent = pokemon.name;
    card.appendChild(h2);

    const imageTag = document.createElement('img');
    imageTag.classList.add('card-img'); 
    const imageSrc = pokemon.sprites.other['official-artwork'].front_default;
    imageTag.setAttribute('src', imageSrc);
    card.appendChild(imageTag); 

    const ul = document.createElement('ul');
    
  
    pokemon.stats.forEach((statValue) => {
        const li = document.createElement('li');
        li.innerText = `${statValue.stat.name.toUpperCase()}: ${statValue.base_stat}`;
        ul.appendChild(li); 
    });

    card.appendChild(ul); 

    cardContainer.appendChild(card); 
});
