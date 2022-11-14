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

# ********************** setup functions ********************** # 
def setup():
    GPIO.setwarnings(False) 
    GPIO.setmode(GPIO.BOARD)
    GPIO.setup(LED,GPIO.OUT) 
    GPIO.setup(FloatSwitchh,GPIO.IN)
    GPIO.setup(OxyPump,GPIO.OUT)
    GPIO.setup(WaterPump,GPIO.OUT)
    GPIO.setup(PeralPump,GPIO.OUT) 
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
    if GPIO.input(FloatSwitchh):
        firebaseUpdateChild("waterLevel","level","100%")
        
    else:
        firebaseUpdateChild("waterLevel","level","0%")
    
def oxygenPump():
    GPIO.output(OxyPump,firebaseReadChild("oxyPump","data"))
    
def waterPump():
    GPIO.output(WaterPump,firebaseReadChild("waterPump","data"))
    
def peralPump():
    GPIO.output(PeralPump,firebaseReadChild("peralPump","data"))

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
    threading.Thread(target=waterPump, args=()) .start()
    
    #Peraltalstic Pump
    threading.Thread(target=peralPump, args=()).start()


    return loop()



setup()
loop()


