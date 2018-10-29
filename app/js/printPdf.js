/**
 * Arquivo: app/js/printPdf.js
 * Data: 25/10/2018
 * Descrição: arquivo responsável por tratar a impressão para PDF do que for digitado na 'textarea'
 * na aplicação Electron.
 * Author: Glaucia Lemos
 */

const ipcPrint = require('electron').ipcRenderer;

const printPDFButton = document.getElementById('print-pdf');

printPDFButton.addEventListener('click', (evt) => {
  ipcPrint.send('print-to-pdf');
});

ipcPrint.on('wrote-pdf', (evt, path) => {
  const message = `Wrote PDF to: ${path}`;
  document.getElementById('pdf-path').innerHTML = message;
});
