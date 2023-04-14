
for (i = 0; i < data.length; i++) {
    const cards = document.querySelector('.cards');
    const li = document.createElement('li');
    li.setAttribute('class', 'card');
    li.style.listStyleType = 'none';
    cards.append(li);

    const h2 = document.createElement('h2');
    h2.setAttribute('class', 'card--title');
    h2.innerText = data[i].name.charAt(0).toUpperCase() + data[i].name.slice(1)
    li.append(h2);

    const img = document.createElement('img')
    img.setAttribute('class', 'card--img');
    li.append(img);
    img.setAttribute('width', '256');
    img.src = data[i].sprites.other["official-artwork"].front_default;
    li.append(img);

    const newUl = document.createElement('ul');
    newUl.setAttribute('class', 'card--text')

    li.append(newUl)
    
    for (j = 0; j < data[j].stats.length; j++) {
    const newLi = document.createElement('li');
    newLi.innerText = data[i].stats[j].stat.name.toUpperCase() + ": " + data[i].stats[j].base_stat;
    newLi.style.listStyleType = 'none';
    newUl.append(newLi);
    }
    const newLiTwo = document.createElement('li');
    const arr = ['GAMES APPEARED: ', Math.floor(Math.random() * 100)];
    const str = arr.join("");
    newLiTwo.innerText = str;
    newLiTwo.style.listStyleType = 'none';
    newUl.append(newLiTwo);

    


    let toggle = true;
    img.addEventListener('click', function(){
    toggle = !toggle;
    if(toggle){
        img.src = 'img//one.jpeg'; 
        img.setAttribute('height', '256')
    } else {
        img.src = 'img//two.jpeg'; 
        img.setAttribute('height', '256');
    }
    })
}









//You can start simple and just render a single 
//pokemon card from the first element

