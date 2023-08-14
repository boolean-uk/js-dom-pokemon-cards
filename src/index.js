// console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
// console.log(data[0]);

const pokCard = document.querySelector(".cards");

data.forEach((element) => {
  const pokName = document.createElement("h2");
  pokName.innerText = element.name[0].toUpperCase() + element.name.slice(1);
  pokName.className = "card--title";

  const liEl = document.createElement("li");
  liEl.className = "card";

  const imgTag = document.createElement("img");
  imgTag.src = element.sprites.other["official-artwork"].front_default;
  imgTag.className = "card--img";
  imgTag.setAttribute("width", "256");

  const ulStat = document.createElement("ul");
  ulStat.className = "card--text";

  element.stats.forEach((stat) => {
    const values = document.createElement("li");
    values.innerText = stat.stat.name.toUpperCase() + ": " + stat.base_stat;
    ulStat.append(values);
  });

  // const pokHp = document.createElement("li");
  // pokHp.innerText = element.stats[0].stat.name.toString().toUpperCase();
  // const pokStats = element.stats[0].base_stat;

  // const pokAttack = document.createElement("li");
  // pokAttack.innerText = element.stats[1].stat.name.toString().toUpperCase();
  // const pokAttackNum = element.stats[1].base_stat;

  // const pokDefense = document.createElement("li");
  // pokDefense.innerText = element.stats[2].stat.name.toString().toUpperCase();
  // const pokDefNum = element.stats[2].base_stat;

  // const pokSpecAttack = document.createElement("li");
  // pokSpecAttack.innerText = element.stats[3].stat.name.toString().toUpperCase();
  // const pokSAttNum = element.stats[3].base_stat;

  // const pokSpecDefence = document.createElement("li");
  // pokSpecDefence.innerText = element.stats[4].stat.name
  //   .toString()
  //   .toUpperCase();
  // const pokSDefNum = element.stats[4].base_stat;

  // const pokSpeed = document.createElement("li");
  // pokSpeed.innerText = element.stats[5].stat.name.toString().toUpperCase();
  // const pokSpeedNum = element.stats[5].base_stat;

  liEl.append(pokName);
  liEl.append(imgTag);

  liEl.append(ulStat);

  // ulStat.append(pokHp);
  // pokHp.append(": ", pokStats);

  // ulStat.append(pokAttack);
  // pokAttack.append(": ", pokAttackNum);

  // ulStat.append(pokDefense);
  // pokDefense.append(": ", pokDefNum);

  // ulStat.append(pokSpecAttack);
  // pokSpecAttack.append(": ", pokSAttNum);

  // ulStat.append(pokSpecDefence);
  // pokSpecDefence.append(": ", pokSDefNum);

  // ulStat.append(pokSpeed);
  // pokSpeed.append(": ", pokSpeedNum);

  pokCard.append(liEl);
});
