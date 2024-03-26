// Manipuland strings e arrays

// Separe um texto que contem espaçoes, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _



let phrase = "Eu quero um estágio!";
// O método split irá receber como argumento, o que deve separar na frase, logo, se colocar " ", (espaço), ele irá separar pelos espaços da frase. Se colocasse outro caracter, ele iria separar a frase no caracter apontado.
let myArray = phrase.split(" ");
console.log(myArray)

// O método join aplicado em um array, ele irá juntar automaticamente o array, e dentro dos parenteses() e entre aspas " ", deve-se colocar o tipo de separado que deve entrar, nesse caso o Underscore "_"
let phraseWithUnderscore = myArray.join("_");
console.log(phraseWithUnderscore.toLocaleUpperCase());