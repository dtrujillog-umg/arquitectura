const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const SerialPort = require("serialport");
const Readline = require('@serialport/parser-readline'); // Importa el parser

app.use(express.static(__dirname + "/public"));

const arduinoPort = "COM4"; // Cambia esto al puerto correcto
const port = new SerialPort(arduinoPort, {
  baudRate: 9600,
});

// Define un parser para leer los datos del puerto serial línea por línea
const parser = port.pipe(new Readline({ delimiter: '\n' }));

io.on("connection", (socket) => {
  console.log("Un cliente se ha conectado");

  socket.on("led1", (data) => {
    console.log("Comando LED 1:", data);
    const command = data === "ON" ? "ON1\n" : "OFF1\n";
    enviarComandoSerial(command);
  });

  socket.on("led2", (data) => {
    console.log("Comando LED 2:", data);
    const command = data === "ON" ? "ON2\n" : "OFF2\n";
    enviarComandoSerial(command);
  });

  socket.on("led3", (data) => {
    console.log("Comando LED 3:", data);
    const command = data === "ON" ? "ON3\n" : "OFF3\n";
    enviarComandoSerial(command);
  });

  socket.on("led4", (data) => {
    console.log("Comando LED 4:", data);
    const command = data === "ON" ? "ON4\n" : "OFF4\n";
    enviarComandoSerial(command);
  });

  socket.on("led5", (data) => {
    console.log("Comando LED 5:", data);
    const command = data === "ON" ? "ON5\n" : "OFF5\n";
    enviarComandoSerial(command);
  });

  socket.on("led6", (data) => {
    console.log("Comando LED 6:", data);
    const command = data === "ON" ? "ON6\n" : "OFF6\n";
    enviarComandoSerial(command);
  });
//control de los servos
  socket.on("servo1", (data) => {
    console.log("Comando Servo 1:", data);
    const command = data === "OPEN1" ? "OPEN1\n" : "CLOSE1\n";
    enviarComandoSerial(command);
  });

  socket.on("servo2", (data) => {
    console.log("Comando Servo 2:", data);
    const command = data === "OPEN2" ? "OPEN2\n" : "CLOSE2\n";
    enviarComandoSerial(command);
  });
});

// Maneja los datos del puerto serial cuando llegan
parser.on('data', (data) => {
  data = data.trim(); // Elimina espacios en blanco alrededor de los datos
  console.log("Datos recibidos desde Arduino:", data);
  // Agrega aquí tu lógica para manejar los datos recibidos desde Arduino
});

function enviarComandoSerial(command) {
  port.write(command, (err) => {
    if (err) {
      return console.log("Error al enviar el comando al Arduino:", err.message);
    }
    console.log("Comando enviado al Arduino:", command);
  });
}

const portNumber = 3000;
http.listen(portNumber, () => {
  console.log(`El servidor está funcionando en http://localhost:${portNumber}`);
});
