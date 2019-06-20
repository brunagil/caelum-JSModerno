//const é uma variável pois ela é dinâmica
// você não precisa definir ela com um valor fixo

// Vamos armazenar o nome pedido e se a pessoa já 
// havia aceitado os termos de uso e preenchido as informações, ou não 
if (!localStorage.getItem('aceitouTermos')) {
    // usamos CONST pois as informações, apesar de dinâmicas, não serão modificadas 
    const nome = prompt('Qual é o seu nome?')

    const aceitouTermos = confirm(`
    
    Olá ${nome}!
    
    Antes de usar o Cake, precisamos que você 
    aceite nossos termos de uso: 
    🎂 Você aceita que este software foi feito por pessoas
    que participaram do curso de JS da Caelum
    🎂 Você aceita que o código dessas pessoas 
    pode acessar tudo o que você digitar aqui
    
    `)

    if (!aceitouTermos) {
        alert(nome + ', então não podemos ficar juntos :( ')
        window.close()
    } else {
        localStorage.setItem('aceitouTermos', aceitouTermos)
    }
}

//null quando a informação está vazia