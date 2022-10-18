import React from 'react'
import {Box,TextField,AppBar,Toolbar} from '@mui/material'
import logo from './images/logo.png'
const Navigation=()=>{

    return(
        <Box>
            <AppBar position='static' >
                <Toolbar className='navigation'>
                    <h2>MyCookBook</h2>
                    <img src={logo} alt='logo'/>
                </Toolbar>
            </AppBar>
        </Box>
        
    )
}
export default Navigation