import RPi.GPIO as GPIO

from Firebase.firebase import firebaseReadChild,firebaseUpdateChild

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
    GPIO.setup(floatSwitchh,GPIO.OUT)
    
# ********************** functions ********************** #  
    
# for humidty function
def Humidity():

    humidity, temperature = Adafruit_DHT.read_retry(sensor, Humid)

    if humidity is not None and temperature is not None:
        # print('Temp={0:1.0f}*C  Humidity={1:0.1f}%'.format(temperature, humidity))
        
        firebaseUpdateChild("Humid","Humidity",str('Temp={0:1.0f}*C  Humidity={1:0.1f}%'.format(temperature, humidity)).replace("Temp={0:1.0f}*C  Humidity=",""))

    else:
        print("wa;a")
        #firebaseUpdateChild("Humid","Humidity","unable to read")

    #time.sleep(5)
        
# Led function
def Led():
    if (firebaseReadChild("LED","turnOn")):
        
        GPIO.output(LED,GPIO.HIGH)
    else:
        GPIO.output(LED,GPIO.LOW)  
    # print(firebaseReadChild("LED","turnOn"))


# ********************** loop function ********************** #
def loop():
    # Led()

    threading.Thread(target=Led, args=()).start()
    threading.Thread(target=Humidity, args=()).start()
    


    return loop()



setup()
loop()
