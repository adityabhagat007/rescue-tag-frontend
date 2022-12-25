import { Container, Grid } from "@mui/material";
import React from "react";
import Layout from "../layout/layout";

const SignUpPage = () => {
  return (
    <>
      <Layout>
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
      </Layout>
    </>
  );
};

export default SignUpPage;
