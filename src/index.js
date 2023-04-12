// console.log(data);
// console.log(data[0]);

//You can start simple and just render a single
//pokemon card from the first element

for (let i = 0; i <= 19; i++) {
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

  const newLi = document.createElement('li');
  newLi.innerText = (data[i].stats[0].stat.name).toLocaleUpperCase() + ": " + data[i].stats[0].base_stat
  newUl.append(newLi)

  const newLiTwo = document.createElement('li');
  newLiTwo.innerText = (data[i].stats[1].stat.name).toLocaleUpperCase() + ": " + data[i].stats[1].base_stat
  newUl.append(newLiTwo)

  const newLiThree = document.createElement('li');
  newLiThree.innerText = (data[i].stats[2].stat.name).toLocaleUpperCase() + ": " + data[i].stats[2].base_stat
  newUl.append(newLiThree)

  const newLiFour = document.createElement('li');
  newLiFour.innerText = (data[i].stats[3].stat.name).toLocaleUpperCase() + ": " + data[i].stats[3].base_stat
  newUl.append(newLiFour)

  const newLiFive = document.createElement('li');
  newLiFive.innerText = (data[i].stats[4].stat.name).toLocaleUpperCase() + ": " + data[i].stats[4].base_stat
  newUl.append(newLiFive)

  const newLiSix = document.createElement('li');
  newLiSix.innerText = (data[i].stats[5].stat.name).toLocaleUpperCase() + ": " + data[i].stats[5].base_stat
  newUl.append(newLiSix)

  newUl.style.listStyleType = 'none';




}
console.log(data);
