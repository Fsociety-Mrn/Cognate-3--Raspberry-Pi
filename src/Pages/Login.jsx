import React from 'react'

// Components
import { 
  Button, 
  Grid, 
  TextField, 
  Link, 
  Paper,
  Stack
}from '@mui/material'
import { LoginTextbox } from '../Components/CustomTextfield'

// Images or Icon
import LOGO from '../images/LOGO.png'

// Color
import { secondaryColour } from '../index'

const DesktopView = () => {
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
          <LoginTextbox fullWidth margin='normal' placeholder='Email'/>
          <LoginTextbox fullWidth margin='normal' placeholder='Password'/>
          

{/* Login and forgot password*/}  
          <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          >
            <Link href="#">forgot password</Link>

            <Button 
            variant='contained' 
            color='primary' 
            style={{
              width:"300px"
            }}
            >Login</Button>
          </Stack>
        </Paper>
      </Grid>
    </div>
  )
}


const MobileView = () => {
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
              <LoginTextbox fullWidth margin='normal' placeholder='email'/>
              <LoginTextbox fullWidth margin='normal' placeholder='email'/>
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

                <Button fullWidth variant='contained'>
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