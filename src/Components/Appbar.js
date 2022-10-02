import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Avatar, Divider, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import Transparent from '../images/twoTone.png'
import { Stack } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import { LogoutHydro } from '../Authentication/LoginFirebase'


export const DesktopAppBar = () => {
let navigate = useNavigate();  
const [anchorElUser, setAnchorElUser] = React.useState(null);

const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
};

const closeMenu = () => {
    // Close Admin menu
    setAnchorElUser(null)
}
    return (
        <AppBar position="fixed" color='primary' >
            <Toolbar variant="dense" >
                <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                >
                    <IconButton 
                    edge="start" 
                    color="inherit" 
                    aria-label="menu" 
                    onClick={()=>navigate('/')}
                    >
                        <Avatar edge="start" alt="Logo" src={Transparent}  sx={{ width: 45, height: 45 }} />
                    </IconButton>
                    <Typography variant="h6"  component="div">
                        Hydroponics
                    </Typography>
                </Stack>

                <Typography variant="h6"  component="div" sx={{ flexGrow: 1 }}/>
                <IconButton color="inherit" onClick={handleOpenUserMenu}>
                   <SettingsOutlinedIcon/>
                </IconButton>

                <Menu
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={closeMenu}
                MenuListProps={{
                  'aria-labelledby': 'composition-button',
                }}
                >

                    {/* Account Settings */}
                    <MenuItem 
                    onClick={()=>
                        {
                            setAnchorElUser(null)
                            navigate('/AccountSettings')
                        }
                    } 
                    >
                        <ListItemIcon>
                            <SettingsIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText> Account settings</ListItemText>
 
                    </MenuItem>

                    <Divider/>

                    {/* Logout*/}
                    <MenuItem 
                    onClick={()=>{
                        setAnchorElUser(null)
                        LogoutHydro()
                        window.location.reload(true)
                      }}
                    >
                        <ListItemIcon>
                            <LogoutIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText> Logout</ListItemText>                  
                    </MenuItem>
                </Menu>

            </Toolbar>
        </AppBar>
    )
}