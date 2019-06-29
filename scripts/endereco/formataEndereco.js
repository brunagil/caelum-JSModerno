function formataEndereco(enderecoPraFormatar) {
    if(!enderecoPraFormatar || enderecoPraFormatar ==='blank') {
        return 'blank'

    }

    {
        //---Assigment-Atribuição
        enderecoPraFormatar = 'http://' + enderecoPraFormatar
    }

    return enderecoPraFormatar
}

//estamos exportando um objeto
export { formataEndereco }