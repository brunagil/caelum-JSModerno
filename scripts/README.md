### Resumo da aula extra - 08-08-2019


Existe uma lista de addEventListeners que cadastra os eventos, onde nada é executado. O ADDEVTLIST é utilizado para cadastrar o código

O navegador fica de olho no teclado e nos cliques que o usuário faz. O navegador recebe uma mensagem do sistema operacional (S.O.) avisa que aconteceu o evento que ele está cadastrado. 

- Event Loop (fila)  x Thread principal: Os códigos mensagens do Event Loop só saem quando encontram as mensagem da lista de EventListeners relacionado. E então eles rodam na thread principal. O Loop de eventos não é controlável e não podemos mudar o seu comportamento.
- 