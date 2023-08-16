#include <Servo.h>

const int redPin = 9;
const int greenPin = 10;
const int bluePin = 11;
Servo servo;

void setup() {
  pinMode(redPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
  pinMode(bluePin, OUTPUT);
  servo.attach(3); // Cambiar al pin correspondiente donde está conectado el servo
  Serial.begin(9600);
}

void loop() {
  if (Serial.available() > 0) {
    String command = Serial.readStringUntil('\n');
    command.trim();
    if (command == "RED") {
      setColor(255, 0, 0);
    } else if (command == "GREEN") {
      setColor(0, 255, 0);
    } else if (command == "BLUE") {
      setColor(0, 0, 255);
    } else if (command == "OFF") {
      setColor(0, 0, 0);
    } else if (command.startsWith("SERVO")) {
      int angle = command.substring(6).toInt();
      moveServo(angle);
    }
  }
}

void setColor(int redValue, int greenValue, int blueValue) {
  analogWrite(redPin, redValue);
  analogWrite(greenPin, greenValue);
  analogWrite(bluePin, blueValue);
}

void moveServo(int angle) {
  servo.write(angle);
}
