## Calc Service
O express, junto a outros mini frameworks, são nossos amigos na hora do desenvolvimento de um serviço, devido a abstração que é feita.
 Contudo eu sentia que não conhecia realmente nodejs, apenas seus frameworks . Por isso fiz esse pequeno serviço que recebe uma requisição do cliente e retorna o resultado de um calculo aritmético.

### Rodando o projeto

- Baixe o nodejs
- Clone o projeto `git clone https://github.com/feitoza-1929/Calc-Service.git`
- Rode no diretório raiz do projeto `node app.js`


### Rodando os testes
Agora temos testes na branch `tests`, você poderá está rodando-os com um simples comando
`npm test`

### Requisição API
`GET localhost:5000/api/calc/id/x/y`

Vamos destrinchar essa requisição, `id` é um numero de `1-4` que identifica nossa operação aritmética 
```
# Números referentes as suas operações
   1 : +
   2 : -
   3 : *
   4 : ÷
```

`x` e `y` são os números naturais que serão calculados.

Vamos fazer a requisição ? 

```localhost:5000/api/calc/1/2/2```

Resultado esperado:

```{ result: 4 }```
