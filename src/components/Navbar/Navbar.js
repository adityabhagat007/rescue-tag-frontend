import React, { useState } from 'react';
// import style from './Navbar.module.css';
// import DrawerComponent from './DrawerComponent/DrawerComponent';
import AppBar from '@mui/material/AppBar';
// import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
// import useMediaQuery from '@mui/material/useMediaQuery';


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function Navbar() {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <React.Fragment>
            <AppBar position="static" sx={{ background: '#000000' }}>
                <Toolbar>
                    <Box
                        component="img"
                        sx={{ height: 40 }}
                        alt="rescuetag"
                        src="https://i.ibb.co/nz6ccqC/rescuetag-low-resolution-logo-color-on-transparent-background.png"
                    />
                    <Tabs textColor="#ffffff"
                        value={value}
                        onChange={handleChange}
                        TabIndicatorProps={{ style: { background: '#ff0000' } }}
                    >
                        <Tab label="Home" {...a11yProps(0)} sx={{ marginLeft: '20px' }}></Tab>
                        <Tab label="QR Code" {...a11yProps(1)} sx={{ marginLeft: '10px' }}></Tab>
                        <Tab label="About Us" {...a11yProps(2)} sx={{ marginLeft: '10px' }}></Tab>
                        <Tab label="FAQ" {...a11yProps(3)} sx={{ marginLeft: '10px' }}></Tab>
                        <Tab label="Contact Us" {...a11yProps(4)}></Tab>
                    </Tabs>
                    <Button variant="contained" color="error" sx={{ marginLeft: 'auto' }}>Login</Button>
                    <Button variant="contained" color="error" sx={{ marginLeft: '10px' }}>Register</Button>
                </Toolbar>
                {/* <DrawerComponent /> */}
            </AppBar>
        </React.Fragment>
    )
}

export default Navbar