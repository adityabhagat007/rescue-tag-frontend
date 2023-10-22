import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

// import style from './Navbar.module.css';
import DrawerComponent from "./components/DrawerComponent/DrawerComponent";
import AppBar from "@mui/material/AppBar";
// import Typography from '@mui/material/Typography';
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Logo from "./components/logoComponent";
// import useMediaQuery from '@mui/material/useMediaQuery';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Navbar = () => {
  const [value, setValue] = useState();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate();
  const navigationPage = (pageName) => {
    navigate(pageName);
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const theme = useTheme();
  const screenSize = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <React.Fragment>
      <AppBar
        position="static"
        sx={{ background: "#000000", maxWidth: "100%", overflowX: "hidden" }}
      >
        <Toolbar>
          {!screenSize ? (
            <>
              <DrawerComponent />
              <Logo/>
            </>
          ) : (
            <>
            <Logo/>
              <Tabs
                textColor="#ffffff"
                value={value}
                onChange={() => setValue(value)}
                TabIndicatorProps={{ style: { background: "#ff0000" } }}
              >
                <Tab
                  label="Home"
                  {...a11yProps(0)}
                  sx={{ textDecoration: "none", margin: "0 0 0 15px" }}
                  onClick={() => navigationPage("/")}
                ></Tab>
                <Tab
                  label="AboutUs"
                  {...a11yProps(1)}
                  sx={{ textDecoration: "none", margin: "0 10px" }}
                  onClick={() => navigationPage("/about")}
                ></Tab>
              </Tabs>

              <Button
                variant="contained"
                color="error"
                sx={{ textDecoration: "none", marginLeft: "auto" }}
                onClick={() => navigationPage("/login")}
              >
                Login
              </Button>
              <Button
                variant="contained"
                color="error"
                sx={{
                  textDecoration: "none",
                  margin: "0 5px",
                }}
                onClick={() => navigationPage("/register")}
              >
                Register
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
