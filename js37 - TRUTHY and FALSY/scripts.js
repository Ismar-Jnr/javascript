/*
    FALSY
        => Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

        Exemplos de false:
                false
                0
                -0
                ""
                null
                undefined
                NaN
 */

                // Exemplos de "false" onde obrigatoriamente precisa de um booleano
        console.log(false ? 'verdadeiro' : 'falso');
        console.log(0 ? 'verdadeiro' : 'falso');
        console.log(null ? 'verdadeiro' : 'falso');
        console.log(NaN ? 'verdadeiro' : 'falso');


/*
    TRUTHY
        => Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)

        Exemplos de true:
                true
                {}
                []
                1
                3.23
                "0"
                "string"
                -1
                Infinity
                -Infinity
 */

                // Exemplos de "true" onde obrigatoriamente precisa de um booleano
        console.log(true ? 'verdadeiro' : 'falso');
        console.log({} ? 'verdadeiro' : 'falso');
        console.log(3.23 ? 'verdadeiro' : 'falso');
        console.log([] ? 'verdadeiro' : 'falso');