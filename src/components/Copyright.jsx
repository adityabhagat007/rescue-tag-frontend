import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Copyright({ color, margin }) {
  return (
    <Typography
      variant="body2"
      color={color}
      align="center"
      sx={{ mt: margin }}
    >
      {"Copyright © "}
      <Link style={{color:color}} href="https://mui.com/">
        rescuetag
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
