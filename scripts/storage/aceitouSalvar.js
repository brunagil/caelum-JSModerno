//encapsulamento da variável, que está protegida de mudanças

export let aceitouSalvar = JSON.parse(localStorage.getItem('aceitouSalvar'))


//ambiente onde ele foi criado
//acesso a variáveis do ambiente
//function setAceitouSalvar É UMA 'CLOSURE' => https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Closures
export function setAceitouSalvar(valor) {
    aceitouSalvar = valor
    localStorage.setItem('aceitouSalvar', valor)
}