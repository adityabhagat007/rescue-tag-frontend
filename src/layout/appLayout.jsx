import { Box, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import DrawerComponent from "../components/Drawer/Drawer";
import BreadCrumb from "../components/BreadCrumb";

export default function AppLayout() {
  console.log("AppLayout.................................")
  return (
    <div className="main">
      <Box sx={{ display: "flex" }}>
        <DrawerComponent />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 4,
            marginTop: "50px",
            height: "80vh",
            backgroundColor: "#FAFAFB",
            color:"#000000"
          }}
        >
          <Stack>
            <div className="breadcrumb" style={{color:"#000000"}}>
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
