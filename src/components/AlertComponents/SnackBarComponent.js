import { Alert, Snackbar } from "@mui/material";
import React, { useState } from "react";

export default function SnackBarComponent({ message, open, type }) {
 const [handleOpen ,setHandleOpen]= useState(open)
  const handleClose = () => {
   setHandleOpen((prev)=>!prev)
  };
  return (
    <Snackbar open={handleOpen} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={type}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
