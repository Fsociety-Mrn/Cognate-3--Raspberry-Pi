#include <EEPROM.h>
#include "GravityTDS.h"
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27,20,4);


#define TdsSensorPin A0
GravityTDS gravityTds;
 
float temperature = 25,tdsValue = 0;

//Sonar Sensor 1
int Trig = 2;
int Echo = 3;

int pump = 13; //float switch 1


void setup()
{
    Serial.begin(9600);
    gravityTds.setPin(TdsSensorPin);
    gravityTds.setAref(5.0);  //reference voltage on ADC, default 5.0V on Arduino UNO
    gravityTds.setAdcRange(1024);  //1024 for 10bit ADC;4096 for 12bit ADC
    gravityTds.begin();  //initialization
    
    pinMode(Trig, OUTPUT);
    pinMode(Echo, INPUT);
    pinMode(A1, OUTPUT);
    pinMode(pump, OUTPUT);

    lcd.init(); 
    lcd.backlight();

}
 
void loop()
{

  lcd.clear();
  lcd.print("inch: ");
  lcd.print(tankLevel());
  Serial.println(TDS() + " PPM");
  delay(1000);
}

String TDS(){
    //temperature = readTemperature();  //add your temperature sensor and read it
    gravityTds.setTemperature(temperature);  // set the temperature and execute temperature compensation
    gravityTds.update();  //sample and calculate
    tdsValue = gravityTds.getTdsValue();  // then get the value
    //Serial.println(int(tdsValue));
    //Serial.println(" ppm");
   
    return String(int(tdsValue));
    delay(1000);
}

// for tank level
int tankLevel(){
  
  digitalWrite(Trig, LOW);
  delayMicroseconds(2);
  digitalWrite(Trig, HIGH);
  delayMicroseconds(10);
  digitalWrite(Trig, LOW);

//  duration
  long duration = pulseIn(Echo, HIGH);

//return an inches
  int inches = duration / 74 / 2;
  int percent = inches * 100L/ 8L;
  int spercent = 100L - percent;

  Serial.println(inches);
      
  if (spercent < 30){
    digitalWrite(pump,HIGH);
  }
  
  if (spercent > 85){
    digitalWrite(pump,LOW);
  }
  
  return spercent;
}
