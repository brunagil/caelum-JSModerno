// ---Função Anônima Imediatamente Invocada (IIFE)
// ---IIFE 
// ---função anônima protegida; é o único projeto
//---de criar escopo < ECMA2015 ES6

// ---O modo estrito/strict mode aponta os erros de declaração
// ---de um código e faz com que a dev saiba do problema
// ---ele não trava a operação mas aponta os erros 

// ---MODULE PATTERN - Código tem um IIFE e um executável no final e cria um escopo estrito

import aceitouSalvar from '/scripts/storage/aceitouSalvar.js'

//(function () {

    //"use strict"
    //let aceitouSalvar = JSON.parse(localStorage.getItem("aceitouSalvar"))

    //criamos a variável para trabalhar no conceito dos valores em string, 
    //sem converter para boolean pelo json.parse
    //let aceitouSalvar
    
    //apenas se a pessoa nunca tiver preenchido essa informação (null)
    if(aceitouSalvar === null) {
        //---shadowing/sombra no módulo
        //---redeclarando a variável com o mesmo nome
        //---não tem problema essa variável ter o mesmo nome que tem no pedePaginaInicial,
        //---pois essa variável aqui está apenas e somente no escopo do if 
        const aceitouSalvar = confirm('Você aceita que a gente salve suas informações?')
        
        if (!aceitouSalvar) {
            alert('Você pode mudar isso na página de configurações') 
        }
        
        localStorage.setItem('aceitouSalvar', aceitouSalvar)
    }

    //alert('oi, eu sou uma função anônima')
//----invoca a função imediatamente no final dela
//})()

//export default aceitouSalvar 

//---dá pra escrever essa function também utilizando a arrow function (es6) . Ex: ;(() =>