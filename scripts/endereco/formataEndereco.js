function formataEndereco(enderecoPraFormatar) {
    if (
        enderecoPraFormatar.substring(0, 7) !== 'http://' &&
        enderecoPraFormatar.substring(0, 8) !== 'https://'
    ) {
        //---Assigment-Atribuição
        enderecoPraFormatar = 'http://' + enderecoPraFormatar
    }

    return enderecoPraFormatar
}

//estamos exportando um objeto
export { formataEndereco } 