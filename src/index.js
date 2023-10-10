const pokemonCardList = document.querySelectorAll('.cards');






// Card Structure

const pokemonCard = document.createElement('li');
pokemonCard.style.listStyleType = 'none'
pokemonCard.setAttribute('class', '.card');
pokemonCardList.append(pokemonCard);

// Card Title

const pokemonCardTitle = document.createElement('h2');
pokemonCardTitle.setAttribute('class', 'h2');
pokemonCardList.append(pokemonCardTitle);

// Card Image

const pokemonCardImage = document.createElement('img');
pokemonCardImage.setAttribute('class', '.card--img', 'img')
pokemonCardImage.setAttribute('src', data.sprites.front_default);
pokemonCardList.append(pokemonCardImage);

// Card Stats

const pokemonCardStats = document.createElement('ul');
pokemonCard.style.listStyleType = 'none'
pokemonCard.setAttribute('class', '.card--text');
pokemonCardList.append(pokemonCardStats);




console.log(data);



console.log(data[0]);
