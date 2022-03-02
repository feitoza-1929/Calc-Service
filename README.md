## Tabela de Conteúdos
- [Rodando Projeto](#rodando-projeto)
	- [Service](#service)
- [Testes](#testes)
- [Detalhes do Service](#detalhes-do-serviço)
	- [Estrutura Básica](#estrutura-básica)
	- [Endpoints](#endpoints)

## Rodando Projeto
```
# Clone o repositório
 $ git clone https://github.com/feitoza-1929/Calc-Service.git
 $ cd ./Calc-Service
```

#### Service

Para rodar o serviço, instale as dependências `npm i`. Agora inicie o servidor `npm start`

## Testes
Para rodar os testes, basta está no diretório raiz e executar o seguinte comando: ` npm test`

## Detalhes do Serviço
#### Estrutura Básica
Está sendo utilizada uma variação do padrão [MVC](https://pt.wikipedia.org/wiki/MVC)

```
root
  ├───Controllers #Lógica de negócio
  ├───Routes #Rota para o cliente iniciar a comunicação
  └───Schema #Modelos de dados
```
#### Endpoints

|Method   |    Endpoint       |Body Params  |
|---------| ----------------- |----------------|
|		POST  |http//:localhost:3005/calc| values: array  |
|					|										| operator: string|


Exemplo de Requisição:
```
express.post('http//:localhost:3005/calc', {
	values: [2,3],
	operator: "+"
})
.then(res => console.log(res))
.catch(err => console.log(err))
```


