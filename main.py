import RPi.GPIO as GPIO

from Firebase.firebase import firebaseReadChild,firebaseUpdateChild
from Arduino.SerialCom import readTDS

import os
import time
import Adafruit_DHT
import threading

from tkinter import *
import customtkinter
from PIL import ImageTk, Image
import tkinter as tk





# ********************************************************* Hydroponics GUI ********************************************************* #

customtkinter.set_appearance_mode("Dark")
customtkinter.set_default_color_theme("green")  # Themes: blue (default), dark-blue, green

root = tk.Tk()

root.title('Hydroponics')
root.iconbitmap('Images/hydroponic.ico')

root.resizable(0,0)
root.configure(bg='black')
# root.configure(bg='#FFFFFF')

window_height = 700
window_width = 1020

screen_width = root.winfo_screenwidth()
screen_height = root.winfo_screenheight()

x_cordinate = int((screen_width/2) - (window_width/2))
y_cordinate = int((screen_height/4) - (window_height/4))
root.geometry("{}x{}+{}+{}".format(window_width, window_height, x_cordinate, y_cordinate))


#==================================2 main frames top and bottom====================================

top_frame = tk.Frame(root, width=1100, height=400, background="#F5F5F5")
top_frame.pack(pady=30, padx=30)
top_frame.pack_propagate("false")

bot_frame = tk.Frame(root, width=1100, height=250, background="#F5F5F5")
bot_frame.pack(padx=30)
bot_frame.pack_propagate("false")

#==================================3 top frames====================================

myLabel = Label(top_frame, text="Parameters", bg="#F5F5F5", fg='#3B3D40', font=("Open Sans Semibold", 12))
myLabel.grid(pady=5, padx=10, sticky='w')

top_frame1 = tk.Frame(top_frame, width=300, height=300, bg="#FFFFFF")
top_frame1.grid(row=3, column=0, padx=2, pady=4)
top_frame1.pack_propagate("false")

top_frame2 = tk.Frame(top_frame, width=300, height=300, bg="#FFFFFF")
top_frame2.grid(row=3, column=1, padx=2, pady=4)
top_frame2.pack_propagate("false")

top_frame3 = tk.Frame(top_frame, width=300, height=300, bg="#FFFFFF")
top_frame3.grid(row=3, column=2, padx=2, pady=4)
top_frame3.pack_propagate("false")

#==================================top frame 1 info====================================

my_img = (Image.open("Images/celsius.png"))

resized_image= my_img.resize((110,110))
new_image= ImageTk.PhotoImage(resized_image)

myLabel1 = Label(top_frame1, text=" \n" + " ", bg='#FFFFFF')
myLabel1.pack()

myLabel2= Label(top_frame1, image=new_image, height=170, width=170, bg='#FFFFFF')
myLabel2.pack()

#dito yung value na manggagaling sa sensor
myLabel3 = Label(top_frame1, text="00.0 °C", font=("Open Sans Bold", 30), bg='#FFFFFF', fg='#3B3D40')
myLabel3.pack()

myLabel4 = Label(top_frame1, text="Temperature", font=("Open Sans Semibold", 10), bg='#FFFFFF', fg='#3B3D40')
myLabel4.pack()

#==================================top frame 2 info====================================

my_img_1 = (Image.open("Images/water-level.png"))

resized_image_1= my_img_1.resize((110,110))
new_image_1= ImageTk.PhotoImage(resized_image_1)

myLabel1_2 = Label(top_frame2, text=" \n" + " ", bg='#FFFFFF')
myLabel1_2.pack()

myLabel2_2= Label(top_frame2, image=new_image_1, height=170, width=170, bg='#FFFFFF')
myLabel2_2.pack()

#dito yung value na manggagaling sa sensor
myLabel3_2 = Label(top_frame2, text="100 %", font=("Open Sans Bold", 30), bg='#FFFFFF', fg='#3B3D40')
myLabel3_2.pack()

myLabel4_2 = Label(top_frame2, text="Water Level", font=("Open Sans Semibold", 10), bg='#FFFFFF', fg='#3B3D40')
myLabel4_2.pack()

#==================================top frame 3 info====================================

my_img_2 = (Image.open("Images/meter.png"))

resized_image_2= my_img_2.resize((110,110))
new_image_2= ImageTk.PhotoImage(resized_image_2)

myLabel1_3 = Label(top_frame3, text=" \n" + " ", bg='#FFFFFF')
myLabel1_3.pack()

myLabel2_3= Label(top_frame3, image=new_image_2, height=170, width=170, bg='#FFFFFF')
myLabel2_3.pack()

#dito yung value na manggagaling sa sensor
myLabel3_3 = Label(top_frame3, text="0 PPM", font=("Open Sans Bold", 30), bg='#FFFFFF', fg='#3B3D40')
myLabel3_3.pack()

myLabel4_3 = Label(top_frame3, text="TDS Level", font=("Open Sans Semibold", 10), bg='#FFFFFF', fg='#3B3D40')
myLabel4_3.pack()

#==================================3 bottom frames====================================

myLabel = Label(bot_frame, text="Switches", bg="#F5F5F5", fg='#3B3D40', font=("Open Sans Semibold", 12))
myLabel.grid(pady=5, padx=10, sticky='w')

bot_frame1 = tk.Frame(bot_frame, width=300, height=190, bg="#FFFFFF")
bot_frame1.grid(row=3, column=0, padx=2, pady=4)
bot_frame1.pack_propagate("false")

bot_frame2 = tk.Frame(bot_frame, width=300, height=190, bg="#FFFFFF")
bot_frame2.grid(row=3, column=1, padx=2, pady=4)
bot_frame2.pack_propagate("false")

bot_frame3 = tk.Frame(bot_frame, width=300, height=190, bg="#FFFFFF")
bot_frame3.grid(row=3, column=2, padx=2, pady=4)
bot_frame3.pack_propagate("false")

#==================================bottom frame 1 info====================================

my_img_3 = (Image.open("Images/water-pump.png"))

resized_image_3= my_img_3.resize((70,70))
new_image_3= ImageTk.PhotoImage(resized_image_3)

myLabel1 = Label(bot_frame1, text=" \n" + " \n", bg='#FFFFFF')
myLabel1.pack(padx=25, pady=15, side=tk.LEFT)

myLabel2= Label(bot_frame1, image=new_image_3, height=80, width=60, bg='#FFFFFF')
myLabel2.pack(side=tk.LEFT)

myLabel3 = Label(bot_frame1, text=" \n" + " \n", bg='#FFFFFF')
myLabel3.pack()

myLabel4 = Label(bot_frame1, text="Water Pump", font=("Open Sans Semibold", 10), bg='#FFFFFF', fg='#3B3D40')
myLabel4.pack(pady=15)

switch_1 = customtkinter.CTkSwitch(bot_frame1, text="")#eto yung switch pre
switch_1.pack()

#==================================bottom frame 2 info====================================

my_img_4 = (Image.open("Images/oxygen.png"))

resized_image_4= my_img_4.resize((70,70))
new_image_4= ImageTk.PhotoImage(resized_image_4)

myLabel1_2 = Label(bot_frame2, text=" \n" + " \n", bg='#FFFFFF')
myLabel1_2.pack(padx=25, pady=15, side=tk.LEFT)

myLabel2_2= Label(bot_frame2, image=new_image_4, height=80, width=60, bg='#FFFFFF')
myLabel2_2.pack(side=tk.LEFT)

myLabel3_2 = Label(bot_frame2, text=" \n" + " \n", bg='#FFFFFF')
myLabel3_2.pack()

myLabel4_2 = Label(bot_frame2, text="Oxygen Pump", font=("Open Sans Semibold", 10), bg='#FFFFFF', fg='#3B3D40')
myLabel4_2.pack(pady=15)

switch_2 = customtkinter.CTkSwitch(bot_frame2, text="")     #eto yung switch pre
switch_2.pack()

#==================================bottom frame 3 info====================================

my_img_5 = (Image.open("Images/pump.png"))

resized_image_5= my_img_5.resize((70,70))
new_image_5= ImageTk.PhotoImage(resized_image_5)

myLabel1_3 = Label(bot_frame3, text=" \n" + " \n", bg='#FFFFFF')
myLabel1_3.pack(padx=25, pady=15, side=tk.LEFT)

myLabel2_3= Label(bot_frame3, image=new_image_5, height=80, width=60, bg='#FFFFFF')
myLabel2_3.pack(side=tk.LEFT)

myLabel3_3 = Label(bot_frame3, text=" \n" + " \n", bg='#FFFFFF')
myLabel3_3.pack()

myLabel4_3 = Label(bot_frame3, text="Peristaltic Pump", font=("Open Sans Semibold", 10), bg='#FFFFFF', fg='#3B3D40')
myLabel4_3.pack(pady=15)

switch_3 = customtkinter.CTkSwitch(bot_frame3, text="")     #eto yung switch pre
switch_3.pack()

# ********************************************************* Hydroponics Backend ********************************************************* #
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
    time.sleep(1)
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

    percent =(int(inches) * 100)/ 11;
    
    print(str(GPIO.input(FloatSwitchh)))
   
    if not GPIO.input(FloatSwitchh):

            
        firebaseUpdateChild("waterLevel","level",str(int(percent)) + " %")
    else:
         firebaseUpdateChild("waterLevel","level","100%")   
        # firebaseUpdateChild("waterLevel","level",str(int(100 - percent)) + "%")
    
def oxygenPump():
    GPIO.output(OxyPump,firebaseReadChild("oxyPump","data"))
    
def waterPump():
    GPIO.output(WaterPump,firebaseReadChild("waterPump","data"))
    
def peralPump():
    # 20L of tubig
    data = firebaseReadChild("peralPump","data")
    GPIO.output(PeralPump,data)
    
    if data == False:
        firebaseUpdateChild("waterPump","data",False)
        GPIO.output(WaterPump,GPIO.LOW)
        time.sleep(100)
        firebaseUpdateChild("peralPump","data",True)


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
root.mainloop()

 
