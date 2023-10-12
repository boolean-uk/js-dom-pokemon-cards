console.log(data);
//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);
// console.log(data.length)
 for(let i=0; i<data.length; i++){
    console.log(i)
const Pokemon = data[i];
// console.log(Pokemon.name);
// console.log(Pokemon.sprites.other['official-artwork'].front_default);
// console.log(Pokemon.stats);
// console.log(Pokemon.stats[0].stat.name);
// console.log(Pokemon.stats[0].base_stat);
// Pokemon.stats.forEach(statData => {
// console.log(statData.stat.name);
// console.log(statData.base_stat);
// })
const cardArray = document.querySelector('.cards')
const card = document.createElement('li')
card.className = 'card'
cardArray.append(card);
const h2 = document.createElement('h2');
h2.innerText = `${Pokemon.name}`;
card.append(h2)
const img = document.createElement('img');
img.src = Pokemon.sprites.other['official-artwork'].front_default;
card.append(img);
const ul = document.createElement('ul');
Pokemon.stats.forEach((statData) =>{
    const li = document.createElement('li')
    li.innerText = `${statData.stat.name.toUpperCase()}: ${statData.base_stat}` ;
 ul.append(li)
 });
card.append(ul)
 }

