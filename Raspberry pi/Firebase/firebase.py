import pyrebase 

# firebase API keys
config = {
  "apiKey": "AIzaSyDpvmg1-0z6oK6qc2Mh3LwJy68vJ9dolbg",
  "authDomain": "cognate-3-raspberrypi.firebaseapp.com",
  "databaseURL": "https://cognate-3-raspberrypi-default-rtdb.asia-southeast1.firebasedatabase.app",
  "storageBucket": "cognate-3-raspberrypi.appspot.com"
}
firebase = pyrebase.initialize_app(config)
db = firebase.database() #realTime database

# read the specific data
def firebaseRead(keyName):
    return db.child(keyName).get().val()

# update the current data
def firebaseUpdate(keyName, value):
    try:
        db.child(keyName).set(value)
    except:
        print("may error")
        return False 
    finally:
        print(db.child(keyName).get().val())
        print("pumasok sa database")
        return True
    
     
