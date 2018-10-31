/**
 * Arquivo: src/js/usbPort.js
 * Data: 19/10/2018
 * Descrição: arquivo responsável por executar a biblioteca 'node-usb e listar as portas disponíveis num
 * determinado aparelho.'
 * Author: Glaucia Lemos
 */

const usb = require('usb');

(function usbPortInitializer() {
  const devices = usb.getDeviceList();
  const $targetElm = $('#display');
  const $selectElm = $('<select />');

  devices.forEach((option, index) => {
    $selectElm.append(`<option value="${encodeURIComponent(JSON.stringify(option))}"> Dispositivo ${index} </option>`);
  });

  // Sobrescreve elemento na DOM
  $targetElm
    .html(
      $selectElm.html(),
    );

  $targetElm.change((evt) => {
    const value = decodeURIComponent(evt.target.value);
    alert(value);
  });
}());
