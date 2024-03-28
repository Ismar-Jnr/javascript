    // Grouping operator (  )

    let total = 2 + 3 * 5; //na matematica temos a regra da precedência, onde multiplicação/divisão são realizados primeiros, veja:
    console.log(total); // Multiplica e depois soma

    
    //porem podemos usar o operador de agrupamento ( ), para trocar a ordem dessas precedências;
    total = (2 + 3) * 5;
    console.log(total);
/*-----------------------------------------------------------------------------------------*/


    // Operadores lógicos (logical operadtors)

    //são valores booleanos, que resultarão em verdadeiro ou falso

    let pao = true;
    let queijo = true;


// AND (&&)
    console.log(pao && queijo); // true && true = true

// OR (||)
    console.log(pao || queijo); // true || true = true

// NOT (!)
    console.log(!pao); // !true = false;  o operador de negação, logicamente nego o valor do objeto e o altera. 
    // se ele é false, logo vira true;
    // se ele é true, logo vira false;
/*-----------------------------------------------------------------------------------------*/

    // Operadores de atribuição (Assignment)

    let x;
    console.log(x);

    //assignment
    // x = 1;
        console.log(x = 3);


    //addition assignment
    // x += 2;  ou   x = x + 2;
        x +=2;
        console.log(x);

    //subtraction assignment
    // x -= 2;   ou   x = x - 2;
        x -= 2;
        console.log(x);

    //multiplication assignment
    // x *= 2;   ou   x = x * 2;
        x *= 2;
        console.log(x);


    //division assignment
    // x /= 2;   ou  x = x / 2;
        x /= 2;
        console.log(x);


    //remainder (resto)
    // x %= 2;   ou x = x % 2;
    x %= 2;
    console.log(x);


    //exponetiation
    // x **= 2;   ou   x = x ** 2;
    x **= 2;
    console.log(x);

/*-----------------------------------------------------------------------------------------*/



