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

import aceitouSalvar from '/scripts/storage/aceitouSalvar.js'
import paginaInicial from '/scripts/storage/paginaInicial.js'

if(aceitouSalvar === null || aceitouSalvar === true) {
    let paginaInicialDefault = paginaInicial //sem shadowing!

   // let paginaInicial = localStorage.getItem('paginaInicial')

    if (!paginaInicialDefault) {
        paginaInicialDefault = prompt('Escolha sua página inicial')
    }
    
    if (paginaInicialDefault) {
        if (
            paginaInicialDefault.substring(0, 7) !== 'http://' &&
            paginaInicialDefault.substring(0, 8) !== 'https://'
        ) {
            //---Assigment-Atribuição
            paginaInicialDefault = 'http://' + paginaInicialDefault
        }
    
        $janelaPrincipal.src = paginaInicialDefault
        $inputEndereco.value = paginaInicialDefault
    
        localStorage.setItem('paginaInicial', paginaInicialDefault)
    }
}


    //var paginaInicial = "http://google.com"




