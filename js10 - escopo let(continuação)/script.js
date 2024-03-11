//Escopo variavel let
let abc =1;
{
     abc = 0;
    console.log('> qual o valor de abc?' , abc); // valor = 0;
}
console.log('> qual o valor de abc?', abc); // valor = 0; -> Nesse caso o valor de abc é 0 pois a variavel foi trazida de um escopo externo, ao inves de ter sido declarada dentro do bloco de escopo;
/******************************************************************************************/
let xyz = 1;
{
    let xyz = 0;
    console.log('> qual o valor de xyz?' , xyz); // valor = 0;
}

console.log('> qual o valor de xyz?', xyz);// Valor = 1; -> Nesse caso o valor de xyz é 1 pois ela foi declarada novamente no bloco de escopo e não trazida de um escopo externo; dessa forma, qualquer alteração na variavel fica destinada apenas ao escopo em que esta declarada
/******************************************************************************************/