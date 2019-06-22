import * as storagePaginaInicial from '/scripts/storage/paginaInicial.js'
import { formataEndereco } from '/scripts/endereco/formataEndereco.js'

//--CRIAR UM MÓDULO PARA ISSO
const paginaAtual = localStorage.getItem('paginaAtual')
//PASSO A PASSO: pegar página atual do localstorage
//se paginaAtual !== null, carrega e formata o endereço atual
//se paginaAtual ===null, carrega a paginaInicial

//--ISOLAR FUNÇÃO CARREGA
if (paginaAtual !== null) {
    const enderecoCompleto = formataEndereco(paginaAtual)

    $janelaPrincipal.src = enderecoCompleto
    $inputEndereco.value = enderecoCompleto

} else {
    const enderecoCompleto = formataEndereco(storagePaginaInicial.paginaInicial)

    $janelaPrincipal.src = enderecoCompleto
    $inputEndereco.value = enderecoCompleto

}
