// arduino-serial.js (Node.js)
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');

const port = new SerialPort('COM4', {
  baudRate: 9600 // Ajusta el baud rate según la configuración de tu Arduino
});

const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

// Escucha los datos del puerto serial
parser.on('data', (data) => {
  console.log('Dato recibido desde Arduino:', data);
});
  