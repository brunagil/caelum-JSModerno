//$inputPaginaInicial.value = "google.com.br"
//$inputPermitiuSalvar.checked = true;

import paginaInicial from '/scripts/storage/paginaInicial.js'
import aceitouSalvar from '/scripts/storage/aceitouSalvar.js'

// o que vai ser executado quando clicar
// o que vai ser executado quando o evento de clique acontecer
$botaoSalvar.onclick = salvar

$inputPaginaInicial.value = paginaInicial
$inputPermitiuSalvar.checked = aceitouSalvar

//salvar é uma função que está guardada e não está sendo executada 
//por nós e sim pelo navegador, ativada pelo botão
// função de callback!
function salvar() {
    localStorage.setItem('paginaInicial', $inputPaginaInicial.value)
    localStorage.setItem('aceitouSalvar', $inputPermitiuSalvar.checked)
}

