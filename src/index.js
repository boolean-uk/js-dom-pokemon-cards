
for (let i = 0; i <= data.length; i++) {
  //create the outer list
  const pokemon = data[i];
  const li = document.createElement("li");
  const ul = document.querySelector("ul");
  li.setAttribute("class", "card");
  li.style.listStyleType = 'none';
  ul.append(li);

  // creating the Pokemon h2 title
  const h2 = document.createElement("h2");
  h2.innerText = pokemon.name.charAt(0).toUpperCase()+(pokemon.name).slice(1);
  h2.setAttribute("class", "card--title");
  li.append(h2);

  // create the image

  const img = document.createElement("img");
  img.src = pokemon.sprites.other["official-artwork"].front_default;
  li.append(img);
  img.setAttribute("class", "card--img")
  img.setAttribute("width", "256")

  // extension with click event that toggles between images

  let toggle = true;
  
  img.addEventListener("click", function event () {
    toggle = !toggle
    if (toggle) {
      img.src = pokemon.sprites.other["dream_world"].front_default;
  
    } else {
      img.src = pokemon.sprites.other["official-artwork"].front_default;
    }
    
})

  // create the inner ul for every card

  const newUl = document.createElement('ul');
  newUl.setAttribute("class", "card--text");
  li.append(newUl)

  // create inner list for each card

  for (j = 0; j <= 5; j++) {
  
    const newLi = document.createElement('li');
  newLi.innerText = (pokemon.stats[j].stat.name).toLocaleUpperCase() + ": " + pokemon.stats[j].base_stat
  newUl.append(newLi)}


  //inner list style

  newUl.style.listStyleType = 'none';
  newUl.style.lineHeight = "25px";
  newUl.style.marginLeft = "10px";


}

