// console.log(data);
// console.log(data[0]);

//You can start simple and just render a single
//pokemon card from the first element

for (let i = 0; i < data.length; i++) {
  //create the outer list
  const li = document.createElement("li");
  const ul = document.querySelector("ul");
  li.setAttribute("class", "card");
  li.style.listStyleType = 'none';
  /* document.getElementsById("test").style.color = red; */

  // console.log(li);
  // data[i].sprites.other['official-artwork'].front_default
  ul.append(li);
  // creating the Pokemon h2 title
  const h2 = document.createElement("h2");
  h2.innerText = (data[i].name).charAt(0).toUpperCase()+(data[i].name).slice(1);
  h2.setAttribute("class", "card--title");
  li.append(h2);

  // create the image bit

  const img = document.createElement("img");
  img.src = data[i].sprites.other["official-artwork"].front_default;
  li.append(img);
  img.setAttribute("class", "card--img")
  img.setAttribute("width", "256")

  const newUl = document.createElement('ul');
  newUl.setAttribute("class", "card--text");
  li.append(newUl)

  for (j = 0; j < data[j].stats.length; j++) {
    const newLi = document.createElement('li');
    newLi.innerText = (data[i].stats[j].stat.name).toLocaleUpperCase() + ": " + data[i].stats[j].base_stat
    newUl.append(newLi)
    newUl.style.listStyleType = 'none';
  }
}
console.log(data);
