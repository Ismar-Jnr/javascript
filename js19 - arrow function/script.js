// arrow function


//essa forma, é o jeito mais curto de escrever uma função expression
const sayMyName = () => {
    console.log('Ismar')
}

//lembre-se de chamar a função após sua declaração, pois nesse caso ela nao sofre o hoisting
sayMyName()

const myName = (name) => {
    console.log(name)
}

myName('Junior')