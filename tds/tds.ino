#include <EEPROM.h>
#include "GravityTDS.h"
 
#define TdsSensorPin A0
GravityTDS gravityTds;
 
float temperature = 25,tdsValue = 0;

//Sonar Sensor 1
int Trig = 2;
int Echo = 3;

int Float = 4; //float switch 1
 
void setup()
{
    Serial.begin(9600);
    gravityTds.setPin(TdsSensorPin);
    gravityTds.setAref(5.0);  //reference voltage on ADC, default 5.0V on Arduino UNO
    gravityTds.setAdcRange(1024);  //1024 for 10bit ADC;4096 for 12bit ADC
    gravityTds.begin();  //initialization
    
    pinMode(Trig, OUTPUT);
    pinMode(Echo, INPUT);
    
    pinMode(Float, INPUT_PULLUP);
}
 
void loop()
{
  Serial.print(TDS() + " PPM");
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

  if (!digitalRead(Float)){
    return inches;
  }else{
    return 100;
  }
    // return inches;
}


