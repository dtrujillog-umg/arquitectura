#include <Servo.h>

const int ledPin1 = 2;
const int ledPin2 = 3;
const int ledPin3 = 4;
const int ledPin4 = 5;
const int ledPin5 = 6;
const int ledPin6 = 7;
Servo servo1;
Servo servo2;

void setup() {
  pinMode(ledPin1, OUTPUT);
  pinMode(ledPin2, OUTPUT);
  pinMode(ledPin3, OUTPUT);
  pinMode(ledPin4, OUTPUT);
  pinMode(ledPin5, OUTPUT);
  pinMode(ledPin6, OUTPUT);
  
  servo1.attach(8);  // Conecta el servo al pin 8
  servo2.attach(9);  // Conecta el servo al pin 9

  Serial.begin(9600);
}

void loop() {
  if (Serial.available() > 0) {
    String command = Serial.readStringUntil('\n');
    command.trim();
    if (command == "ON1") {
      digitalWrite(ledPin1, HIGH);
    } else if (command == "OFF1") {
      digitalWrite(ledPin1, LOW);
    } else if (command == "ON2") {
      digitalWrite(ledPin2, HIGH);
    } else if (command == "OFF2") {
      digitalWrite(ledPin2, LOW);
    } else if (command == "ON3") {
      digitalWrite(ledPin3, HIGH);
    } else if (command == "OFF3") {
      digitalWrite(ledPin3, LOW);
    } else if (command == "ON4") {
      digitalWrite(ledPin4, HIGH);
    } else if (command == "OFF4") {
      digitalWrite(ledPin4, LOW);
    } else if (command == "ON5") {
      digitalWrite(ledPin5, HIGH);
    } else if (command == "OFF5") {
      digitalWrite(ledPin5, LOW);
    } else if (command == "ON6") {
      digitalWrite(ledPin6, HIGH);
    } else if (command == "OFF6") {
      digitalWrite(ledPin6, LOW);
    } else if (command == "OPEN1") {
      servo1.write(90);  // Gira el servo1 a 90 grados
    } else if (command == "CLOSE1") {
      servo1.write(0);   // Gira el servo1 a 0 grados
    } else if (command == "OPEN2") {
      servo2.write(90);  // Gira el servo2 a 90 grados
    } else if (command == "CLOSE2") {
      servo2.write(0);   // Gira el servo2 a 0 grados
    }
  }
}
