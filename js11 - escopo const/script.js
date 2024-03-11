// Escopo variavel const

const abc = 1; // variaveis const não podem mudar de valor 
{
    const abc = 0; // apesar de ter o mesmo nome da variavel anterior, o escopo é diferente, logo a variavel é difernete tambem;
    console.log('> existe abc', abc);
}
console.log('> existe abc', abc);