import pyrebase
config = {
    "apiKey": "AIzaSyAa9EFW5qWshvHOXiPXV39QcsUc3PzcUBw",
    "authDomain": "gardenpi-869d6.firebaseapp.com",
    "databaseURL": "https://gardenpi-869d6-default-rtdb.asia-southeast1.firebasedatabase.app",
    "storageBucket": "gardenpi-869d6.appspot.com"
}

firebase = pyrebase.initialize_app(config)
db = firebase.database()