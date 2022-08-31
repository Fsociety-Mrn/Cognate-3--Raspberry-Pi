# main file 
from Firebase.firebase import firebaseUpdate,firebaseRead
# import qrcode
# img = qrcode.make('Some data here')
# type(img)  # qrcode.image.pil.PilImage
# img.save("some_file.png")

# firebaseUpdate(keyValue,value) 
# keyValue = name ng current value
# use this function if you want to update the 
# return a boolean function
print(firebaseUpdate("Example","OO GUMAGANA"))

# firebaseRead(keyValue) 
# keyValue = name ng current value
# use this function if you want to read a specific keyName
print(firebaseRead("check"))