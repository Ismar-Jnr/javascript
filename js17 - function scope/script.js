// function scope

let subject = 'create video'

function createThink(subject){ //neste caso, o parametro 1 foi trazido de uma variavel/escopo externo.
    subject = 'study'; //a atribuição/mudança de valores do "subject" nesse caso, irá afetar apenas o resultado dentro do escopo da função "createThink"
    return subject;
};

console.log(subject); //o "subject" externo, não é afetado pela mudança/atribuição do "subject" da função, que é o parametro 1; logo seu valor permanece 'create video';


console.log(createThink(subject)); // o "subject" do escopo da função tem seu valor alterado para 'study';

//Atente-se ao parametro, veja se ele esta recebendo um objeto/variavel exterior, e se esse for o caso, qualquer mudança em valor será afetado apenas dentro do escopo da função;

//No entanto se o parametro da função não recebe objeto/variavel exterior e a função altera seu valor, qualquer mudança no valor dentro do escopo da função afetara o objeto/variavel tambem fora do escopo da função.
//Veja no exemplo a seguir
/******************************************/

let naoRecebe = 'Valor nativo';

function mudarValor(){
    naoRecebe = 'Valor alterado';
};


/// ----> ANTES DA CHAMADA DA FUNÇAÕ = VALOR NATIVO
//________________________________________________________
console.log(naoRecebe); //Antes da chamada da função - Ainda possui o valor nativo da variavel




/// ----> CHAMADA DA FUNÇÃO  <---- ///
mudarValor(); // Chamada da função, alterando o valor da variavel




/// ----> APÓS A CHAMADA DA FUNÇÃO = VALOR ALTERADO PELA FUNÇÃO
//________________________________________________________
console.log(naoRecebe); // Apos a chamada da função, a variavel (que não foi passada por parametro), tem o seu valor alterado mesmo fora do escopo da função;
