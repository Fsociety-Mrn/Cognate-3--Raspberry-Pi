import pyrebase

config = {
  "apiKey": "AIzaSyDpvmg1-0z6oK6qc2Mh3LwJy68vJ9dolbg",
  "authDomain": "cognate-3-raspberrypi.firebaseapp.com",
  "databaseURL": "https://cognate-3-raspberrypi-default-rtdb.asia-southeast1.firebasedatabase.app",
  "storageBucket": "cognate-3-raspberrypi.appspot.com"
}

firebase = pyrebase.initialize_app(config)

db = firebase.database()

data = {"s": "s 'Morty' Smith"}
db.child("users").set(data)

print(db.child("users").get().val())