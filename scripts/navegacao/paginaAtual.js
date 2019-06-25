import * as storagePaginaInicial from '/scripts/storage/paginaInicial.js'
import { formataEndereco } from '/scripts/endereco/formataEndereco.js'

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

    $janelaPrincipal.addEventListener('load', salvaPaginaAtual)
// $janelaPrincipal.onload = salvaPaginaAtual

    function salvaPaginaAtual() {
        const enderecoAcessado = $janelaPrincipal.contentWindow.location.href
        sessionStorage.setItem('paginaAtual', enderecoAcessado)
        //coloca os sites acessados na array de sites
        listaSites.push(enderecoAcessado)
    }

// função BOTÃO VOLTAR PARA A PÁGINA ANTERIOR

let posicao = -1
let listaSites = [] 

$botaoVoltar.addEventListener('click', function() {
    if(listaSites.length !== 1) {
        posicao--
        carregar(
            listaSites[posicao] //acessar as posições dos sites na lista
            )
    }
})

$botaoAvancar.addEventListener('click', function() {
    if(listaSites.length !== 1) {
        posicao++
        carregar(
            listaSites[posicao] //acessar as posições dos sites na lista
            )
    }
})
