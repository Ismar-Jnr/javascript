// Manipulando Strings

// Verificar se o texto contém a palavra Amor

let phrase = "Eu quero viver!";
console.log(phrase.includes("Amor"));
// o metodo includes recebe como argumento o que deve verificar se existe ou nao existe
// Nesse caso, ele verifica se existe a palavra "Amor", e o retorno, logicamente é "false"


console.log(phrase.includes("quero"));
//Nesse caso, ele retorna "true", pois ele verificou e encontrou a palavra "quero"

//Obs: O includes é case-sensitivy