const int ledPin1 = 2;
const int ledPin2 = 3;
const int ledPin3 = 4;
const int ledPin4 = 5;
const int ledPin5 = 6;
const int ledPin6 = 7;

void setup() {
  pinMode(ledPin1, OUTPUT);
  pinMode(ledPin2, OUTPUT);
  pinMode(ledPin3, OUTPUT);
  pinMode(ledPin4, OUTPUT);
  pinMode(ledPin5, OUTPUT);
  pinMode(ledPin6, OUTPUT);
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
    }}
}