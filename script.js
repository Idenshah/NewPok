// A container

const navbar = document.createElement('nav')
const header = document.createElement("h1");
header.textContent = "Pokedex";
const typeContainer = document.createElement("div");
typeContainer.classList.add("type-container");

const typeInfo = document.createElement('div')
typeInfo.classList.add('typeInfo')
const typeName = document.createElement('div')
typeName.classList.add('typeName')
const typeTotal = document.createElement('div')
typeTotal.classList.add('typeTotal')
const moveTop = document.createElement('div')
moveTop.classList.add('moveTop')
typeInfo.append(typeName,typeTotal,moveTop)
navbar.append(header,typeContainer,typeInfo)

moveTop.onclick = () =>{
  window.scrollTo({
    top : 0,
    behavior : 'smooth'
  })
}
const container = document.createElement("div");
container.classList.add("container");
container.id = "container";

const body = document.querySelector("body");
body.append(navbar, container);

// list of types
const types = [];
// sort pokedex array based on name 
const sortedPokedex = pokedex.sort((a, b) =>{
  if(a.name.toLowerCase() < b.name.toLowerCase()){
    return -1;
  }
  else if (a.name.toLowerCase() === b.name.toLowerCase()) {
    return 0;
  } else {
    return 1;
  }
})
// list of types
for (let i = 0; i < sortedPokedex.length; i++) {
  typeValue = sortedPokedex[i].type;
  for (t = 0; t < typeValue.length; t++)
    if (!types.includes(typeValue[t])) {
      types.push(typeValue[t]);
    }
}
// sort types' name
const sortedTypes = types.sort((a, b) => {
  if(a.toLowerCase() < b.toLowerCase()){
    return -1;
  }
  else if (a.toLowerCase() === b.toLowerCase()) {
    return 0;
  } else {
    return 1;
  }
})

sortedTypes.forEach((type) => {
  const typeBox = document.createElement("div");
  typeBox.classList.add("type-box");
  typeBox.textContent = `${type}`;
  typeContainer.append(typeBox);

  typeBox.onclick = function () {
    container.innerHTML = "";
    const pokemonBox = document.createDocumentFragment();
    const typeItems = []
    var totalHp = 0 
    var totalAttack = 0 
    for (let i = 0; i < sortedPokedex.length; i++) {
      
      if (sortedPokedex[i].type.includes(typeBox.textContent)) {
        const pokemon = document.createElement("div");
        pokemon.classList.add("pokemon");
        pokemon.id = sortedPokedex[i].id;
        pokemon.onclick = function () {
          window.location.href = sortedPokedex[i].url;
        };

        const pokemonName = document.createElement("div");
        pokemonName.classList.add("name");
        pokemonName.textContent = sortedPokedex[i].name;
        pokemon.append(pokemonName);

        const pokemonImage = document.createElement("img");
        pokemonImage.classList.add("image");
        pokemonImage.src = sortedPokedex[i].sprite;
        pokemonImage.alt = `${sortedPokedex[i].name}Image`;

        const imageBox = document.createElement("div");
        imageBox.classList.add("imageBox");
        imageBox.append(pokemonImage);
        pokemon.append(imageBox);

        const pokemonType = document.createElement("div");
        pokemonType.classList.add("type");
        pokemonType.textContent = sortedPokedex[i].type;
        pokemon.append(pokemonType);

        const pokemonBase = document.createElement("div");
        pokemonBase.classList.add("base");

        const pokemonHp = document.createElement("div");
        pokemonHp.classList.add("hp");
        pokemonHp.textContent = `HP:${sortedPokedex[i].base.HP}`;
        pokemonBase.append(pokemonHp);

        const pokemonAttack = document.createElement("div");
        pokemonAttack.classList.add("attack");
        pokemonAttack.textContent = `Attack:${sortedPokedex[i].base.Attack}`;
        pokemonBase.append(pokemonAttack);

        const pokemonDefense = document.createElement("div");
        pokemonDefense.classList.add("defense");
        pokemonDefense.textContent = `Defense:${sortedPokedex[i].base.Defense}`;
        pokemonBase.append(pokemonDefense);

        const pokemonSpAttack = document.createElement("div");
        pokemonSpAttack.classList.add("spAttack");
        pokemonSpAttack.textContent = `Sp.Attack:${sortedPokedex[i].base["Sp. Attack"]}`;
        pokemonBase.append(pokemonSpAttack);

        const pokemonSpDefense = document.createElement("div");
        pokemonSpDefense.classList.add("spDefense");
        pokemonSpDefense.textContent = `Sp.Defense:${sortedPokedex[i].base["Sp. Defense"]}`;
        pokemonBase.append(pokemonSpDefense);

        const pokemonSpeed = document.createElement("div");
        pokemonSpeed.classList.add("speed");
        pokemonSpeed.textContent = `Speed:${sortedPokedex[i].base.Speed}`;
        pokemonBase.append(pokemonSpeed);

        totalHp += sortedPokedex[i].base.HP
        totalAttack += sortedPokedex[i].base.Attack
        pokemon.append(pokemonBase);
        pokemonBox.append(pokemon);
        typeItems.push(pokemon)
      }
    }
    typeName.textContent = `Type: ${type} (${ typeItems.length})`
    typeTotal.textContent = `Total HP: ${totalHp} | Total Attack: ${totalAttack} `
    moveTop.textContent ='Back to Top'
    container.append(pokemonBox);
  };
});
