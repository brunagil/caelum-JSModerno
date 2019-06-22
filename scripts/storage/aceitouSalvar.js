//encapsulamento da variável, que está protegida de mudanças
export let aceitouSalvar = JSON.parse(localStorage.getItem('aceitouSalvar'))

//ambiente onde ele foi criado
//acesso a variáveis do ambiente
//function setAceitouSalvar É UMA 'CLOSURE' => https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Closures

//function está privada. Se estivesse com export ele estaria público
function setAceitouSalvar(valor) {
    aceitouSalvar = valor
    localStorage.setItem('aceitouSalvar', valor)
}

// Crio duas funções, setando os valores booleanos que o aceitou salvar deve retornar e gravar no LS
export function setAceitou() {
    setAceitouSalvar(true)
}

export function setNaoAceitou() {
    setAceitouSalvar(false)
}


//---Revealing MODULE PATTERN
//---Não coloca export em nenhuma função/módulo, e no final exportamos todos
/* export {
    aceitouSalvar,
    setAceitou,
    setNaoAceitou
}*/