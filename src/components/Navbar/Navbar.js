import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

// import style from './Navbar.module.css';
// import DrawerComponent from './DrawerComponent/DrawerComponent';
import AppBar from "@mui/material/AppBar";
// import Typography from '@mui/material/Typography';
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
// import useMediaQuery from '@mui/material/useMediaQuery';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Navbar() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate();
  const navigationPage = (pageName) => {
    navigate(pageName);
  };
  return (
    <React.Fragment>
      <AppBar position="static" sx={{ background: "#000000" }}>
        <Toolbar>
          <Box
            component="img"
            sx={{ height: 40 }}
            alt="rescuetag"
            src="https://i.ibb.co/nz6ccqC/rescuetag-low-resolution-logo-color-on-transparent-background.png"
          />
          <Tabs
            textColor="#ffffff"
            value={value}
            onChange={() => handleChange}
            TabIndicatorProps={{ style: { background: "#ff0000" } }}
          >
            <Tab
              label="Home"
              sx={{ textDecoration: "none", margin: "0 0 0 15px" }}
              onClick={() => navigationPage("/")}
            ></Tab>
            <Tab
              label="AboutUs"
              sx={{ textDecoration: "none", margin: "0 10px" }}
              onClick={() => navigationPage("/about")}
            ></Tab>
          </Tabs>

          <Button
            variant="contained"
            color="error"
            sx={{ textDecoration: "none", margin: "0 10px" }}
            onClick={() => navigationPage("/login")}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{ textDecoration: "none", margin: "0 5px" }}
            onClick={() => navigationPage("/register")}
          >
            Register
          </Button>
        </Toolbar>
        {/* <DrawerComponent /> */}
      </AppBar>
    </React.Fragment>
  );
}

export default Navbar;
