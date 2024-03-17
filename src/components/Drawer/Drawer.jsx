import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import React, { useState } from "react";
import MuiAppBar from "@mui/material/AppBar";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { NavLink } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Logo from "../Navbar/components/logoComponent";
import { DRAWER_WIDTH } from "../../constants/constant";
import { ROUTE_PATH } from "../../routes/routes";
const drawerWidth = DRAWER_WIDTH;

export default function DrawerComponent(props) {
  const menuOptions = [
    {
      id: 1,
      name: "Dashboard",
      icon: <AccountCircleOutlinedIcon fontSize="medium" />,
      link: ROUTE_PATH.DASHBOARD,
    },
    {
      id: 2,
      name: "Details",
      icon: <AddBoxRoundedIcon />,
      link: ROUTE_PATH.DETAILS,
    },
  ];
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {menuOptions.map((text, index) => (
          <NavLink
            style={{
              textDecoration: "none",
              color: "#000000",
            }}
            to={text.link}
          >
            <ListItem
              key={text.id}
              disablePadding
              style={{ paddingLeft: "20px", paddingRight: "10px" }}
            >
              <ListItemButton>
                <ListItemIcon style={{ minWidth: "32px" }}>
                  {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#ffffff",
          color: "#000000",
          border: "1px solid #E0E0E0",
        }}
        style={{}}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Responsive drawer
          </Typography>
          <div>
            <Logo />
          </div>
        </Toolbar>
      </AppBar>
      <Box
         component="nav"
         sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
         aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
