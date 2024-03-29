import {
  Alert,
  AlertTitle,
  Button,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { cleanMessage } from "../../redux/reducers/msgSlice";
export default function SnackBarComponent() {
  const msgState = useSelector((state) => state.notification);
  const dispatch = useDispatch();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      dispatch(cleanMessage());
      return;
    }
    dispatch(cleanMessage());
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
    <Snackbar
      open={msgState.show}
      action={action}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
        severity={msgState.type || "success"}
        sx={{ width: "100%" ,textTransform:"capitalize" }}
        variant="filled"
      >
        {/* <AlertTitle>{msgState.statusCode != 200 ? "Opps..":"Success"}</AlertTitle> */}
        {msgState.msg}
      </Alert>
    </Snackbar>
  );
}
