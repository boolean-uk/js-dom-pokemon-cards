const pokemonTypes = data;

document.addEventListener("DOMContentLoaded", function() {
    const cardsContainer = document.querySelector(".cards");
  
    pokemonTypes.forEach(type => {
      const card = document.createElement("div");
      card.classList.add("card");
  
      const title = document.createElement("h2");
      title.classList.add("card--title");
      title.textContent = capitalizeFirstLetter(type.name);
  
      const img = document.createElement("img");
      img.classList.add("card--img");

      if (type.sprites && type.sprites.other && type.sprites.other["official-artwork"]) {
          img.src = type.sprites.other["official-artwork"].front_default;
      } else {
          img.src = "default-image-url.png";
      }

      img.alt = `${type.name} type`;
  
      console.log("Image Source:", img.src);

      const textList = document.createElement("ul");
      textList.classList.add("card--text");
      textList.style.listStyleType = "none";
 
      const typeDetails = ['HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed'];

      for (let n = 0; n < type.stats.length; n++) {
        const statOne =  type.stats[n].stat.name.toUpperCase();
        const statTwo = type.stats[n].base_stat;
        const listItem = document.createElement("li");
        listItem.textContent = `${statOne}: ${statTwo}`;
        textList.appendChild(listItem);
      }
  
      card.appendChild(title);
      card.appendChild(img);
      card.appendChild(textList);
      cardsContainer.appendChild(card);
    });
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
