const portaSerial = require('serialport');

// impressora -> /dev/ttyS31
// /dev/tty.Bluetooth-Incoming-Port
portaSerial.list().then((ports) => {
  // console.log("serial ports -> ", ports)


  ports.forEach((item) => {
    console.log('current  port ', item.comName);


    const port = new portaSerial(item.comName, {
      baudRate: 33600,
    });

    port.on('open', (err) => {
      if (err) {
        console.log('err opening port -> ', item.comName, '    ', err);
      }

      const imprimir = 'Testando ... \n\n\n\n';

      port.write(imprimir);
    });
  });
});

// importante comando no terminal: cat < /dev/bus/usb/001/003
