import * as storagePaginaInicial from '/scripts/storage/paginaInicial.js'
import * as historico from '/scripts/navegacao/historico.js'

import { formataEndereco } from '/scripts/endereco/formataEndereco.js'
import { carregar } from '/scripts/navegacao/carregarHome.js'

const paginaAtual = sessionStorage.getItem('paginaAtual')
//PASSO A PASSO: pegar página atual do localstorage
//se paginaAtual !== null, carrega e formata o endereço atual
//se paginaAtual ===null, carrega a paginaInicial

const paginaPraCarregar = paginaAtual !== null  
    ? paginaAtual
    : storagePaginaInicial.paginaInicial

const enderecoCompleto = formataEndereco(paginaPraCarregar)

    $janelaPrincipal.src = enderecoCompleto
    $inputEndereco.value = enderecoCompleto

    //Closures
    $janelaPrincipal.addEventListener('load', function salvaPaginaAtual() {
        // $janelaPrincipal.onload = salvaPaginaAtual
        const endereco = $janelaPrincipal.contentWindow.location.href
        sessionStorage.setItem('paginaAtual', endereco)
    })

    $janelaPrincipal.addEventListener('load', function salvaPaginaAtual() {
    const endereco = $janelaPrincipal.contentWindow.location.href
        //coloca os sites acessados na array de sites

    })


let listaSites = [] 
let posicao = -1

//eventos de clique no botão de voltar 
$botaoVoltar.addEventListener('click', function() {
    const enderecoVolta = historico.volta()
    if(enderecoVolta !== undefined) carregar(enderecoVolta)

})

//eventos de clique no botão de avançar
$botaoAvancar.addEventListener('click', function() {
    const enderecoAvanca = historico.avanca()
    if(enderecoAvanca !== undefined) carregar(enderecoAvanca)

})