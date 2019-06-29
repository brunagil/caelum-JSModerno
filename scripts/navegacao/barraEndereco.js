//alert('oi')
import { carregar } from '/scripts/navegacao/carregarHome.js';
import { formataEndereco } from '/scripts/endereco/formataEndereco.js';
import { Endereco } from '/scripts/endereco/Endereco.js'

import { CakeEnderecoInvalidoError } from '/scripts/erros/CakeError.js'

let endereco
    
$janelaPrincipal.addEventListener('load', function() {
    endereco =  new Endereco(
        this.contentWindow.location.href
    )
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

        try {
            endereco = new Endereco($inputEndereco.value)
        } catch(error) {  //variável de erro
            if(error instanceof CakeEnderecoInvalidoError) {
                alert(error.message)
            } else {
                throw error
            }
        }
        carregar(endereco)
    }
})