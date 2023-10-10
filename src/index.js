
console.log(data);
console.log(data[0]);
//You can start simple and just render a single 
//pokemon card from the first element
data.forEach((Element) => {



const list = document.querySelector('ul')
list.style.listStyle = 'none'




const  card = document.createElement('li')
card.setAttribute('class','card')
list.append(card)

//for h2
const pokemon1 =document.createElement('h2')
pokemon1.setAttribute('class','card--title')
// pokemon1.innerText = 'Bulbasaur'
pokemon1.innerText = `${Element.name}`
card.append(pokemon1)
pokemon1.style.textTransform = 'capitalize'

//for img

const image= document.createElement('img')
image.setAttribute('class','card--img')
image.setAttribute('width','256')
// image.setAttribute('src','https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png')
image.setAttribute('src',`${Element.sprites.other["official-artwork"].front_default}`)
card.append(image)

//for ul

const insideList = document.createElement('ul')
insideList.setAttribute('class','card--text')
card.append(insideList)

insideList.style.listStyle = 'none'
insideList.style.lineHeight = '2rem'
//for li inside ul

const list1 = document.createElement('li')
// list1.innerText = 'HP: 45'
list1.innerText = `HP:${data[data.indexOf(Element)].stats[0].base_stat}`
insideList.append(list1)

const list2 = document.createElement('li')
// list2.innerText = 'ATTACK: 49'
list2.innerText = `ATTACK:${data[data.indexOf(Element)].stats[1].base_stat}`
insideList.append(list2)

const list3 = document.createElement('li')
// list3.innerText = 'DEFENSE: 49'
list3.innerText = `DEFENSE:${data[data.indexOf(Element)].stats[2].base_stat}`
insideList.append(list3)

const list4 = document.createElement('li')
// list4.innerText = 'SPECIAL-ATTACK: 65'
list4.innerText = `SPECIAL-ATTACK:${data[data.indexOf(Element)].stats[3].base_stat}`
insideList.append(list4)

const list5 = document.createElement('li')
// list5.innerText = 'SPECIAL-DEFENSE: 65'
list5.innerText = `SPECIAL-DEFENSE:${data[data.indexOf(Element)].stats[4].base_stat}`
insideList.append(list5)

const list6 = document.createElement('li')
// list6.innerText = 'SPEED: 45'
list6.innerText = `SPEED:${data[data.indexOf(Element)].stats[5].base_stat}`
insideList.append(list6)





});