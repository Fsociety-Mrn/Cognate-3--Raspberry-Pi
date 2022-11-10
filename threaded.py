import threading
import time

def Hello():
    time.sleep(2)
    print("Hello Friend\n")

def Friend():
    time.sleep(3)
    print("Hello World")
    
threading.Thread(target=Hello, args=()).start()
threading.Thread(target=Hello, args=()).start()



