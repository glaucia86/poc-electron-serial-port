/**
 * Arquivo: src/js/serialPort.js
 * Data: 18/10/2018
 * Descrição: arquivo responsável por renderizar o processo da janela.
 *  Tudo a respeito de Node.js estão disponíveis nesse processo.
 * Author: Glaucia Lemos
 */

const serialPort = require('serialport');

(function serialPortInitializer() {
  const $targetElm = $('#displaySerialPort');
  const $selectElm = $('<select />');

  serialPort.list().then((ports) => {
    ports.forEach((option, index) => {
      $selectElm.append(`<option value="${encodeURIComponent(JSON.stringify(option))}"> Dispositivo ${index} </option>`);
    });

    $targetElm
      .html(
        $selectElm.html(),
      );

    $targetElm.change((evt) => {
      const value = decodeURIComponent(evt.target.value);
      alert(value);
    });
  });
}());
