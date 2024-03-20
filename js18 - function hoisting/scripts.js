// function hoisting
sayMyName();

function sayMyName(){
    console.log('Ismar');
};
//Da forma acima, a função sofre o hoisting, e é mostrado o valor no console.


/************ */

sayMyName2()

const sayMyName2 = function(){
    console.log('Junior')
}

// Da segunda forma, a função não sofre o hoisting, logo nao retorna nada