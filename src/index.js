


console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);



const masterUl = document.querySelector("body > ul")
const cardContent = document.createElement('li')
// const cardContent2 = document.createElement('li')
//


masterUl.append(cardContent)
// masterUl.append(cardContent2)
// masterUl.append(cardContent)

for (let i = 0; i <= data.length; i++) {
  cardContent.classList.add('card', `${i}`)
}

console.log(data.length)
