/*    Operadores unários
        - typeof
        - delete          */

        const person = {
            name: 'Ismar',
            age: 25,
        };        
        
        console.log(typeof "ismar"); // mostra o tipo
        
        console.log(person); //name e age

        delete person.age //delete - deleta a propriedade selecionada

        console.log(person); //apenas name agora
/*-----------------------------------------------------------------------------------------*/

//        Operadores Aritiméticos
//          - multiplicação
                    console.log(3.2 * 5); // asterico (*)


//          - divisão
                    console.log(12 / 2); // barra   (/)


//          -soma
                    console.log(34 + 67); // sinal (+)


//          -subtração
                    console.log(34 - 23); // sinal (-)


//          -resto da divisão
                    let resto;
                    resto = 11 % 3;
                    console.log(resto);  // percentual (%)


//          -incremento
                    let increment = 0;
                    increment++; 
                    console.log(increment); // sinal (++)
                    // note que existe uma diferença entre incrementar antes e depois, veja a seguir:
                    console.log(increment++); //Resultado = 1, pois ele só irá incrementar na linha seguinte
                    console.log(increment); // Resultado = 2;
                    console.log(++increment); //Resultado = 3, pois ele incrementa antes de mostrar;




//          -decremento
                    let decrement = 0; // sinal (--)
                    console.log(decrement--); // Resultado = 0; pois o decremento só é computado na proxima linha;
                    console.log(decrement); //Resultado = -1;
                    console.log(--decrement); // Resultado = -2; pois ele decrementa antes de mostrar;



 //         -exponencial
            console.log(3 ** 3); // sinal (**)
            console.log(4 ** 4); // 4 elevado a 4
            console.log(3 ** 7); // 3 elevado a 7
/*-----------------------------------------------------------------------------------------*/
            

        






        
