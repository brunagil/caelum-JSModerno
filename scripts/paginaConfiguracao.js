//$inputPaginaInicial.value = "google.com.br"
//$inputPermitiuSalvar.checked = true;

import * as storagePaginaInicial from '/scripts/storage/paginaInicial.js';
import * as storageAceitouSalvar from '/scripts/storage/aceitouSalvar.js';
import { Endereco } from '/scripts/endereco/Endereco.js';
import { CakeEnderecoInvalidoError } from './erros/CakeError';

//named export 
//destructuring
//desestruturação

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

    try {
        const enderecoCompleto = new Endereco($inputPaginaInicial.value)
        $inputPaginaInicial.value = enderecoCompleto.toString()
            storagePaginaInicial.setPaginaInicial(enderecoCompleto)
    } catch(error) {
        if(error instanceof CakeEnderecoInvalidoError) {
            $inputPaginaInicial.value = ""
            console.warn(error.toString())
            alert('inválido')
        } else {
            throw error
        }
    }
        
    }

//remover todos os itens menos aceitouSalvar e aceitouTermos
$botaoLimpaTudo.addEventListener('click', function() {
    const chavesPermanentes = [
        'aceitouSalvar', 
        'aceitouTermos'
    ]

    const listaChavesLocalStorage = Object.keys(localStorage)
    for(let chave of listaChavesLocalStorage) {
        const isChavePermanente = chavesPermanentes.includes(chave)

        if(!isChavePermanente) {
            localStorage.removeItem(chave)
        }
    }

    const listaChavesSessionStorage = Object.keys(sessionStorage)

    for(let chave of listaChavesSessionStorage) {
        sessionStorage.removeItem(chave)
    }
    window.location.reload()
})
