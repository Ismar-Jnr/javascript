// Operador Condicional (Ternário)

// Dependendo da condição, nós receberemos valores diferentes

// Condição entao valor 1 senão valor 2
// condition ? value1 : value2

//Exemplos

//Café da manha top
    let pao = true;
    let queijo = false;
    
    const niceBreakfast = pao && queijo ? 'Café top':'Café ruim';
    console.log(niceBreakfast); 
    //operador && = 2 valores true para retornar true;


    const opçao2 = pao || queijo ? 'Café top':'Café ruim';
    console.log(opçao2);
    //operador || = 1 valor true para retornar true;
    //         || = 2 valores false para retornar false;                  
    
    



//Maior de 18
    let age = 16;
    const canDrive = age >= 18 ? 'can drive' : 'cannot drive';
    console.log(canDrive);