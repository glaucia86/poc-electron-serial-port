/**
 * Arquivo: main.js
 * Data: 18/10/2018
 * Descrição: arquivo responsável por executar a aplicação Electron
 * Author: Glaucia Lemos
 */

const electron = require('electron');
const app = require('electron').app;
const BrowserWindow = require('electron').BrowserWindow;

const $ = require('jquery');
const path = require('path');

// Variáveis responsáveis pela Impressão com Electron:
const fs = require('fs');
const os = require('os');
const ipc = electron.ipcMain;
const shell = electron.shell;

let mainWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    backgroundColor: '#000000',
    show: false,
    icon: path.join(__dirname, '/src/assets/icons/png/zoox-icon.png'),
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.loadURL(`file://${__dirname}/src/index.html`);

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

// Lógica inerente a impressão em PDF com Electron:
ipc.on('print-to-pdf', (evt) => {
  const pdfPath = path.join(os.tmpdir(), 'print.pdf');
  const win = BrowserWindow.fromWebContents(evt.sender);

  win.webContents.printToPDF({}, (error, data) => {
    if (error) return console.log(error.message);

    fs.writeFile(pdfPath, data, (err) => {
      if (err) return console.log(err.message);
      shell.openExternal(`file://${pdfPath}`);
      evt.sender.send('wrote-pdf', pdfPath);
    });
  });
});
