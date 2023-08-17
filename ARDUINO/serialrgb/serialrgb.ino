const int ledPin1 = 2;  // Pin para el primer LED
const int ledPin2 = 3;  // Pin para el segundo LED

void setup() {
  pinMode(ledPin1, OUTPUT);
  pinMode(ledPin2, OUTPUT);
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
    }
  }
}
