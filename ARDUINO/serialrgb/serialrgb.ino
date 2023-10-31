#include <SoftwareSerial.h>

SoftwareSerial bluetooth(2, 3); // RX, TX del módulo HC-05

int motorPin1 = 9;
int motorPin2 = 8;
int motorPin3 = 7;
int motorPin4 = 6;

void setup() {
  pinMode(motorPin1, OUTPUT);
  pinMode(motorPin2, OUTPUT);
  pinMode(motorPin3, OUTPUT);
  pinMode(motorPin4, OUTPUT);
  
  bluetooth.begin(38400);
  //Serial.begin(9600);
}

void loop() {
  if (bluetooth.available() > 0) {
    char command = bluetooth.read();
    //executeCommand(command);
  



  switch (command) {
    case 'F':
      // Avanzar
      digitalWrite(motorPin1, HIGH);
      digitalWrite(motorPin2, LOW);
      digitalWrite(motorPin3, HIGH);
      digitalWrite(motorPin4, LOW);
      break;
      case 'L':
      // Avanzar
      digitalWrite(motorPin1, HIGH);
      digitalWrite(motorPin2, LOW);
      digitalWrite(motorPin3, LOW);
      digitalWrite(motorPin4, LOW);
      break;
      case 'R':
      // Avanzar
      digitalWrite(motorPin1, LOW);
      digitalWrite(motorPin2, LOW);
      digitalWrite(motorPin3, HIGH);
      digitalWrite(motorPin4, LOW);
      break;
    case 'G':
      // Retroceder
      digitalWrite(motorPin1, LOW);
      digitalWrite(motorPin2, HIGH);
      digitalWrite(motorPin3, LOW);
      digitalWrite(motorPin4, HIGH);
      break;
    case 'S':
      // Parar
      digitalWrite(motorPin1, LOW);
      digitalWrite(motorPin2, LOW);
      digitalWrite(motorPin3, LOW);
      digitalWrite(motorPin4, LOW);
      break;
    default:
      // // Comando desconocido, parar por seguridad
      // digitalWrite(motorPin1, LOW);
      // digitalWrite(motorPin2, LOW);
      // digitalWrite(motorPin3, LOW);
      // digitalWrite(motorPin4, LOW);
      break;
  }
}
}