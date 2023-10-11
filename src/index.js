
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

const cards = document.querySelector(".cards")

const card = document.createElement("li")
card.setAttribute("class", "card")

// console.log(card)

const title = document.createElement("h2")
title.setAttribute("class", "card--title")
let Cname = data[0].name
const Pname = Cname[0].toUpperCase() + Cname.slice(1, 20)

title.innerText = `${Pname}`
card.append(title)

console.log(card)

const source = data[0].sprites.other["official-artwork"].front_default

const img = document.createElement("img")
img.setAttribute("class", "card--img")
img.setAttribute("width", "256")
img.setAttribute("src", source)
card.append(img)

// console.log(img)

const stats = document.createElement("ul")
stats.setAttribute("class", "card--text")

console.log(stats)


//collect needed data
const pokemonStats = data[0].stats
const pokemonHp = pokemonStats[0].base_stat
const pokemonAttack = pokemonStats[1].base_stat
const pokemonDefense = pokemonStats[2].base_stat
const pokemonSpecial = pokemonStats[3].base_stat
const pokemonSpecialD = pokemonStats[4].base_stat
const pokemonSpeed = pokemonStats[5].base_stat

//note the 0 could be changed to loop through and change 

// console.log(pokemonStats)
// console.log(pokemonAttack)




 //creating stat list items

 const hp = document.createElement("li")
 hp.innerText = `HP: ${pokemonHp}`
//  stats.append(hp, attack)

 const attack = document.createElement("li")
 attack.innerText = `ATTACK: ${pokemonAttack}`
 
 const defense = document.createElement("li")
 defense.innerText = `DEFENSE: ${pokemonDefense}`
 
 const specialA = document.createElement("li")
 specialA.innerText = `SPECIAL-ATTACK: ${pokemonSpecial}`
 
 const specialD = document.createElement("li")
 specialD.innerText = `SPECIAL-DEFENSE: ${pokemonSpecialD}`
 
 const speed = document.createElement("li")
 speed.innerText = `SPEED: ${pokemonSpeed}`
 
 
 stats.append(hp, attack, defense, specialA, specialD, speed)

 card.append(stats)
 cards.append(card)

 //use code below to incriment through data and add all cards

 