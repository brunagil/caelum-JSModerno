// função construtora
// função factory
// fábrica de objetos 
function criaEndereco(endereco) {
    const url = new URL(endereco) 

    let enderecoCompleto
    if(url.hostname === 'localhost') {
        enderecoCompleto = url.pathname.replace("/", "")
    } else {
        // colocando apenas 'url' também funciona
        // pois na hora do type coercing a função toString é chamada por baixo dos panos
        enderecoCompleto = url.toString()
    }

    let enderecoResumido
    if(url.hostname === 'localhost') {
        enderecoResumido = url.pathname.replace("/", "")
    } else {
        enderecoResumido = url.hostname
    }

    return {
        urlCompleta: enderecoCompleto,
        urlResumida: enderecoResumido
    }
}

export { criaEndereco }