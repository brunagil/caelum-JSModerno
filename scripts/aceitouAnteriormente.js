// Função Anônima Imediatamente Invocada (IIFE)
// IIFE 
// função anônima protegida; é o único projeto
//de criar escopo < ECMA2015 ES6

// O modo estrito/strict mode aponta os erros de declaração
// de um código e faz com que a dev saiba do problema
// ele não trava a operação mas aponta os erros 

// MODULE PATTERN - Código tem um IIFE e um executável no final e cria um escopo estrito

(function () {

    "use strict"
    var aceitouAnteriormente = localStorage.getItem("aceitouSalvar")
    
    if(!aceitouAnteriormente) {
        //não tem problema essa variável ter o mesmo nome que tem no pedePaginaInicial,
        //pois essa variável aqui está apenas e somente no escopo do if 
        const aceitouSalvar = confirm('Você aceita que a gente salve suas informações?')
        if (!aceitouSalvar) {
            alert('Você pode mudar isso na página de configurações') 
        }
        
        localStorage.setItem('aceitouSalvar', aceitouSalvar)
    }

    alert('oi, eu sou uma função anônima')
//invoca a função imediatamente no final dela
})()

//dá pra escrever essa function também utilizando a arrow function (es6) . Ex: ;(() =>