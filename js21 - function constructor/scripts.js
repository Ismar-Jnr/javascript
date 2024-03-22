/*
Function () contructor

* expressão new
* criar um novo objeto
* this keyword
 */

function Person(name) {
    
    // Esse "this" dentro da função sempre vai referenciar a 'const ismar' que está fora da função. e o 'const ismar' sempre vai ser referenciado como this. --- veja como funciona
    this.name = name //name é passado como parametro da função, e quando criar uma new Person(), basta passar o argumento. Nesse caso o argumento é "Ismar".

    
    //vamos criar agora uma outra propriedade para os objetos abaixo (ismar e joao)
    this.walk = function(){
        return this.name + " está andando"
    }
    //o this é um objeto comum dentro da função. Mas na hora que criar um objeto fora da função com a expressão 'new' eles herdarão esses atributos e funcionalidades.

}



//quando usamos a expressão new seguida da função, a função se torna uma função contrutora, e ai ela irá retornar para a "const ismar" um objeto que ela criará.

const ismar = new Person("Ismar")/* Ismar é o Argumento passado para o parametro 'name' na função contrutora*/   

//agora, a 'const ismar' tem uma propriedade chamada name; pois a função construtora criou para ele.
console.log(ismar.walk())
//ismar recebeu o atributo 'walk()' criado pela função contrutora.

//veja outro exemplo



const joao = new Person("Joao")
console.log(joao.walk())
//joao tambem recebeu o atributo 'walk()' criado pela função contrutora.



//Obs: iniciar funções contrutoras com letras maiúsculas (function Person) é uma boa pratica.
//Porque no JavaScript ja existem diversas funções contrutoras como String, Number, Date etc.


//Exemplo: 

let nameTeste = new String("Testando")
console.log(nameTeste)


let date = new Date("2020-12-01")
console.log(date)
