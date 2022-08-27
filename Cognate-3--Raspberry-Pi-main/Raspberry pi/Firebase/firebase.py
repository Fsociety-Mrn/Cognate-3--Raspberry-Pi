import firebase_admin
from firebase_admin import credentials,firestore
from firebase_admin import db


cred = credentials.Certificate('secretKey.json')
app = firebase_admin.initialize_app(cred)

db = firestore.client()

collection = db.collection('darkness')  
res = collection.get() # returns a list
for i in res: print(i.to_dict())
