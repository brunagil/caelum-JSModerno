//alert('oi')

$inputEndereco.onfocus = exibeEnderecoCompleto
$janelaPrincipal.onload = exibeEnderecoResumido
$janelaPrincipal.onblur = exibeEnderecoResumido

function exibeEnderecoCompleto() {
    $inputEndereco.value = $janelaPrincipal.contentWindow.location.href
}

function exibeEnderecoResumido() {
    const url = new URL($janelaPrincipal.contentWindow.location.href)
    const enderecoResumido = url.hostname

    $inputEndereco.value = enderecoResumido
}