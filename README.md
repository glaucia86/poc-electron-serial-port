# Desenvolvimento Aplicação em Electron com Serial Port: 

Desenvolvimento de uma aplicação POC em Electron que permita o uso de serial port. Essa aplicação tem como objetivo final ser aplicado num ambiente Windows e ser usado em plataformas de Totem (auto atendimento).
A aplicação também precisa permitir listar as portas:

* USB
* RS232
* WebCam
* Impressão


## Recursos Utilizados no Desenvolvimento: :mega: 

Para realizar as demos dessa série, se faz necessário instalar os seguintes programas:

* Visual Studio Code;
* Node.JS;
* Electron - [DOWNLOAD AQUI](https://electronjs.org/)
* Uso da Biblioteca: Serial Port;
* EsLint;

## Executando Código Localmente: :bulb: 

Caso queira testar a aplicação de maneira local basta seguir os passos abaixo:

### Começando: :rocket:

Para começar, você deve simplesmente clonar o repositório do projeto na sua máquina e instalar as dependências.

### Pré-Requisitos

Antes de instalar as dependências no projeto, você precisa já ter instalado na sua máquina:

* **Node.Js**: Caso não tenha, basta realizar o download [Aqui](https://nodejs.org/en/)
* **Instalar Globalmente o Electron**: bastam digitar o comando abaixo:

```
> npm install electron -g
```


### Instalando as Dependências (via Windows):

Abre o cmd (caso esteja utilizando o Windows) e digite a path do seu projeto

```
cd "C:\Users\NomeDoComputador\Documents\..."
```

Depois, quando estiver na pasta do projeto, basta digitar no cmd a seguinte instrução: **(dentro do src)**

```
npm install
```

Ao digitar a instrução acima, automaticamente ele irá baixar todas as dependências listadas e definidas no arquivo package.json:

* `node_modules` - que contêm os packages do npm que precisará para o projeto.

### Instalação dos Programas via Linux:

Estarei disponibilizando os links onde explicam como baixar:

- Node.Js: [AQUI](https://nodejs.org/en/download/package-manager/)


## Executando a Aplicação: :zap: 

Para a execução da aplicação se faz necessário ir até o **'src'** do projeto e executar o seguinte comando abaixo:

```
npm start
```

(...)

**documento em desenvolvimento**




