const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const SerialPort = require("serialport");

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(__dirname + "/public"));

// Conexión al puerto serial del Arduino (ajusta el nombre del puerto según tu configuración)
const arduinoPort = "COM3"; // Cambia esto al puerto correcto
const port = new SerialPort(arduinoPort, {
  baudRate: 9600,
});

// Cuando se conecte un cliente por socket
io.on("connection", (socket) => {
  console.log("Un cliente se ha conectado");

  // Escuchar el evento 'led1' enviado por el cliente para el primer LED
  socket.on("led1", (data) => {
    console.log("Comando LED 1:", data);
    const command = data === "ON" ? "ON1\n" : "OFF1\n";
    enviarComandoSerial(command);
  });

  // Escuchar el evento 'led2' enviado por el cliente para el segundo LED
  socket.on("led2", (data) => {
    console.log("Comando LED 2:", data);
    const command = data === "ON" ? "ON2\n" : "OFF2\n";
    enviarComandoSerial(command);
  });

  // Escuchar el evento 'led3' enviado por el cliente para el segundo LED
  socket.on("led3", (data) => {
    console.log("Comando LED 3:", data);
    const command = data === "ON" ? "ON3\n" : "OFF3\n";
    enviarComandoSerial(command);
  });

  // Escuchar el evento 'led4' enviado por el cliente para el segundo LED
  socket.on("led4", (data) => {
    console.log("Comando LED 4:", data);
    const command = data === "ON" ? "ON4\n" : "OFF4\n";
    enviarComandoSerial(command);
  });
  // Escuchar el evento 'led5' enviado por el cliente para el segundo LED
  socket.on("led5", (data) => {
    console.log("Comando LED 5:", data);
    const command = data === "ON" ? "ON5\n" : "OFF5\n";
    enviarComandoSerial(command);
  });
  // Escuchar el evento 'led6' enviado por el cliente para el segundo LED
  socket.on("led6", (data) => {
    console.log("Comando LED 6:", data);
    const command = data === "ON" ? "ON6\n" : "OFF6\n";
    enviarComandoSerial(command);
  });

  // Función para enviar comandos al Arduino a través del puerto serial
  function enviarComandoSerial(command) {
    port.write(command, (err) => {
      if (err) {
        return console.log(
          "Error al enviar el comando al Arduino:",
          err.message
        );
      }
      console.log("Comando enviado al Arduino:", command);
    });
  }

  // Cuando se desconecte un cliente
  socket.on("disconnect", () => {
    console.log("Un cliente se ha desconectado");
  });
});

// Iniciar el servidor en el puerto 3000
const portNumber = 3000;
http.listen(portNumber, () => {
  console.log(`El servidor está funcionando en http://localhost:${portNumber}`);
});
