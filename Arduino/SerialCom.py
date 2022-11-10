
import serial
import time


port = "COM4" or '/dev/ttyACM0'
Arduino = serial.Serial(port ,9600, timeout=1)
Arduino.reset_input_buffer()

def readTDS():
    data = Arduino.readline().decode('utf-8').rstrip()
    print(data)
    time.sleep(1)
    return readTDS()

readTDS()
