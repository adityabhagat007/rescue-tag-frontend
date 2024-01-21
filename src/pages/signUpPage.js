import { Container, Grid } from "@mui/material";
import React from "react";


const SignUpPage = () => {
  return (
    <>
        <Container maxWidth="lg">
          <Grid>
            <Grid item xs={12} lg={2} md={6}>
              item1
            </Grid>
            <Grid item xs={12} lg={2} md={6}>
              item2
            </Grid>
          </Grid>
        </Container>
    </>
  );
};

export default SignUpPage;
