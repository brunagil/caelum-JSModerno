// função construtora // instanceOf funciona!
    //Nome()
// função factory 
// fábrica de objetos - class
function Endereco(endereco) {

    if(this === undefined || (this !== undefined && !(this instanceof Endereco))) {
        return new Endereco(endereco)
    }


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
            /* colocando apenas 'url' também funciona
            pois na hora do type coercing a função toString é chamada por baixo dos panos 
            */
            enderecoCompleto = url.toString()
            enderecoResumido = url.hostname
        }
    }

    /* Quando você executa uma função com new, 
    que é um operador, ele modifica o THIS da sua função

    const this = {
        __proto__: Endereco
    }

    return this
    THIS se torna a instancia do seu objeto    
    */
        //objeto literal - Literal Object
        // SE executar a função construtora sem o NEW, o this não existe (undefined)
        this.urlCompleta = enderecoCompleto
        this.urlResumida = enderecoResumido
}

export { Endereco }