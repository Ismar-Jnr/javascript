// Manipulando arrays

let techs = ["html", "css", "js", "C#", "python"];
console.log(techs);
    
//------------------------------------------------------------------//
    // adicionar um item no fim
    techs.push("nodejs"); // o método push() ja sabe qual o ultimo elemento, e como acrescentar algo nele
    console.log(techs);


//------------------------------------------------------------------//
    //adicionar no começo
    techs.unshift("sql"); // o método unshift() acrescenta no começo do array
    console.log(techs);


//------------------------------------------------------------------//
    //remover do fim
    techs.pop(); //método pop() remove ultimo item do array. Obs: Caso não passe argumentos
    console.log(techs);


//------------------------------------------------------------------//
    //remover do começo
    techs.shift(); //método shift() remove primerio item do array. Obs: Caso não passe argumentos


//------------------------------------------------------------------//
    //pegar somentos alguns elementos do array
    console.log(techs.slice(1,3));  //slice = cortar
    //o primeiro argumento do slice() é referente a posição de inicial que ele deve retirar
    //o segundo argumento do slice() é referente a posição final do array, porem o segundo argumento marca a posição bruta do vetor, ou seja, posição 0 = 1; 
                                                    // posição 1 = 2;
                                                    // posição 2 = 3;
                                                    // e sucessivamente;
    


//------------------------------------------------------------------//
    //remover 1 ou mais itens em qualquer posiçao do array
    techs.splice(1, 1); //o método splice remove itens do array. O primeiro argumento do splice() é o indice do array que indica qual posição vc deseja começar a remoção, o segundo argumento representa quantos itens vão ser removidos depois daquele ponto.
    
    

//------------------------------------------------------------------//
    //encotrar a posição de um elemento do array
    let index = techs.indexOf('C#'); // O método indexOf() busca a posição do array pelo conteudo daquela mesma posição;

    console.log(index); // let index recebe e retorna a posição no console

    techs.splice(index, 1); // remove o elemento da posição index, que foi retornada pelo metodo indexOf();

    console.log(techs)


