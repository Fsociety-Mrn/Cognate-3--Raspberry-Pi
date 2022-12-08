import { Grid, Paper, Switch, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

// firebase
import { database, updateReal} from '../firebase/Firebase_Real'
import { onValue, ref } from 'firebase/database';

// icons
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WaterDamageRoundedIcon from '@mui/icons-material/WaterDamageRounded';
import LandslideIcon from '@mui/icons-material/Landslide';
import WaterIcon from '@mui/icons-material/Water';
import AcUnitIcon from '@mui/icons-material/AcUnit';


const Homepage = () => {

  const [temp, setTemp] = React.useState("")
  const [waterLevel, setWaterLevel] = React.useState("")
  const [tds, setTds] = React.useState("")
  const [waterPump, setWaterPump] = React.useState(Boolean)
  const [oxyPump, setOxyPump] = React.useState(Boolean)
  const [peralPump, setPeralPump] = React.useState(Boolean)
  const [test,setTest] = React.useState(0)

  React.useEffect(() => {

    // Temperature
    onValue(ref(database , '/Humid'), e => {
      setTemp(()=>e.child("Humidity").val()) 
    })

    // water level
    onValue(ref(database , '/waterLevel'), e => {
      setWaterLevel(()=>e.child("level").val()) 
    })

    // TDS
    onValue(ref(database , '/TDS'), e => {
      setTds(()=>e.child("data").val()) 
    })

    // Water
    onValue(ref(database , '/waterPump'), e => {
      setWaterPump(()=>e.child("data").val()) 
    })

    // Oxygen
    onValue(ref(database , '/oxyPump'), e => {
      setOxyPump(()=>e.child("data").val()) 
    })

    // Peraltalstic
    onValue(ref(database , '/peralPump'), e => {
      setPeralPump(()=>e.child("data").val()) 
    })

    
    

  },[]);

  const waterpumpF = () =>{
    // setWaterPump(!waterPump)

    updateReal("waterPump",{
      data: !waterPump
    });
  }

  const oxypumpF = () =>{
    updateReal("oxyPump",{
      data: !oxyPump
    });
  }

  const peralpumpF = () =>{
    updateReal("peralPump",{
      data: !peralPump
    });

    updateReal("waterPump",{
      data: !peralPump
    });
  }

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

      <Grid 
      item xs={12} sm={12} md={12} xl={12}
      >

     

      </Grid>

        {/*Temperature level*/}
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
                  Temperature
                </Typography>
              </Grid>

              <Grid item xs={12} md={12}>
                <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                >
                  <ThermostatIcon fontSize="large" sx={{ color: '#3C4048' }}/>

                  <Typography
                  variant="h4"
                  textAlign='center'
                  color='#3C4048'>
                    {temp}
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
                    {waterLevel}
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
                    {tds}
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
                  checked={waterPump}
                  onChange={waterpumpF}
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
                  checked={oxyPump}
                  onChange={oxypumpF}
                  // inputProps={{ 'aria-label': 'controlled' }}
                  style={{ color: '#256D85' }}
                  />
                </Stack>

              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/*Peral pump*/}
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
                  Peraltalstic pump
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
                  checked={!peralPump}
                  onChange={peralpumpF}
                  // inputProps={{ 'aria-label': 'controlled' }}
                  style={{ color: '#0078AA' }}
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