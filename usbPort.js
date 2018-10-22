/**
 * Arquivo: usb.js
 * Data: 19/10/2018
 * Descrição: arquivo responsável por executar a biblioteca 'node-usb'
 * Author: Glaucia Lemos
 */

'use strict'

const usb = require('usb');
const $ = require('jquery');
const devices = usb.getDeviceList();
const $targetElm = $('#display')
const $selectElm = $('<select />');

devices.forEach((option, index) => {
$selectElm.append(`<option value="${encodeURIComponent(JSON.stringify(option))}"> Dispositivo ${index} </option>`)
});

// Sobrescreve elemento na DOM
$targetElm
  .html(
    $selectElm.html()
);

$targetElm.change(function(evt) {
  const value = JSON.parse(decodeURIComponent(evt.target.value));
  alert(value);
})
