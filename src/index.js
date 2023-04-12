
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

const cardUL = document.querySelector('ul')

for (let i = 0; i < data.length; i++){
   const entry = data[i]
   console.log(entry)

   // create cards:
   const cardTile = document.createElement('li')
   cardTile.setAttribute("class", "card")
   cardUL.append(cardTile)


   // Card title
   const pokeName = document.createElement('h2')
   pokeName.innerText = entry.name
   pokeName.setAttribute("class", "card--title")
   cardTile.append(pokeName)


}
