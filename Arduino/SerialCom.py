
import serial
import time
import threading

port = '/dev/ttyACM0'
Arduino = serial.Serial(port ,9600, timeout=1)
Arduino.reset_input_buffer()


def readTDS():
    try:
    
        
        Arduino.flush()
        data = Arduino.readline().decode('utf-8').rstrip()
        #print(data)
        time.sleep(1)
        return data
    except:
    
        return "0 PPM"

def A():
    print(readTDS()[0])
    
def B():
    print(readTDS()[1])
