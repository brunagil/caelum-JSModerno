//alert('oi')
import { carregar } from '/scripts/navegacao/carregarHome.js';
import { formataEndereco } from '/scripts/endereco/formataEndereco.js';
import { Endereco } from '/scripts/endereco/Endereco.js'

let endereco
    
$janelaPrincipal.addEventListener('load', function() {
    endereco =  new Endereco($janelaPrincipal.contentWindow.location.href)
});
    
$inputEndereco.addEventListener('focus', exibeEnderecoCompleto)
$inputEndereco.addEventListener('blur', exibeEnderecoResumido)
$janelaPrincipal.addEventListener('load', exibeEnderecoResumido)

function exibeEnderecoCompleto() {
    $inputEndereco.value = endereco.urlCompleta
}

function exibeEnderecoResumido() {
    $inputEndereco.value = endereco.urlResumida
}

//---Quando navegamos no site
$inputEndereco.addEventListener('keyup', function(evento) {
    //---o navegador executou o callback e as informações que 
    //---ele está passando através do evento estão presentes
    //---se declaramos o parâmetro 'evento'
    //console.log(evento)

    const apertouEnter = evento.key === 'Enter'
    if(apertouEnter) {
        endereco = new Endereco($inputEndereco.value)
        carregar(endereco)
    }
})