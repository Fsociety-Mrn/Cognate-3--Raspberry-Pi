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
floatSwitchh = 16

# ********************** setup functions ********************** # 
def setup():
    GPIO.setwarnings(False) 
    GPIO.setmode(GPIO.BOARD)
    GPIO.setup(LED,GPIO.OUT) 
    GPIO.setup(floatSwitchh,GPIO.IN)
    
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
    time.sleep(1)
    if GPIO.input(floatSwitchh):
        firebaseUpdateChild("waterLevel","level","100%")
        
    else:
        firebaseUpdateChild("waterLevel","level","0%")
    

# ********************** loop function ********************** #
def loop():
    
    #LED
    threading.Thread(target=Led, args=()).start()
    
    #Humidity convert to  Temperature
    threading.Thread(target=Humidity, args=()).start()
    
    #TDS
    threading.Thread(target=firebaseUpdateChild, args=("TDS","data", readTDS())).start()
    
    #wate level
    threading.Thread(target=waterLevel, args=()).start()


    return loop()



setup()
loop()

