// Array/Vetores

const animals = [
    'Lion',
    'Monkey',
    {
        name: 'Cat',
        age: 3
    }
];

//acessar valores em um array
console.log(animals); //mostra todas as posições do array

console.log(animals[0]); //mostra apenas a posição 0 do array
console.log(animals[2]); //mostra apenas a posição 2 do array

console.log(animals[3]); // a posição 3 nao existe no array, logo ele retorna "undefined"

console.log(animals.length);// length = comprimento, logo essa linha mostra o comprimento/tamanho do array

console.log(animals[2].name); // acessa um objeto dentro do array e monstra o atributo requisitado, ex: animals[2].name;

console.log(animals[1].name);// a posição [1] do vetor é uma string, logo nao tem atributo para acessar, dessa forma retorna um valor "undefined". (ñ existe .name na string)





