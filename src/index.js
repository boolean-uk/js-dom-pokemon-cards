
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element

data.forEach((Element)=>{
const list = document.querySelector('ul')
const card = document.createElement('li')
card.setAttribute('class','card')
list.append(card)

const pokemonName = document.createElement('h2')
pokemonName.setAttribute('class','card--title')
//pokemonName.innerText= 'Bulbasaur'
//pokemonName.innerText = `${data[data.indexOf(Element)].name}`
pokemonName.innerText = `${Element.name}`
card.append(pokemonName)

//imgg

const image = document.createElement('img')
image.setAttribute('class','card--img')
image.setAttribute('width','256')
//image.setAttribute('src','https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png')
//image.setAttribute(`${Element.sprites}`)
image.setAttribute('src', `${Element.sprites.other["official-artwork"].front_default}`)
card.append(image)


const anotherList = document.createElement('ul')
anotherList.setAttribute('class','card--text')
card.append(anotherList)



const anotherItems = document.createElement('li')
anotherItems.innerText = `HP:${data[data.indexOf(Element)].stats[0].base_stat}`
anotherList.append(anotherItems)




const anotherItem1 = document.createElement('li')
//anotherItem1.innerText = 'ATTACK: 49'
anotherItem1.innerText = `ATTACK:${data[data.indexOf(Element)].stats[1].base_stat}`
anotherList.append(anotherItem1)

const anotherItem2 = document.createElement('li')
//anotherItem2.innerText = 'DEFENSE: 49'
anotherItem2.innerText = `DEFENCE:${data[data.indexOf(Element)].stats[2].base_stat}`
anotherList.append(anotherItem2)

const anotherItem3 = document.createElement('li')
//anotherItem3.innerText = 'SPECIAL-ATTACK: 65'
anotherItem3.innerText = `SPECIAL-ATTACK:${data[data.indexOf(Element)].stats[3].base_stat}`
anotherList.append(anotherItem3)

const anotherItem4 = document.createElement('li')
//anotherItem4.innerText = 'SPECIAL-DEFENSE: 65'
anotherItem4.innerText = `SPECIAL-DEFENSE:${data[data.indexOf(Element)].stats[4].base_stat}`
anotherList.append(anotherItem4)

const anotherItem5 = document.createElement('li')
//anotherItem5.innerText = 'SPEED: 45'
anotherItem5.innerText = `SPEED:${data[data.indexOf(Element)].stats[5].base_stat}`
anotherList.append(anotherItem5)



}
)

console.log(data[0])