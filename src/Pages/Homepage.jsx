import { Button, Grid } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import HelloFriend from '../images/HelloFriend.png'


import {LogoutHydro} from '../Authentication/LoginFirebase'
const Homepage = () => {
  return (
    <div>
        <Grid container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{
            minHeight: "80vh"
        }}
        >
            <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            >
                <img
                alt='logo'
                src={HelloFriend}
                style={{
                    width: '400px',
                    height: '400px'
                }}
                />

                <Button variant='contained'
                style={{
                    width:"300px"
                  }}
                onClick={()=>LogoutHydro()}
                >
                Logout
                </Button>
            
            </Stack>
        
        </Grid>
  
    </div>
  )
}

export default Homepage