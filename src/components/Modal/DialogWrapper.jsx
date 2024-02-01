import { Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import React from "react";

export default function DialogWrapper({ open, setOpen, width, title, body }) {
  const handleClose = () => {
    setOpen((prev) => !prev);
  };
  return (
    <Dialog open={open} maxWidth={"lg"} onClose={handleClose}>
    <DialogTitle>{title}</DialogTitle>
      <DialogContent>
      <DialogContentText>
            Please verify to processed further
      </DialogContentText>
        {body}
      </DialogContent>
    </Dialog>
  );
}
