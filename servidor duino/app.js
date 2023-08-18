const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const SerialPort = require("serialport");

app.use(express.static(__dirname + "/public"));

const arduinoPort = "COM4"; // Cambia esto al puerto correcto
const port = new SerialPort(arduinoPort, {
  baudRate: 9600,
});

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

  // Agregar control para los servos
  socket.on("servo1", (data) => {
    console.log("Comando servo 1:", data);
    const command = data === "CLOSE1\n";
    enviarComandoSerial(command);
  });

  socket.on("CLOSE1", () => {
    console.log("Cerrando Servo 1");
    const command = "CLOSE1\n";
    enviarComandoSerial(command);
  });

  socket.on("OPEN2", () => {
    console.log("Abriendo Servo 2");
    const command = "OPEN2\n";
    enviarComandoSerial(command);
  });

  socket.on("CLOSE2", () => {
    console.log("Cerrando Servo 2");
    const command = "CLOSE2\n";
    enviarComandoSerial(command);
  });

  socket.on("disconnect", () => {
    console.log("Un cliente se ha desconectado");
  });
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
