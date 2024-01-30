import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";
import { userSignUp } from "../api/authAPI";
import userSchema from "../schema/userSchema";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import Copyright from "../components/Copyright";
import TEXT_CONSTANTS from "../constants/textConstants";
import { useDispatch } from "react-redux";
import { setMessage } from "../redux/reducers/msgSlice";

// TODO remove, this demo shouldn't need to reset the theme.

export default function SignUpPage() {
  console.log("Singup page...................");
  const dispatch = useDispatch();
  const handleSignup = async (data) => {
    let type;
    const res = await userSignUp(data);
    console.log(res)
    if (res.status == 200) {
      type = "success";
    } else {
      type = "error";
    }
    dispatch(
      setMessage({ type: type, msg: res.data.message, statusCode: res.status })
    );
  };
  const formik = useFormik({
    validationSchema: userSchema,
    initialValues: {
      name: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values, actions) => handleSignup(values),
  });

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          {TEXT_CONSTANTS.signupText.signup}
        </Typography>

        <Box
          component="form"
          noValidate
          onSubmit={formik.handleSubmit}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="Hello World"
                name="name"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                {...formik.getFieldProps("name")}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="userName"
                label="User Name"
                name="userName"
                autoComplete="HelloWorld1234"
                {...formik.getFieldProps("userName")}
                error={
                  formik.touched.userName && Boolean(formik.errors.userName)
                }
                helperText={formik.touched.userName && formik.errors.userName}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                {...formik.getFieldProps("email")}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="Abc@123"
                {...formik.getFieldProps("password")}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="password"
                {...formik.getFieldProps("confirmPassword")}
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                helperText={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <NavLink to="/login" variant="body2">
                Already have an account? Sign in
              </NavLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright margin={5} color={"grey"} />
    </Container>
  );
}
