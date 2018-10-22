# Desenvolvimento Aplicação em Electron com Serial Port: 

<p align="center">
  <img src="https://i.imgsafe.org/e1/e1d1c0ae9a.jpeg"/>  
</p>

Desenvolvimento de uma aplicação POC em Electron que permita o uso de serial port. Essa aplicação tem como objetivo final ser aplicado num ambiente Windows e ser usado em plataformas de Totem (auto atendimento).
A aplicação também precisa permitir listar as portas:

* USB
* RS232
* WebCam
* Impressão


## Recursos Utilizados no Desenvolvimento: :mega: 

Para realizar as demos dessa série, se faz necessário instalar os seguintes programas:

* Visual Studio Code;
* Node.JS v.8.x;
* Electron v. 1.x - [DOWNLOAD AQUI](https://electronjs.org/)
* Uso da Biblioteca: [serial Port](https://www.npmjs.com/package/serialport);
* Uso da Biblioteca v.1.x: [node-usb](https://www.npmjs.com/package/node-usb);
* Uso da Biblioteca: [node-gyp](https://www.npmjs.com/package/node-gyp);
* Uso da Biblioteca: [node-pre-gyp](https://www.npmjs.com/package/node-pre-gyp);
* Uso da Biblioteca: [electron-packager](https://github.com/electron-userland/electron-packager);
* ESlint;
* ES5;

## Executando Código Localmente: :bulb: 

Caso queira testar a aplicação de maneira local basta seguir os passos abaixo:

### Começando: :rocket:

Para começar, você deve simplesmente clonar o repositório do projeto na sua máquina e instalar as dependências.

### Pré-Requisitos

Antes de instalar as dependências no projeto, você precisa seguir os seguintes passos:

Passo: 1) **Node.Js**: Caso não tenha, basta realizar o download [Aqui](https://nodejs.org/en/)

Passo: 2) **Instalar Globalmente o Electron**: bastam digitar o comando abaixo:

```
> npm install -g electron
```

Passo: 3) **Instalar Globalmente o electron-packager**: bastam digitar o comando abaixo (usuários **Linux & MAC**):

```
> npm install electron-packager -g
```

Passo: 4) **Instalar Globalmente o electron-installer-dmg**: bastam digitar o comando abaixo (usuários **Linux & MAC**):

```
> npm i electron-installer-dmg -g
``` 

Passo: 0) **Instalar Globalmente o node-gyp**: bastam digitar o comando abaixo (usuários **Linux & MAC**):

```
> npm install node-gyp -g
```


Passo: 0.1) Já para usuários Windows, para realizar a instalação do **node-gyp** se faz necessário seguir os passos abaixo:

 - **0.1.1)** Instalar o Python 2.x: [DOWNLOAD AQUI](https://www.python.org/downloads/)

- **0.1.2)** Instalar globalmente o node-gyp: [DOCUMENTAÇÃO PARA INSTALAÇÃO DE MANEIRA CORRETA AQUI](https://github.com/nodejs/node-gyp)

- **0.1.3)** Criar manualmente o arquivo **binding.gyp** dentro do diretório do node_modules do **AppData**, conforme o exemplo abaixo:

```
> C:\users\UserName\appdata\roaming\npm\node_modules\node-gyp
```

- **0.1.4)** Incluir no arquivo **binding.py** o seguinte bloco de código e salve:

```
{
    "targets": [{
    "target_name": "binding",
    "sources": [ "build/Release/binding.node" ]
    }]
}
```

- **0.1.5)** Feito isso, agora execute os seguintes comandos abaixo dentro do mesmo diretório do appData:

```
> node-gyp configure
```

```
> node-gyp configure --msvs_version=2015
```

```
> node-gyp build
```

Seguindo todos esses passos, vocês estará para prono para instalar as depedências do projeto na pasta do projeto! ;)


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


## Executando a Aplicação: :zap: 

Para a execução da aplicação se faz necessário ir até o **'src'** do projeto e executar o seguinte comando abaixo:

```
npm run start
```

Ao executar o comando acima, apresentará a seguinte janela da aplicação no Electron:

<p align="center">
  <img src="https://i.imgsafe.org/e1/e1d1c0ae9a.jpeg"/>  
</p>

## Instalação da Aplicação Electron em Diferentes Distros:

Caso desejam instalar aplicação feita em suas distros, bastam seguir os passos abaixo:

#### Windows:

O comando abaixo serve para criar o pacote de instalação da aplicação para distros Windows. Digite no terminal o comando abaixo:

```
> electron-packager . poc-electron-serial-port --overwrite --asar=true --platform=win32 --arch=ia32 --icon=app/assets/icons/win/zoox-icon.ico --prune=true --out=release-builds --version-string.CompanyName=Zoox --version-string.FileDescription=Zoox --version-string.ProductName=\"Aplicação POC Electron & Porta USB\"
```

Ou o comando no terminal:

```
> npm run package-win
```

#### Linux: 

O comando abaixo serve para criar o pacote de instalação da aplicação para distros Linux. Digite no terminal o comando abaixo:

```
> electron-packager . poc-electron-serial-port --overwrite --asar=true --platform=linux --arch=x64 --icon=app/assets/icons/png/zoox-icon-128x128.png --prune=true --out=release-builds
```

Ou o comando no terminal: 

```
> npm run package-linux
```

#### MAC:

O comando abaixo serve para criar o pacote de instalação da aplicação para distros Mac. Digite no terminal o comando abaixo:

```
> electron-packager . --overwrite --platform=darwin --arch=x64 --icon=app/assets/icons/mac/zoox-icon.icns --prune=true --out=release-builds
```

Ou o comando no terminal:

```
> npm run package-mac
```

Se aparecer no terminal a seguinte mensagem:

``` 
Packaging app for platform darwin x64 using electron v1.8.8
Wrote new app to release-builds/Aplicação POC Porta USB Zoox-darwin-x64

```

É porque foi executado com sucesso! :smiley:


## Deseja Propor Melhorias no Código? Façam Pull Request!!!  :triangular_flag_on_post:

Caso queiram que eu implemente algo no código, abram uma issue nesse repositório. Assim, todos poderão colaborar para o melhor desenvolvimento desse repositório. E sintam-se à vontade em fazer Pull Requests!!

Não esqueçam de dar uma :star: no repositório e claro: Apreciem sem moderação!! :heart: :heart: :heart:

<p align="center">
  <img src="https://i.imgsafe.org/e2/e2243b8f92.gif"/>  
</p>

**(documentação em desenvolvimento)**


