//alert('oi')

import { carregar } from '/scripts/navegacao/carregarHome.js';
import { formataEndereco } from '/scripts/endereco/formataEndereco.js';
    
$inputEndereco.addEventListener('focus', exibeEnderecoCompleto)

$janelaPrincipal.addEventListener('blur', exibeEnderecoResumido)
$inputEndereco.addEventListener('load', exibeEnderecoResumido)

function exibeEnderecoCompleto() {
    $inputEndereco.value = $janelaPrincipal.contentWindow.location.href
}

function exibeEnderecoResumido() {
    const url = new URL($janelaPrincipal.contentWindow.location.href)
    const enderecoResumido = url.hostname

    $inputEndereco.value = enderecoResumido
}

$inputEndereco.addEventListener('keyup', function(evento) {
    //---o navegador executou o callback e as informações que 
    //---ele está passando através do evento estão presentes
    //---se declaramos o parâmetro 'evento'
    //console.log(evento)

    const apertouEnter = evento.key === 'Enter'
    if(apertouEnter) {
        const enderecoCompleto = formataEndereco($inputEndereco.value)
        carregar(enderecoCompleto)
    }
})