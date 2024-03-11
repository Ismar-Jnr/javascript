/**
 * Scope
        Escopo determina a visibilidade de alguma variavel no JS
*************************************************************************************
 * Block Statement
        ``js
        //iniciando um bloco
        {
            //conteudo do bloco
        }
        //fechamento do bloco

        o bloco, tambem criara um novo escopo. o nome é "block-scoped"
*************************************************************************************
        ## Escopo de variavel tipo var
        var é global e poderá funcionar fora de um escopo de bloco
        var é global e tambem local, sendo assim o js reconhece a variavel em todo o codigo
        o nome disso é hoisting*/
        console.log('> existe x antes do bloco?', x); //existe com valor "undefined";

        {
            var x = 0;
        }

        console.log('> existe x depois do bloco?', x); // existe com valor "0";
/***********************************************************************************/
{
    //console.log('> existe z antes do bloco?', z); // existe mas nao reconhece, é como se nao existisse
    let z = 0;
    console.log('> existe z depois do bloco?', z); // existe
}
/***********************************************************************************/  
        /*
        ## Escopo de variavel tipo let e const
        let e const são locais e só funcionam no escopo onde foi criada
     */
    console.log('> existe y antes do bloco?', y); //Não existe antes do bloco (nem depois)

    {
        let y = 0; // a variavel y só existe dentro do bloco onde esta declarada
    }

    console.log('> existe y depois do bloco?', y); //Não existe depois do bloco (nem antes)
/**************************************************************************************/

