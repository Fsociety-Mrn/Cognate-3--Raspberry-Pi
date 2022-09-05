import React from 'react'
// Components
import { 
  Button, 
  Grid, 
  Link, 
  Paper,
  Stack
}from '@mui/material'
import { LoginTextbox } from '../Components/CustomTextfield'

// Images or Icon
import LOGO from '../images/LOGO.png'

// Color
import { secondaryColour } from '../index'

// Validation
import { EmailSchema, PasswordSchema } from '../Authentication/FormValidation'
import { LoginHydro } from '../Authentication/LoginFirebase'


const DesktopView = () => {

// Initialize variables
const [user, setUser] = React.useState({
  email : "",
  password : ""
})



const [error,setError] = React.useState(
  {
    email : false,
    emailMessage : "",
    password: false,
    passwordMessage : ""
  })

// Initialize function

// Login function
const login = async e => {
  e.preventDefault()
  validate()
}


const validate = async () => {

  const email = await EmailSchema.validate({email: user.email}, {abortEarly: false})
  .then(e=>{return {
    email : false,
    emailMessage: ""
  } })
  .catch(w=>{
    return {
      email : true,
      emailMessage: w.errors[0]
    }
  })
  
  const password = await PasswordSchema.validate({password: user.password}, {abortEarly: false})
  .then(e=>{ 
    return {
      password : false,
      passwordMessage: ""
    }
  })
  .catch(w=>{
    return {
      password : true,
      passwordMessage: "password must be at least 6 characters and cannot be empty."
    }
  })

  setError({
    email : email.email,
    emailMessage : email.emailMessage,
    password: password.password,
    passwordMessage : password.passwordMessage   
  })

  if (!email.email && !password.password) {
    const datas = await LoginHydro(user)
    console.log(datas)
    
    setError({
      email : datas,
      emailMessage : "",
      password: datas,
      passwordMessage : ""    
    })
  }

}

// email and password text
const emailChanged = e => {
  setUser({...user, email: e.target.value})
}
const passwordChanged = e => {
  setUser({...user, password: e.target.value})
}

  return (
    <div>
      <Grid container
      direction="column"
      justifyContent="center"
      alignItems="center"
      paddingBottom={4}
      >

{/*Logo*/}
        <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        >
          <img
          alt='logo'
          src={LOGO}
          style={{
            width: '400px',
            height: '400px'
          }}
          />
        </Stack>

        <Paper
        elevation={0}
        >

{/* Email and Username*/}        
          <LoginTextbox 
          error={error.email}
          helperText={error.emailMessage}
          value={user.email}
          onChange={emailChanged}
          fullWidth 
          margin='normal' 
          placeholder='Email'
          />

          <LoginTextbox 
          error={error.password}
          helperText={error.passwordMessage}
          value={user.password}
          onChange={passwordChanged}
          fullWidth 
          margin='normal' 
          placeholder='Password'/>
          

{/* Login and forgot password*/}  
          <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          >
            <Link href="/#" fontStyle='initial'>Forgot password</Link>

            <Button 
            variant='contained' 
            color='primary' 
            style={{
              width:"300px"
            }}
            onClick={login}
            >Login</Button>

          </Stack>
        </Paper>
      </Grid>
    </div>
  )
}


const MobileView = () => {
// Initialize variables
const [user, setUser] = React.useState({
  email : "",
  password : ""
})

const [error,setError] = React.useState(
  {
    email : false,
    emailMessage : "",
    password: false,
    passwordMessage : ""
  })

// Initialize function

// Login function
const login = async e => {
  e.preventDefault()
  validate() 
}


const validate = async () => {

  const email = await EmailSchema.validate({email: user.email}, {abortEarly: false})
  .then(e=>{return {
    email : false,
    emailMessage: ""
  } })
  .catch(w=>{
    return {
      email : true,
      emailMessage: w.errors[0]
    }
  })
  
  const password = await PasswordSchema.validate({password: user.password}, {abortEarly: false})
  .then(e=>{ 
    return {
      password : false,
      passwordMessage: ""
    }
  })
  .catch(w=>{
    return {
      password : true,
      passwordMessage: "password must be at least 6 characters and cannot be empty."
    }
  })

  setError({
    email : email.email,
    emailMessage : email.emailMessage,
    password: password.password,
    passwordMessage : password.passwordMessage   
  })

  if (!email.email && !password.password) {
    const datas = await LoginHydro(user)
    console.log(datas)
    
    setError({
      email : datas,
      emailMessage : "",
      password: datas,
      passwordMessage : ""    
    })
  }

}

// email and password text
const emailChanged = e => {
  setUser({...user, email: e.target.value})
}
const passwordChanged = e => {
  setUser({...user, password: e.target.value})
}

  return (
    <div>
      <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ 
        minHeight: "80vh",
        backgroundColor: secondaryColour
      }}
      padding={2}
      >
        <Grid item>
      
          <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          padding={2}
          >

{/*Logo*/}
            <Grid item xs={12} md={8}>
              <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={0}
              >
                <img
                alt='logo'
                src={LOGO}
                style={{
                  width: '250px',
                  // maxWidth: '150px',
                  height: '250px'
                }}
                />
              </Stack>
            </Grid>

{/*email and password*/}        
            <Grid item xs={12} md={12} sm={12}>
              <LoginTextbox 
              error={error.email}
              // helperText={error.email ? error.emailMessage : ""}
              helperText={error.emailMessage}
              value={user.email}
              onChange={emailChanged}
              fullWidth 
              margin='normal' 
              placeholder='Email'

              />

              <LoginTextbox 
              error={error.password}
              helperText={error.passwordMessage}
              value={user.password}
              onChange={passwordChanged}
              fullWidth 
              margin='normal' 
              placeholder='Password'/>
            </Grid>

{/*Login Button*/}           
            <Grid item xs={12} md={12} sm={12}>
              <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={1}
              >
                <Link href="#">forgot password</Link>

                <Button fullWidth variant='contained' onClick={login}>
                  Login
                </Button>
              </Stack>

            </Grid>
         
          
          </Grid> 
        </Grid>
      </Grid>
    </div>
  )
}



function Login() {
const [state, setState] = React.useState(false);

React.useEffect(()=>{
    const setResponsiveness = () => {
      return window.innerWidth < 700 ? setState(true) : setState(false);
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  },[])
  return (
    <div>
    {!state ? <DesktopView /> : <MobileView />}
    </div>
  )
}

export default Login