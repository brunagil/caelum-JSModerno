import { paginaInicial } from "/scripts/storage/paginaInicial.js";
import { carregar } from '/scripts/navegacao/carregarHome.js'

$botaoHome.addEventListener('click', function vaiParaHome() {
    //alert('oi')
    carregar(paginaInicial)
})
