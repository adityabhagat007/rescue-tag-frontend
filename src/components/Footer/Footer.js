import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Copyright from "../Copyright";

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          background: "#000000",
          color: "#ffff",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">Sticky footer</Typography>
          <Copyright color={"#fff"}/>
        </Container>
      </Box>
    </Box>
  );
}
