// Manipulando Strings e Numeros

// Transformar String em Número e Número em String

let string = "123"
console.log(Number(string))

let number = 321
console.log(String(number))
/**************************/



// 1 - Contar quantos caracteres tem uma palavra e quantos digitos tem um numero
let word = "Paralelepipedo"
console.log(word.length)

let numeroqualquer = 1234
console.log(numeroqualquer.length) //o resultado será undefined, pois number nao tem a propriedade length, logo temos que converter o numero em string, veja:
console.log(String(numeroqualquer).length)
/********************************************/




// 2 - Transformar um numero quebrado com 2 casas decimais e trocar ponto por vírgula
let otherNumber = 354.46542
console.log(otherNumber.toFixed(2).replace(".", ","))
