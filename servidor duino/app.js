const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const SerialPort = require('serialport');

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(__dirname + '/public'));

// Conexión al puerto serial del Arduino (ajusta el nombre del puerto según tu configuración)
const arduinoPort = 'COM3';
const port = new SerialPort(arduinoPort, {
  baudRate: 9600
});

// Cuando se conecte un cliente por socket
io.on('connection', (socket) => {
  console.log('Un cliente se ha conectado');

  // Escuchar el evento 'color' enviado por el cliente
  socket.on('color', (data) => {
    console.log('Color seleccionado:', data);
    // Enviar los valores de rojo, verde y azul al Arduino a través del puerto serial
    const command = `RGB(${data.red},${data.green},${data.blue})\n`;
    enviarComandoSerial(command);
  });

  // Función para enviar comandos al Arduino a través del puerto serial
  function enviarComandoSerial(command) {
    port.write(command, (err) => {
      if (err) {
        return console.log('Error al enviar el comando al Arduino:', err.message);
      }
      console.log('Comando enviado al Arduino:', command);
    });
  }

  // Cuando se desconecte un cliente
  socket.on('disconnect', () => {
    console.log('Un cliente se ha desconectado');
  });
});

// Iniciar el servidor en el puerto 3000
const portNumber = 3000;
http.listen(portNumber, () => {
  console.log(`El servidor está funcionando en http://localhost:${portNumber}`);
});
