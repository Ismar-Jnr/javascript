/**
 * Strings
 
 * Strings são cadeias de caracteres. Ex: ABDC. Ou seja, textos
 
    Para usar textos em js é preciso apontar o texto em questao
    para apontar usa-se as seguintes formas

    " " // Aspas duplas
    ' ' // Aspas simples
    ` ` // template literals ou template strings
 */
console.log('Ismar'); // Aspas simples
console.log("Ismar"); // Aspas duplas
console.log(`Ismar`); // Template

// Existem as 3 possibilidades por uma questão de hierarquia
//Caso queria colocar "Aspas duplas" dentro do codigo, deve-se utilizar 'Aspas simples'.
// Exemplo
console.log('"Is"+"mar"'); // Dessa forma as "Aspas duplas" são interpretadas como Strings
// O mesmo serve para as `Crases ou Templates` 
console.log(`Quero usar " " " "Aspas duplas" " " "  e ' ' ' 'Aspas simples' ' ' ' no meu texto`);
console.log(`As crases/templates
tambem permitem usar multi-linhas
na digitação do
meu texto`); //As crases/templates tambem permitem usar multi-linhas na digitação do meu texto
console.log(`Crases tambem permitem usar expressões como: ${1+1}`); //Crases tambem permitem usar expressões como: ${1+1}
