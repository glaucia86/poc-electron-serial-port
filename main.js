/**
 * Arquivo: main.js
 * Data: 18/10/2018
 * Descrição: arquivo responsável por executar a aplicação Electron
 * Author: Glaucia Lemos
 */

const app = require('electron').app;
const BrowserWindow = require('electron').BrowserWindow;

const path = require('path');

let mainWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    titleBarStyle: 'hidden',
    frame: false,
    backgroundColor: '#000000',
    show: false,
    icon: path.join(__dirname, '/app/assets/icons/png/zoox-icon-64x64.png'),
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.loadURL(`file://${__dirname}/app/index.html`);

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
