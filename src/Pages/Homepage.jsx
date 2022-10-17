import { Grid, Paper, Switch, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

// icons
import AirIcon from '@mui/icons-material/Air';
import WaterDamageRoundedIcon from '@mui/icons-material/WaterDamageRounded';
import LandslideIcon from '@mui/icons-material/Landslide';
import WaterIcon from '@mui/icons-material/Water';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const Homepage = () => {
  return (

    <div>
      <br />
      <br />
      <br />
      <Grid container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        padding={2}
      >

        {/*Humidity level*/}
        <Grid item xs={12} sm={12} md={4} xl={4}>
          <Paper elevation={0} sx={{
            backgroundColor: "WHITE",
            border: '2px solid #3B5437'
          }}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              padding={2}
            >
              <Grid item xs={12} md={12}>
                <Typography
                  variant="h6"
                  textAlign='center'
                  color='#3C4048'>
                  Humidity Level
                </Typography>
              </Grid>

              <Grid item xs={12} md={12}>
                <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                >
                  <AirIcon fontSize="large" sx={{ color: '#3C4048' }}/>

                  <Typography
                  variant="h4"
                  textAlign='center'
                  color='#3C4048'>
                    100
                  </Typography>
                </Stack>

              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/*Water level*/}
        <Grid item xs={12} sm={12} md={4} xl={4}>
          <Paper elevation={0} sx={{
            backgroundColor: "WHITE",
            border: '2px solid #3B5437'
          }}
          > 
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              padding={2}
            >
              <Grid item xs={12} md={12}>
                <Typography
                  variant="h6"
                  textAlign='center'
                  color='#47B5FF'>
                  Water Level
                </Typography>
              </Grid>

              <Grid item xs={12} md={12}>
                <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                >
                  <WaterDamageRoundedIcon fontSize="large" sx={{ color: '#47B5FF' }}/>

                  <Typography
                  variant="h4"
                  textAlign='center'
                  color='#47B5FF'>
                    100%
                  </Typography>
                </Stack>

              </Grid>
            </Grid>
          </Paper>
        </Grid>

       {/*TDS level*/}
       <Grid item xs={12} sm={12} md={4} xl={4}>
       <Paper elevation={0} sx={{
         backgroundColor: "WHITE",
         border: '2px solid #3B5437'
       }}
       > 
         <Grid
           container
           direction="row"
           justifyContent="center"
           alignItems="center"
           padding={2}
         >
           <Grid item xs={12} md={12}>
             <Typography
               variant="h6"
               textAlign='center'
               color='#665A48'>
               TDS Level
             </Typography>
           </Grid>

           <Grid item xs={12} md={12}>
             <Stack
             direction="row"
             justifyContent="center"
             alignItems="center"
             spacing={2}
             >
                  <LandslideIcon fontSize="large" sx={{ color: '#665A48' }}/>

                  <Typography
                  variant="h4"
                  textAlign='center'
                  color='#665A48'>
                    100
                  </Typography>
                </Stack>

              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/*Water pump*/}
        <Grid item xs={12} sm={12} md={4} xl={4}>
          <Paper elevation={0} sx={{
            backgroundColor: "WHITE",
            border: '2px solid #3B5437'
          }}
          > 
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              padding={2}
            >
              <Grid item xs={12} md={12}>
                <Typography
                  variant="h6"
                  textAlign='center'
                  color='#0078AA'>
                  Water pump
                </Typography>
              </Grid>

              <Grid item xs={12} md={12}>
                <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                >
                  <WaterIcon fontSize="large" sx={{ color: '#0078AA' }}/>
                  
                  <Switch
                  checked={true}
                  // onChange={handleChange}
                  // inputProps={{ 'aria-label': 'controlled' }}
                  style={{ color: '#0078AA' }}
                />
                </Stack>

              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/*Oxygen pump*/}
        <Grid item xs={12} sm={12} md={4} xl={4}>
          <Paper elevation={0} sx={{
            backgroundColor: "WHITE",
            border: '2px solid #3B5437'
          }}
          > 
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              padding={2}
            >
              <Grid item xs={12} md={12}>
                <Typography
                  variant="h6"
                  textAlign='center'
                  color='#256D85'>
                  Oxygen pump
                </Typography>
              </Grid>

              <Grid item xs={12} md={12}>
                <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                >
                  <AcUnitIcon fontSize="large" sx={{ color: '#256D85' }}/>

                  <Switch
                  checked={true}
                  // onChange={handleChange}
                  // inputProps={{ 'aria-label': 'controlled' }}
                  style={{ color: '#256D85' }}
                  />
                </Stack>

              </Grid>
            </Grid>
          </Paper>
        </Grid>

      </Grid>
    </div>
  )
}

export default Homepage