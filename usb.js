/**
 * Arquivo: usb.js
 * Data: 19/10/2018
 * Descrição: arquivo responsável por executar a biblioteca 'node-usb'
 * Author: Glaucia Lemos
 */

const usb = require('usb');

function listarDevices() {
  document.getElementById('display').innerHTML = JSON.stringify(usb.getDeviceList());
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('but').addEventListener('click', listarDevices);
});

console.log(usb.getDeviceList());
