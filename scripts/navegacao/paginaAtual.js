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
        sessionStorage.setItem('paginaAtual', $janelaPrincipal.contentWindow.location.href)
    }

// função BOTÃO VOLTAR PARA A PÁGINA ANTERIOR
    $botaoVoltar.addEventListener('click', function() {
        alert('voltando')
    })

    $botaoAvancar.addEventListener('click', function() {
        alert('avançando')
    })
