import { Box, Divider, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import DrawerComponent from "../components/Drawer/Drawer";
import BreadCrumb from "../components/BreadCrumb";
import { DRAWER_WIDTH } from "../constants/constant";

export default function AppLayout() {
  console.log("AppLayout.................................")
  const drawerWidth = DRAWER_WIDTH;
  return (
    <div className="main">
      <Box sx={{ display: "flex" }}>
        <DrawerComponent />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 4,
            marginTop: "40px",
            //marginLeft:"230px",
            height: "80vh",
            backgroundColor: "#FAFAFB",
            color:"#000000"
          }}
          //sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Stack>
            <div className="breadcrumb" style={{color:"#000000",marginBottom:"15px"}}>
              <BreadCrumb/>
            </div>
            <div className="dashboard-body">
              <Outlet />
            </div>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}
