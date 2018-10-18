/**
 * Arquivo: js/main.js
 * Data: 18/10/2018
 * Descrição: arquivo responsável por executar a aplicação Electron
 * Author: Glaucia Lemos
 */

const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 });

  win.loadFile('../index.html');

  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  // No macOS é comum para aplicativos e sua barra de menu
  // permaneçam ativo até que o usuário explicitamente encerre com Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('active', () => {
  if (win === null) {
    createWindow();
  }
});
