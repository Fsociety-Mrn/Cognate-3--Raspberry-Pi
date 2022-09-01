# main file 
from Firebase.firebase import firebaseUpdate,firebaseRead,firebaseReadChild

# firebaseUpdate(keyValue,value) 
# keyValue = name ng current value
# use this function if you want to update the 
# return a boolean function

# print(firebaseUpdate("Example","OO GUMAGANA"))

# firebaseRead(keyValue) 
# keyValue = name ng current value
# use this function if you want to read a specific keyName
#

# print(firebaseRead("Example"))



while True:
    # for LED blink 
    print(firebaseReadChild("LED","turnOn"))

# for website copy & paste this link
# https://cognate-3-raspberrypi.web.app/

