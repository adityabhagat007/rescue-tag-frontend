import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import React from "react";

export default function DialogWrapper({ open, setOpen, width, title, body }) {
  const handleClose = () => {
    setOpen((prev) => !prev);
  };
  return (
    <Dialog open={open} maxWidth={"lg"} >
    <DialogTitle>{title}</DialogTitle>
      <DialogContent>
      <DialogContentText style={{marginBottom:"10px"}}>
            Please verify to processed further
      </DialogContentText>
        {body}
      </DialogContent>
      <DialogActions>
          <Button type="submit" onClick={handleClose}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}
