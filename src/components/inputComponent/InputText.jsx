import { TextField } from "@mui/material";
import React from "react";

export default function InputText({ placeHolder, height, width, setInput }) {
  return (
    <TextField
      placeholder={placeHolder}
      onChange={(e) => setInput(e.target.value)}
      inputProps={{
        style: {
          paddingTop: "1px",
          paddingBottom: "1px",
          height: height,
          width: width,
        },
      }}
    />
  );
}
