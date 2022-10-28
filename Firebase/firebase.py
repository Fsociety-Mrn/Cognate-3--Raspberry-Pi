import pyrebase 
import os
# firebase API keys
config = {
  "apiKey": os.environ.get("apiKey"),
  "authDomain": os.environ.get("authDomain"),
  "databaseURL": "https://cognate-3-default-rtdb.asia-southeast1.firebasedatabase.app",
  "storageBucket": os.environ.get("storageBucket")
}
firebase = pyrebase.initialize_app(config)
db = firebase.database() #realTime database

# read the specific data
def firebaseRead(keyName):
    return db.child(keyName).get().val()

# read the specific data with child
def firebaseReadChild(keyName,valueName):
    return db.child(keyName).child(valueName).get().val()

# update the current data
def firebaseUpdate(keyName, value):
    try:
        db.child(keyName).set(value)
    except:
        # print("may error")
        return False 
    finally:
        print(db.child(keyName).get().val())
        # print("pumasok sa database")
        return True

def firebaseUpdateChild(keyName,keyChild,value):
    try:
        db.child(keyName).child(keyChild).set(value)
    except:
        return False 
    finally:
        return True 

# create data
def firebaseCreate(keyName, value):
    return db.child(keyName).set(value)
    
     