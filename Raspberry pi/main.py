# main file 
from Firebase.firebase import firebaseUpdate,firebaseRead

# firebaseUpdate(keyValue,value) 
# keyValue = name ng current value
# use this function if you want to update the 
# return a boolean function
print(firebaseUpdate("Example","test"))

# firebaseRead(keyValue) 
# keyValue = name ng current value
# use this function if you want to read a specific keyName
print(firebaseRead("check"))