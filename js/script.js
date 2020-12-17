let pokemonRepository = (function (){


  let pokemonList = [
    {
      name: "Bulbasar",
      type: ["grass", "poison"],
      height: 0.7
    },
    {
      name: "Squirtle",
      type: "water",
      height: 0.5
    },
    {
      name: "Charizard",
      type: ["fire", "water"],
      height: 1.7
    },
    
  ];

let pokemonRepository = (function () {
  let list = [];

  function add(pokemon) {
    list.push(pokemon);
  }

  function addListItem(pokemon) {
    let list = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button");
    listItem.appendChild(button);
    list.appendChild(listItem);
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }
  function showDetails(pokemon) {
    console.log(pokemon.name);
  }
  function getAll() {
    return list;
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };
})();

pokemonList.forEach(function (pokemon) {
  pokemonRepository.add(pokemon);

});
let allPokemon = pokemonRepository.getAll();
console.log("my initial pokemon list: ", allPokemon);

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
})})