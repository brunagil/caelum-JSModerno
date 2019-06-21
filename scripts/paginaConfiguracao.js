//$inputPaginaInicial.value = "google.com.br"
//$inputPermitiuSalvar.checked = true;

import * as storagePaginaInicial from '/scripts/storage/paginaInicial.js'
import * as storageAceitouSalvar from '/scripts/storage/aceitouSalvar.js'

//real time                  mock/default
$inputPaginaInicial.value = storagePaginaInicial.paginaInicial
$inputPermitiuSalvar.checked = storageAceitouSalvar.aceitouSalvar

// o que vai ser executado quando clicar
// o que vai ser executado quando o evento de clique acontecer

$botaoSalvar.onclick = salvar
//salvar é uma função que está guardada e não está sendo executada 
//por nós e sim pelo navegador, ativada pelo botão
// função de callback!
function salvar() {
    storagePaginaInicial.setPaginaInicial($inputPaginaInicial.value)
    storageAceitouSalvar.setAceitouSalvar($inputPermitiuSalvar.checked)
}

