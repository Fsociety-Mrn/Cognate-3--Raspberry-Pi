# main file 
from Firebase.firebase import firebaseUpdate,firebaseRead,firebaseReadChild,firebaseCreate

# main function
def main():
    print(firebaseReadChild("LED","turnOn"))
    
    return main()

main()