//TODODepois - transformar num módulo storage 

const listaSites = JSON.parse(sessionStorage.getItem('historico')) || []  //type coercing
let posicao = JSON.parse(sessionStorage.getItem('posicaoHistorico')) || -1

export function adiciona(endereco) {
    if (endereco !== listaSites[posicao] ) {
        listaSites.splice(posicao + 1)
        listaSites.push(endereco)
        posicao++
        sessionStorage.setItem('historico', JSON.stringify(listaSites))
        sessionStorage.setItem('posicaoHistorico', posicao)
    }
}

export function volta() {
    const isPrimeiraPosicao = posicao === 0
    if (listaSites.length !== 1 && !isPrimeiraPosicao) {
        posicao = posicao - 1
        sessionStorage.setItem('posicaoHistorico', posicao)
        return listaSites[posicao]
    }
}

export function avanca() {
    const isUltimaPosicao = posicao === listaSites.length - 1
    if (listaSites.length !== 1 && !isUltimaPosicao) {
        posicao = posicao + 1
        sessionStorage.setItem('posicaoHistorico', posicao)
        return listaSites[posicao]
    }
}
