import { Alert, Button, IconButton, Snackbar } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
export default function SnackBarComponent({ message, open, type, setHandleOpen }) {
  
 const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  setHandleOpen(false);
};
const action = (
  <React.Fragment>
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  </React.Fragment>
);

  return (
    <Snackbar open={open} action={action} autoHideDuration={6000} onClose={handleClose} message={message}/>
  );
}
