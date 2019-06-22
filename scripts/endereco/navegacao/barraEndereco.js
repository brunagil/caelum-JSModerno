//alert('oi')

$janelaPrincipal.onload = exibeEnderecoNaBarra

function exibeEnderecoNaBarra() {
    $inputEndereco.value = $janelaPrincipal.contentWindow.location.href
}