// declaração de variável iria no topo?
// Hoisting-Içamento
// var paginaInicial = undefined (recebe um valor, e esse valor é undefined)

// const paginaInicial = prompt('oi')

// é LET pois ele vai ser concatenado no if abaixo dele, ganhando outro valor

let paginaInicial = prompt('Escolha sua página inicial')

if (
    paginaInicial.substring(0,7) != 'http://' &&
    paginaInicial.substring(0,8) !== 'https://'

) {
    paginaInicial = 'http://' + paginaInicial
}

$janelaPrincipal.src = paginaInicial
$inputEndereco.value = paginaInicial

//var paginaInicial = "http://google.com"

