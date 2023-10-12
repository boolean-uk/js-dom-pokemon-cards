
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);
const firstPokemon= data[0];
const makeH2= document.createElement("h2");
makeH2.innerText = data[0].name;
console.log(makeH2)
const cards=document.querySelector('.cards'); //when javascript sees only texts, ıt reads it but doesnt define it .you need to add quotes to make it a string
cards.append(makeH2);

