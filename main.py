import RPi.GPIO as GPIO

from Firebase.firebase import firebaseReadChild,firebaseUpdateChild
from Arduino.SerialCom import readTDS

import os
import time
import Adafruit_DHT
import threading

# Sensor should be set to Adafruit_DHT.DHT11,
# Adafruit_DHT.DHT22, or Adafruit_DHT.AM2302.
sensor = Adafruit_DHT.DHT22

# ********************** Pin Configuration ********************** #
LED = 12
Humid = 4
FloatSwitchh = 16
OxyPump = 8
WaterPump = 11
PeralPump = 18

# ********* Sonar Sensor
Trig = 13 # brown
Echo = 15 # green

# ********************** setup functions ********************** # 
def setup():
    GPIO.setwarnings(False) 
    GPIO.setmode(GPIO.BOARD)
    GPIO.setup(LED,GPIO.OUT) 
    GPIO.setup(FloatSwitchh,GPIO.IN)
    GPIO.setup(OxyPump,GPIO.OUT)
    GPIO.setup(WaterPump,GPIO.OUT)
    GPIO.setup(PeralPump,GPIO.OUT)
    
    GPIO.setup(Trig,GPIO.OUT)
    GPIO.setup(Echo,GPIO.IN)
# ********************** functions ********************** #  

# for humidty function
def Humidity():

    humidity, temperature = Adafruit_DHT.read_retry(sensor, Humid)

    if humidity is not None:
    
        temp = float('%.1f'%(temperature))
        firebaseUpdateChild("Humid","Humidity",str('%.1f'%((((temp - 32) * 5 )/ 9)*0.1)) + "°C")

    else:
        firebaseUpdateChild("Humid","Humidity","unable to read")

# for temperature function
        
# Led function
def Led():
    if (firebaseReadChild("LED","turnOn")):
        
        GPIO.output(LED,GPIO.HIGH)
    else:
        GPIO.output(LED,GPIO.LOW)  
    # print(firebaseReadChild("LED","turnOn"))

def waterLevel():
    
    GPIO.output(Trig, True)
    # set Trigger after 0.01ms to LOW
    time.sleep(0.00001)
    GPIO.output(Trig, False)

    StartTime = time.time()
    StopTime = time.time()
 
    # save StartTime
    while GPIO.input(Echo) == 0:
        StartTime = time.time()
 
    # save time of arrival
    while GPIO.input(Echo) == 1:
        StopTime = time.time()
 
    # time difference between start and arrival
    TimeElapsed = StopTime - StartTime
    
    # multiply with the sonic speed (34300 cm/s)
    # and divide by 2, because there and back

    cm = (TimeElapsed * 34300) / 2
    
    inches = float('%1.1f'%(cm / 2.54));

    percent =(int(inches) * 100)/ 12;
    
    print(str(int(percent)) + "%")
   
    if GPIO.input(FloatSwitchh):
        firebaseUpdateChild("waterLevel","level","100%")
        
    else:
        firebaseUpdateChild("waterLevel","level",str(int(percent)) + "%")
    
def oxygenPump():
    GPIO.output(OxyPump,firebaseReadChild("oxyPump","data"))
    
def waterPump():
    GPIO.output(WaterPump,firebaseReadChild("waterPump","data"))
    
def peralPump():
    data = firebaseReadChild("peralPump","data")
    GPIO.output(PeralPump,data)
    
    if data:
        time.sleep(10   )
        firebaseUpdateChild("peralPump","data",False)

# ********************** loop function ********************** #
def loop():
    
    #LED
    threading.Thread(target=Led, args=()).start()
    
    #Humidity convert to  Temperature
    threading.Thread(target=Humidity, args=()).start()
    
    #TDS
    threading.Thread(target=firebaseUpdateChild, args=("TDS","data", readTDS())).start()
    
    #water level
    threading.Thread(target=waterLevel, args=()).start()

    #Oxygen Pump
    threading.Thread(target=oxygenPump, args=()).start()
    
    #Water Pump
    threading.Thread(target=waterPump, args=()).start()
    
    #Peraltalstic Pump
    threading.Thread(target=peralPump, args=()).start()

    return loop()



setup()
loop()


