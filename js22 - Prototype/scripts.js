/*
    Prototype

    *prototype-based language
    *prototype chain (cadeias de prototipos)
    *__proto__

 */
//No JavaScript, quando criamos um objeto 'vazio', na realidade ele não esta 100% vazio. Existe um prototipo que foi criado previamente na linguagem do javascript.
//Logo, o objeto criado vai herdar todas as propriedades e metodos desse prototipo, que podemos chamar de prototipo ascendente.

//Isso não para por ai. Primeiro ele vai buscar no prototipo primario, que é: __proto__

//Depois, e se necessario, ele continua subindo e busca na prototype chain.

//Para saber as propriedades/métodos dos prototipos, abra o console no navegador, digite o tipo de dado e coloque um ponto(.), e ele ira mostrar todas as opções. Isso serve para qualquer tipo de dado. Object, Array, Boolean, Number, String...etc

///Exemplo:  ["a", "b"].length



//conclusão: Todo e qualquer tipo de dado no javascript é "embulhado" por um objeto que ja tem uma propriedade chamada: __proto__, onde podemos acessar todas as propriedades de maneira bem clara atraves do console no navegador. Dessa forma ele irá fazer uma cadeia de prototipos e vai puxar se aquele prototipo existe ou não.
