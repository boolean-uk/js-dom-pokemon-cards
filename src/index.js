// console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
// console.log(data[0]);


const pokCard = document.querySelector(".cards");

data.forEach((element) => {
  // console.log(element)
  const liEl = document.createElement("li");
  liEl.innerText = element.name;
  liEl.className = "card";
  const imgTag = document.createElement("img");
  imgTag.src = element.sprites.back_default;
  liEl.append(imgTag);
  pokCard.append(liEl);
});
