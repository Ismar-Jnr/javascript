let total = 0;


//Tambem é possivel declarar funções dentro de variaveis
//são chamadas de function anonymous ou function expression
const sum = function(number1, number2/*Parametros da função*/) {
    let total = number1 + number2; //sempre 
    return number1 + number2;
};
/*******************/

//rodando a função
//running function
sum(2, 3); 

//Na linha acima, ao chamar a função e inserir os numeros, estamos passando argumentos para a função. Passando argumentos por parametros.
/*******************/

//passando argumentos por parametros
sum(2, 3); 
sum(5, 8); 
sum(565, 312); 


/******************************* */
let teste1 = 34;
let teste2 = 25;

sum(teste1, teste2);

console.log(`o numero 1 é ${teste1}`);
console.log(`o numero 2 é ${teste2}`);
console.log(`a soma é ${sum(teste1, teste2)}`); // a chamada da função dentro do console, passa os argumentos(teste1 e teste2) para a função, e a função retorna a soma dos argumentos.
/************************* */

console.log(total); //a chamada dese total é o da primeira linha de codigo, onde total = 0; diferentemente do total dentro da função, onde total = 59; devido a soma dos argumentos.