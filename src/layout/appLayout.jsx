import { Box, Drawer, Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import DrawerComponent from "../components/Drawer/Drawer";

export default function AppLayout() {
  return (
    <div className="main">
      <Box sx={{ display: "flex" }}>
        <DrawerComponent />
        <Box component="main" sx={{ flexGrow: 1, p:4, marginTop:"50px",height:"80vh" ,backgroundColor:"#FAFAFB"}}>
          <Outlet/>
        </Box>
      </Box>
    </div>
  );
}
