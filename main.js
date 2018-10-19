/**
 * Arquivo: main.js
 * Data: 18/10/2018
 * Descrição: arquivo responsável por executar a aplicação Electron
 * Author: Glaucia Lemos
 */

const electron = require('electron');
const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 1200, height: 600 });

  mainWindow.loadURL('file://' + __dirname + './app/index.html');

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('active', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
