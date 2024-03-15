// 1. Declare uma variavel de nome weight

let weight;
// 2. Que tipo de dado é a variavel acima?
console.log(typeof weight)
/**
 * 3. Declare uma variável e atribua valores para cada um dos dados:
    * name: String
    * age: Number (integer)
    * starts: Number (float)
    * isSubscribe: Boolean
 */
let name = "Ismar";;
let age = 25;
let stars = 4.8;
let isSubscribe;


/**
 * 4. A variável student abaixo é de que tipo de dados?
 * R: Object
 * 
 * 4.1 Atribua a ela a mesmas propriedades e valores do exercicio 3
 * 
 * 
 * 4.2 Mostre no console a seguinte mensaem:
 */

let student = {
    name: "Ismar",
    age: 25,
    weight: 74.8,
    isSubscribe: true
}

let Teves = {
    name: "Teves",
    age: 28,
    weight: 80.8,
    isSubscribe: true
}
console.log(`${student.name} de idade ${age} pesa ${student.weight}`)

/**
 * 5. Declare uma variavel do tipo array, de nome students e atribua a ela nenhum valor
 */

let students = []

/**
 * 6. Reatribua para a variavel acima, colocando dentro dela o objeto student da questao 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array)
*/


students = [
    student
]

console.log(students)

/**
 * 7. Coloque no console o valor da posição zero do array acima
 */

console.log(students[0])

/**
 * 8. Crie um novo student e coloque na posição 1 do array students
 */

const john = {
    name: "John",
    age: 22,
    weight: 96.5,
    isSubscribe: true
}
//Uma forma de fazer a tribuição
students = [
    student,
    john
]

console.log(students)

//Outra forma de fazer a tribuição
students[2] = Teves

console.log(students)


/**
 * 9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua respota, rode o código e veja se acertou.
 * 
 *  console.log(a)
 *  var a = 1;
 * 
 *          //////  VOCE ERROU SEU BURRO //////
 *          //////       ESTUDA MAIS     //////
 */

console.log(a)
var a = 1;