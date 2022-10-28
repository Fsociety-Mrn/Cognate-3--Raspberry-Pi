import RPi.GPIO as GPIO
# import time
from Firebase.firebase import firebaseReadChild,firebaseUpdateChild

# READ ME!

# update specific database value
# 
# firebaseUpdateChild(keyName,keyChild,value) with return true or false
# 
# Examples from database value:
# LED 
#  |_ turnON: false 
# 
# Python Code: 
# keyName = "LED"
# keyChild = "turnON"
# value = True
# print(firebaseUpdateChild(keyName,keyChild,value)) 
# if success it will print "True"


# read specific database value
# 
# firebaseReadChild(keyName,valueName) return value function
# 
# Examples from database value:
# LED 
#  |_ turnON: true 
# Python Code:
# keyName = "LED"
# keyChild = "turnON"
# print(firebaseReadChild(keyName,valueName))
# if success it will print the value from database 

# setup functions
def setup():
    GPIO.setmode(GPIO.BCM)
    
    GPIO.setup(40,GPIO.OUT) #pinMode 40



# loop function
def loop():
    
    if (firebaseReadChild("LED","turnOn")):
        GPIO.output(40,GPIO.HIGH)
    else:
        GPIO.output(40,GPIO.LOW)
    
    print(firebaseUpdateChild("LED","turnOn",False))
    print(firebaseReadChild("LED","turnOn"))
    
    return loop()



setup()
loop()