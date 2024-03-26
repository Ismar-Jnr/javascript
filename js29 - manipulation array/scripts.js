//Manipulando arrays

//contar elementos de um array

console.log([
    "a",
    {type: "array"}, 
    function(){ return "alo"}
])

    // Um array pode contar varios tipos de dados, como visto acima, e tambem pode ter quebra de linhas

    console.log(["a", "b", "c"].length) // length mostra quantos elementos tem no array
    /*___________________________________________________________________________________*/
    
    
    

/**_____________________________________________________________________________ */
// Transformar uma cadeia de caracteres(string) em elementos de um array

let word = "manipulação";

console.log(Array.from(word))
// Array ja é um objeto global no javascript, com isso basta atrelar a ele um metodo chamado from(), que recebe como argumento uma string, e assim ele transforma cada caracter da string em elementos do array.
/**_______________________________________________________________________________________ */


/**_______________________________________________________________________________________ */



    