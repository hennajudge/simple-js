let pokemonList = [
  { name: "Bulbasaur", height: 0.7, types: ["grass"] },
  { name: "Charmander", height: 0.6, types: ["fire"] },
  { name: "Golbat", height: 1.6, types: ["flying", "poison"] },
  { name: "Alakazam", height: 1.5, types: ["psychic"] },
];

let pokemonList2 = [
  { name: "bird", height: 0.7, types: ["grass"] },
  { name: "cat", height: 0.6, types: ["fire"] },
  { name: "dog", height: 1.6, types: ["flying", "poison"] },

function printArrayDetails(list){
  for (let i = 0; i < list.length; i++){
    document.write("<p>" + list[i].name + "</p>")
    console.log(list[i].name);
    function add(num1, num2) {
      return num1+num2;
    }
    
    function subtract(num1, num2) {
      return num1-num2;
    }
    
    function multiply(num1, num2) {
      return num1*num2;
    }
    
    function divide(num1, num2){
      if(num2===0){
        return "Not Allowed"
      }
      else {
        return num1/num2;
      }
    }
    
    
  }
}

printArrayDetails(pokemonList2);
printArrayDetails(pokemonList);