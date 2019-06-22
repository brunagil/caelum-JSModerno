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

import { aceitouSalvar as storageAceitouSalvar } from '/scripts/storage/aceitouSalvar.js'
import { paginaInicial, setPedePaginaInicial } from '/scripts/storage/paginaInicial.js'
//aceitouSalvar chega aqui >null< quando utilizamos o export default no aceitouSalvar.js

import { formataEndereco } from '/scripts/endereco/formataEndereco.js'

if(storageAceitouSalvar === null || storageAceitouSalvar === true) {
    let paginaInicialDefault = paginaInicial //sem shadowing!

   // let paginaInicial = localStorage.getItem('paginaInicial')

    if (!paginaInicialDefault) {
        paginaInicialDefault = prompt('Escolha sua página inicial')
    }
    
    if (paginaInicialDefault) {

        const enderecoCompleto = formataEndereco(paginaInicialDefault)
    
        $janelaPrincipal.src = enderecoCompleto
        $inputEndereco.value = enderecoCompleto
    
        setPedePaginaInicial(enderecoCompleto)
    }
}

//var paginaInicial = "http://google.com"




