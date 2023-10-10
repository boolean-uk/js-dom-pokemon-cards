console.log(data);
const container = document.querySelector(".cards");

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

data.forEach((pokemon) => {
    const h2 = document.createElement("h2");
    h2.setAttribute("class", "card--title");
    h2.innerText = capitalize(pokemon.name);
    container.append(h2);
}
);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);
