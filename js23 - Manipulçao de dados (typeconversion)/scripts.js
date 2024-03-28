/*
    Type conversion (typecasting) vs Type coersion

    *Alteração de um tipo de dado para outro tipo

    type conversion é feita pelo proprio dev

    type coresion é feita pelo proprio js (eventualmene o js usa o type conversion)
*/

// sinal de '+' pode ser usado para efetuar soma ou concatenação

console.log('9' + 5) //veja esse exemplo: usamos o sinal de '+'. porem nao foi efetuada a soma, pois o primeiro numero é um tipo de dado string. Logo o javascript "forçou" (fez uma type coersion) o segundo numero a virar uma string, e concatenou ambos, resultando em 95.


//No exemplo abaixo, nos iremos fazer uma type conversion, veja:

console.log(Number('12') + 7) //Dessa forma, transformamos o '12' que era uma string e um Number, sendo assim, o js realizou a soma, resultando em 19.


//Basicamente essas são as diferençao entra type converstion (typecasting) e type coersion.
