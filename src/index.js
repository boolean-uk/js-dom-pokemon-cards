const pokemonTypes = data 

document.addEventListener("DOMContentLoaded", function() {
    const cardsContainer = document.querySelector(".cards");
  
    pokemonTypes.forEach(type => {
      const card = document.createElement("li");
      card.classList.add("card");
  
      const title = document.createElement("h2");
      title.classList.add("card--title");
      title.textContent = type.name;
  
      const img = document.createElement("img");
      img.classList.add("card--img");
      img.src = type.sprites.officialArtwork;
      img.alt = `${type.name} type`;
  
      console.log("Image Source:", img.src);

      const textList = document.createElement("ul");
      textList.classList.add("card--text");
 
      const typeDetails = ['HP', 'ATTACK', 'DEFENSE', 'SPECIAL-ATTACK', 'SPECIAL-DEFENSE', 'SPEED'];
      typeDetails.forEach(detail => {
        const listItem = document.createElement("li");
        listItem.textContent = `${detail}: ${type[detail.toLowerCase()]}`;
        textList.appendChild(listItem);
      });
  
      card.appendChild(title);
      card.appendChild(img);
      card.appendChild(textList);
      cardsContainer.appendChild(card);
    });
  });
  