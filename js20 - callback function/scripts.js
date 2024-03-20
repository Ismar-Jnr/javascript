// callback function

function sayMyName(name){

    console.log('antes de executar a função callback')
    name()
    

    console.log('depois de executar a função callback')
}

//pode-se passar todos os tipo de dados para uma função, inclusive outra função
//no caso abaixo, estamos passando uma função arrow para outra função
sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)