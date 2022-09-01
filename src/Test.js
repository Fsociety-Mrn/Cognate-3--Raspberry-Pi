import { Grid, Switch, Typography , Stack, Button} from '@mui/material'
import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { updateReal,  database } from './firebase/Firebase_Real'


const Test = () => {
const [checked, setChecked] = useState(Boolean)

// state for switch
useEffect(() => {
  onValue(ref(database , '/LED'), e => {
    setChecked(()=>e.child("turnOn").val()) 
  })
},[database]);

  return (
    <div>
        
        <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        paddingTop={15}
        >
            <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            >     
                <Typography textAlign='center' variant='h5'>
                You turn me on like a light switch
                </Typography>

                <Switch 
                checked={checked}
                onChange={e=>{
                    
                   
                    updateReal("LED",{
                      turnOn: !checked
                    });
                    
                    
                    // createReal()
                    }
                }
                inputProps={{ 'aria-label': 'controlled' }}
                />
            
            </Stack>
       

        </Grid>
    </div>
  )
}

export default Test