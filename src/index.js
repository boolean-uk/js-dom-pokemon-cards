
for (let i = 0; i <= 19; i++) {
  //create the outer list
  const li = document.createElement("li");
  const ul = document.querySelector("ul");
  li.setAttribute("class", "card");
  li.style.listStyleType = 'none';
  ul.append(li);

  // creating the Pokemon h2 title
  const h2 = document.createElement("h2");
  h2.innerText = (data[i].name).charAt(0).toUpperCase()+(data[i].name).slice(1);
  h2.setAttribute("class", "card--title");
  li.append(h2);

  // create the image

  const img = document.createElement("img");
  img.src = data[i].sprites.other["official-artwork"].front_default;
  li.append(img);
  img.setAttribute("class", "card--img")
  img.setAttribute("width", "256")

  // create the inner ul for every card

  const newUl = document.createElement('ul');
  newUl.setAttribute("class", "card--text");
  li.append(newUl)

  // create inner list for each card

  for (j = 0; j <= 5; j++) {
  
    const newLi = document.createElement('li');
  newLi.innerText = (data[i].stats[j].stat.name).toLocaleUpperCase() + ": " + data[i].stats[j].base_stat
  newUl.append(newLi)}


  //inner list style

  newUl.style.listStyleType = 'none';
  newUl.style.lineHeight = "25px";
  newUl.style.marginLeft = "10px";


}

