<h1 align="center"><img src="https://raw.githubusercontent.com/gabrielnardes/tutorial-rocketseat-rest/main/rocketseat.png" alt="drawing" width="400"/></h1>

Código elaborado com base no tutorial da Rocketseat sobre Node.js.

## 🖥️ Nome do projeto: **logger**.
## 💬 O que é?
Um log é emitido no terminal a cada 1 segundo, informando a quantidade de memória livre, memória total, e o uso percentual de memória do computador. Foi desenvolvido um módulo chamado logger.js, exportado para stats.js.
## 🕹️ Como executar?
Esteja dentro da dentro da pasta logger, e digite em um terminal: <br>
```
node stats.js
```
## 👀 E como fica?

<hr style="border-top: 8px solid #bbb;
           border-radius: 10px;;
           margin: 30px">


## 🖥️ Nome do projeto: **myUrl**.
## 💬 O que é?
Um salvador das duas URLs favoritas.
A organização da pasta é feita da seguinte maneira:
- public: arquivos client.
- api: intermedia a manipulação das URLs.
- server.js: serve de host para o client.

## 🕹️ Como executar?
Primeiramente, abra dois terminais, e em cada um execute um comando diferente:
```
npm run api
```
```
npm start
```

### Como adicionar uma URL?
- 1° método: Acessando `http://localhost:3000/`, e colocando um nome e URL no  formato `http://localhost:3000/?name=URL_NAME&url=URL`.
- 2° método: Acessando `http://localhost:5000/`, e digitando `URL_NAME,URL` na caixa especificada, sem espaços.

### Exemplos de adição de URL:
- 1° método: `http://localhost:3000/?name=LinkApi&url=https://www.linkapi.solutions/`.
- 2° método: `LinkApi,https://www.linkapi.solutions/`.

## 👀 E como fica?

<p>
  <img src="https://raw.githubusercontent.com/gabrielnardes/tutorial-rocketseat-rest/main/icon-yt.png" alt="icon-yt" width="25"/>
  <a href="https://www.youtube.com/watch?v=DiXbJL3iWVs">Node.js: Iniciando da teoria à prática | Masterclass #11</a>
</p>
