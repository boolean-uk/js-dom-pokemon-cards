// console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
// console.log(data[0]);

const pokCard = document.querySelector(".cards");

data.forEach((element) => {
  const pokName = document.createElement("h2");
  pokName.innerText = element.name;
  pokName.className = "card--title"

  const liEl = document.createElement("li");
  liEl.className = "card";

  const imgTag = document.createElement("img");
  imgTag.src = element.sprites.front_default;
  imgTag.className = "card--img"

  const ulStat = document.createElement("ul")
  ulStat.className="card--text"


  const pokHp = document.createElement("li");
  pokHp.innerText = element.stats[0].stat.name;
  pokHp.className = "card--text";

  const pokStats = document.createElement("li");
  pokStats.innerText = element.stats[0].base_stat;
  

  const pokAttack = document.createElement("li");
  pokAttack.innerText = element.stats[1].stat.name;


  const pokAttackNum = document.createElement("li");
  pokAttackNum.innerText = element.stats[1].base_stat;


  const pokDefense = document.createElement("li");
  pokDefense.innerText = element.stats[2].stat.name;
 

  const pokDefNum = document.createElement("li");
  pokDefNum.innerText = element.stats[2].base_stat;
  


  liEl.append(pokName);
  liEl.append(imgTag);

  liEl.append(ulStat)

  pokStats.append(pokHp);
  ulStat.append(pokStats);

 ulStat.append(pokAttackNum);
  pokAttackNum.append(pokAttack);
 

  pokDefNum.append(pokDefense);
  ulStat.append(pokDefNum);

  pokCard.append(liEl);
});
