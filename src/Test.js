import { Grid, Switch, Typography , Stack} from '@mui/material'
import React, { useState } from 'react'

const Test = () => {
const [checked, setChecked] = useState(false)
  return (
    <div>
        
        <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding={15}
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
                    setChecked(!checked)
                    console.log(!checked)
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