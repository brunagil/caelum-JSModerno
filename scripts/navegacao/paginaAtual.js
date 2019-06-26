import * as storagePaginaInicial from '/scripts/storage/paginaInicial.js'
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

// função BOTÃO VOLTAR PARA A PÁGINA ANTERIOR

let listaSites = [] 
let posicao = -1

$botaoVoltar.addEventListener('click', function() {

})


})
