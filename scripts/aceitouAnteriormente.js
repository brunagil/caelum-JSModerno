
const aceitouAnteriormente = localStorage.getItem("aceitouSalvar")

if(!aceitouAnteriormente) {
    //não tem problema essa variável ter o mesmo nome que tem no pedePaginaInicial,
    //pois essa variável aqui está apenas e somente no escopo do if 
    const aceitouSalvar = confirm('Você aceita que a gente salve suas informações?')
    if (!aceitouSalvar) {
        alert('Você pode mudar isso na página de configurações') 
    }
    
    localStorage.setItem('aceitouSalvar', aceitouSalvar)
}