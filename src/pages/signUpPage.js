import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import userSignUp from "../api/userSignUp";
import userSchema from "../schema/userSchema";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import Copyright from "../components/Copyright";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUpPage() {
  const [signupSuccess, setSignupSuccess] = useState({
    success: false,
    message: "",
  });
  const [signupError, setSignupError] = useState({ error: false, message: "" });

  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  if (signupSuccess.success) {
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity="success"
        variant="filled"
        sx={{ width: "100%" }}
      >
        Account Created Successfully!
      </Alert>
    </Snackbar>;
  }

  if (signupError.error) {
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity="error"
        variant="filled"
        sx={{ width: "100%" }}
      >
        {signupError.message}
      </Alert>
    </Snackbar>;
  }

  const formik = useFormik({
    validationSchema: userSchema,
    initialValues: {
      name: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values, actions) =>
      userSignUp(values, actions, setSignupSuccess, setSignupError),
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign Up
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
                  {...formik.getFieldProps("userName")}
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
                  {...formik.getFieldProps("name")}
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
                  autoComplete="Abc@123"
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
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
