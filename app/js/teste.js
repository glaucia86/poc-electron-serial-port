const PortaSerial = require('serialport');

// impressora -> /dev/ttyS31
// /dev/tty.Bluetooth-Incoming-Port
PortaSerial.list().then((ports) => {
  // console.log("serial ports -> ", ports)


  ports.forEach((item) => {
    // console.log('current  port ', item.comName);


    const port = new PortaSerial(item.comName, {
      baudRate: 9600,
    });

    port.on('open', (err) => {
      if (err) {
        // console.log('err opening port -> ', item.comName, '    ', err);
      }

      const imprimir = 'Testando ... \n\n\n\n';

      port.write(imprimir);
    });
  });
});
