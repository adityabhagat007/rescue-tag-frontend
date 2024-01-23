import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { red } from "@mui/material/colors";

const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{ sx: { width: "30%" } }}
      >
        <List>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Login</ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        style={{ color: red[900] ,marginRight:"50px" }}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
