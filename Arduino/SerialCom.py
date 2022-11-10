
import serial
import time


port = '/dev/ttyACM0'
Arduino = serial.Serial(port ,9600, timeout=1)
Arduino.reset_input_buffer()

def readTDS():
    Arduino.flush()
    data = Arduino.readline().decode('utf-8').rstrip()
    time.sleep(.5)
    print(data)
    return data

# readTDS()