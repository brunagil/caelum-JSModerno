## Resumo da aula extra - 08-08-2019


Existe uma lista de *addEventListeners* que cadastra os eventos, onde nada é executado. O *addEventListeners* é utilizado para cadastrar o código

O navegador fica de olho no teclado e nos cliques que o usuário faz. O navegador recebe uma mensagem do sistema operacional avisa que aconteceu o evento que ele está cadastrado. 

- **Event Loop (fila)  x Thread principal**: Os códigos mensagens do Event Loop só saem quando encontram as mensagem da lista de EventListeners relacionado. E então eles rodam na thread principal. O Loop de eventos não é controlável e não podemos mudar o seu comportamento.
- Para melhorar o nosso código, criamos a verificação para conferir se o site é válido ou não.

#### Código para tratar erros

A ideia é carregar a página digitada na barra pelo usuário e conferir se ela é válida ou não. Para isso utilizamos a requisição AJAX e XMLHttpRequest()

- xhr não funciona para todos os tipos de erro mas podemos utilizá-lo para tratar erro com o addEventListener
- `try()` não pega erro de AddEventListener e isso é uma limitação desse tipo de evento por ele ser uma função assíncrona
- Uma função tratadora de erros é importante para lidar com o erro possível da aplicação

#### Promise: Programação Reativa

- É uma variável (objeto) que você pode armazenar
- `then()` -> Propriedade/Método que executa algo no sucesso; callback de sucesso
- `catch()` -> para receber um erro dessa Promise
- async e await -> Sintaxe utilizada para tratar os erros de uma só vez e ter uma Promise dentro de uma Promise. `Async` já retorna uma Promise por padrão.
- `fetch()` -> Já retorna uma Promise. Podemos adicionar um `.then` e um `.catch` nele para tratar mais as execuções
- `Observables()` e `streams` como uma lista de Promises; é uma abstração de algo que vai acontecer várias vezes no seu código


