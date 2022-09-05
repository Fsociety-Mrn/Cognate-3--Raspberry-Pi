import { 
    browserSessionPersistence,
    getAuth, 
    onAuthStateChanged, 
    setPersistence, 
    signInWithEmailAndPassword,
    signOut, 
} from "firebase/auth"
import React from "react"
import { app } from "../firebase/firebase"


const auth = getAuth(app)

// Login
export const LoginHydro = async (user) => {
    const login = await setPersistence(auth, browserSessionPersistence)
    .then(async () =>{

        return await signInWithEmailAndPassword(auth, user.email, user.password)
        .then(
            ()=> {return false}
        )
        .catch(error=>{
            return true
        })

    })
    return login
}


// Logout
export const LogoutHydro = async () => {
    await signOut(auth)
    console.log(sessionStorage.getItem('key'))
    return sessionStorage.clear();
}

// check the login status
export function useAuth() {
    const [ currentUser, setCurrentUser ] = React.useState("");
    
    
    React.useEffect(() => {
      const unsub = onAuthStateChanged(auth, user => setCurrentUser());
      return unsub;
    }, [auth])
    
    
    return sessionStorage.setItem('key', currentUser);
  }
