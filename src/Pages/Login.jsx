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
import { Notificationnbar } from '../Components/Notificationbar'

// Images or Icon
import LOGO from '../images/LOGO.png'

// Color
import { secondaryColour } from '../index'

// Validation
import { EmailSchema, PasswordSchema } from '../Authentication/FormValidation'
import { LoginHydro } from '../Authentication/LoginFirebase'
import { useNavigate } from 'react-router-dom'



// For desktop view
const DesktopView = () => {

// Initialize variables
const [user, setUser] = React.useState({
  email : "",
  password : ""
})

// error notification
const [erroNotif, setErrornotif] = React.useState(false)


const [error,setError] = React.useState(
  {
    email : false,
    emailMessage : "",
    password: false,
    passwordMessage : ""
  })

// Initialize function

// Login function
const login = e => {
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
    
    if(!datas){
      setErrornotif(false)
      window.location.reload(false)
    }else{
      setErrornotif(true)
    }
    
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

    <Notificationnbar
    opens={erroNotif}
    setOpens={setErrornotif}
    message="Sorry, the email or password you entered is invalid." 
    vert='top'
    hori='left'
    sever="error"
    />


      <Grid 
      container
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
          type='email'
          error={error.email}
          helperText={error.emailMessage}
          value={user.email}
          onChange={emailChanged}
          fullWidth 
          margin='normal' 
          placeholder='Email'
          />

          <LoginTextbox
          type='password' 
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

// MobileView
const MobileView = () => {

// Initialize variables
const [user, setUser] = React.useState({
  email : "",
  password : ""
})
// error notification
const [erroNotif, setErrornotif] = React.useState(false)

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
    
    if(!datas){
      setErrornotif(false)
      window.location.reload(false)
    }else{
      setErrornotif(true)
    }

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

    <Notificationnbar
    opens={erroNotif}
    setOpens={setErrornotif}
    message="Sorry, the email or password you entered is invalid." 
    vert='top'
    hori='center'
    sever="error"
    />    
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
              type='email'
              error={error.email}
              helperText={error.emailMessage}
              value={user.email}
              onChange={emailChanged}
              fullWidth 
              margin='normal' 
              placeholder='Email'

              />

              <LoginTextbox 
              type='password'
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