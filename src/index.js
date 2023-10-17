
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
  
console.log(data[0]);

document.addEventListener('DOMContentLoaded', function() {
    const cardsList = document.querySelector('.cards');
  
    data.forEach(pokemon => {
      const card = document.createElement('li');
      card.className = 'card';
  
      const cardTitle = document.createElement('h2');
      cardTitle.className = 'card--title';
      cardTitle.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  
      const cardImg = document.createElement('img');
      cardImg.width = 256;
      cardImg.className = 'card--img';
      cardImg.src = pokemon.sprites.other['official-artwork'].front_default;
  
      const cardText = document.createElement('ul');
      cardText.className = 'card--text';
  
      const stats = [
        { name: 'HP', value: 45 },
        { name: 'ATTACK', value: 49 },
        { name: 'DEFENSE', value: 49 },
        { name: 'SPECIAL-ATTACK', value: 65 },
        { name: 'SPECIAL-DEFENSE', value: 65 },
        { name: 'SPEED', value: 45 }
      ];
  
      stats.forEach(stat => {
        const statItem = document.createElement('li');
        statItem.textContent = `${stat.name}: ${stat.value}`;
        cardText.appendChild(statItem);
      });
  
      card.appendChild(cardTitle);
      card.appendChild(cardImg);
      card.appendChild(cardText);
  
      cardsList.appendChild(card);
    });
  });
