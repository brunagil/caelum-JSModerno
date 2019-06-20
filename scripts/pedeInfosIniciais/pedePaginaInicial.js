//--declaração de variável iria no topo?
//--Hoisting-Içamento
//var paginaInicial = undefined (recebe um valor, e esse valor é undefined)

//const paginaInicial = prompt('oi')

//--é LET pois ele vai ser concatenado no if abaixo dele, ganhando outro valor

//--conversão automática de uma variável de um tipo pra outro
//--exemplo: paginaInicial citada como false e por dentro

//if(paginaInicial !== null && paginaInicial !== false)

//--Type Coercing - Conversão que o JS faz de forma automática, por baixo dos 'panos'
//--quando ele converte uma variável para outro tipo para fazer o script rodar

//const aceitouSalvar = JSON.parse(localStorage.getItem('aceitouSalvar'))   

import aceitouSalvar from './pedeAceitouSalvar.js'

if(aceitouSalvar === null || aceitouSalvar === true) {

    let paginaInicial = localStorage.getItem('paginaInicial')

    if (!paginaInicial) {
        paginaInicial = prompt('Escolha sua página inicial')
    }
    
    if (paginaInicial) {
        if (
            paginaInicial.substring(0, 7) !== 'http://' &&
            paginaInicial.substring(0, 8) !== 'https://'
        ) {
            //---Assigment-Atribuição
            paginaInicial = 'http://' + paginaInicial
        }
    
        $janelaPrincipal.src = paginaInicial
        $inputEndereco.value = paginaInicial
    
        localStorage.setItem('paginaInicial', paginaInicial)
    }
}


    //var paginaInicial = "http://google.com"




