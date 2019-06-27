// função construtora
// função factory
// fábrica de objetos - class
function Endereco(endereco) {
    let enderecoCompleto
    let enderecoResumido

    if(!endereco || endereco === 'blank') {
        enderecoCompleto = 'blank'
        enderecoResumido = 'blank'
    } else {
        const url = new URL(endereco) 
    
        if(url.hostname === 'localhost') {
            const paginaLocal = url.pathname.replace("/", "")
            enderecoCompleto = paginaLocal
            enderecoResumido = paginaLocal
        } else {
            // colocando apenas 'url' também funciona
            // pois na hora do type coercing a função toString é chamada por baixo dos panos
            enderecoCompleto = url.toString()
            enderecoResumido = url.hostname
        }
    }

    return {
        urlCompleta: enderecoCompleto,
        urlResumida: enderecoResumido
    }
}

export { Endereco }