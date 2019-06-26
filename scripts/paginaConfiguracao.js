//$inputPaginaInicial.value = "google.com.br"
//$inputPermitiuSalvar.checked = true;

import * as storagePaginaInicial from '/scripts/storage/paginaInicial.js'
import * as storageAceitouSalvar from '/scripts/storage/aceitouSalvar.js'
//named export 
//destructuring
//desestruturação
import { formataEndereco } from '/scripts/endereco/formataEndereco.js'

//real time                  mock/default
$inputPaginaInicial.value = storagePaginaInicial.paginaInicial
$inputPermitiuSalvar.checked = storageAceitouSalvar.aceitouSalvar

// o que vai ser executado quando clicar
// o que vai ser executado quando o evento de clique acontecer

//propriedade que conseguimos acessar 
$botaoSalvar.onclick = salvar
//salvar é uma função que está guardada e não está sendo executada 
//por nós e sim pelo navegador, ativada pelo botão
// função de callback!

//Declaração de função-FUNCTION DECLARATION. Declaração é um bloco de código (pode executar vários códigos)
//tem hoisting
function salvar() {
    //expressão de função, pois está salva em uma variável-FUNCTION EXPRESSION
    //
    const funcaoEscolhida = $inputPermitiuSalvar.checked === true
    ? storageAceitouSalvar.setAceitou
    : storageAceitouSalvar.setAceitouSalvar
    
    funcaoEscolhida()

    const enderecoCompleto = formataEndereco($inputPaginaInicial.value)
    $inputPaginaInicial.value = enderecoCompleto

    storagePaginaInicial.setPaginaInicial($inputPaginaInicial.value)
}

$botaoLimpaTudo.addEventListener('click', function() {
    
})
