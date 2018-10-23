/**
 * Arquivo: app/js/serialPort.js
 * Data: 18/10/2018
 * Descrição: arquivo responsável por renderizar o processo da janela.
 *  Tudo a respeito de Node.js estão disponíveis nesse processo.
 * Author: Glaucia Lemos
 */

const serialPort = require('serialport');

serialPort.list((err, ports) => {
  console.log('portas...:', ports);

  if (err) {
    document.getElementById('error').textContent = err.message;
  } else {
    document.getElementById('error').textContent = '';
  }

  if (ports.length === 0) {
    document.getElementById('error').textContent = 'Não encontramos nenhuma porta!';
  }

  const headers = Object.keys(ports[0]);
  const table = createTable(headers);
  tableHTML = '';
  table.on('data', data => tableHTML += data);
  table.on('end', () => document.getElementById('ports').innerHTML = tableHTML);
  ports.forEach(port => table.write(port));
  table.end();
});
