import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import loginSchema from "../schema/loginSchema";
import { useMutation } from "@tanstack/react-query";
import { userLogin } from "../api/authAPI";
import { useDispatch } from "react-redux";
import { setMessage } from "../redux/reducers/msgSlice";
import { ROUTE_PATH } from "../routes/routes";
import { setLocalStorageItem } from "../services/localStorageService";
import { LOCAL_STORAGE_CONSTANTS } from "../constants/constant";
import { useEffect } from "react";

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutate, isError, isPending } = useMutation({
    mutationKey: ["userLogin"],
    mutationFn: userLogin,
    onSuccess: (response, variables) => {
      if (response.status === 200) {
        dispatch(
          setMessage({
            type: "success",
            msg: response.data.message,
            statusCode: response.status,
          })
        );
        setLocalStorageItem(
          LOCAL_STORAGE_CONSTANTS.authToken,
          response.data.data.token
        );
        navigate(ROUTE_PATH.DASHBOARD);
      } else {
        dispatch(
          setMessage({
            type: "error",
            msg: response.data.message,
            statusCode: response.status,
          })
        );
      }
    },
    onError: (data) => {
      console.log(data);
      dispatch(
        setMessage({
          type: "error",
          msg: data.data.message,
          statusCode: data.status,
        })
      );
    },
  });
  const formik = useFormik({
    validationSchema: loginSchema,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, action) => {
      console.log(values);
      mutate(values);
    },
  });
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in to your account
        </Typography>

        <Box sx={{ mt: 1 }}>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.touched.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.password && Boolean(formik.touched.password)
              }
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              type="submit"
            >
              Sign In
            </Button>
          </form>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <NavLink to="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </NavLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
