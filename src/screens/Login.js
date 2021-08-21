import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  CardHeader,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { login } from "../store/actions/authActions.ts";
import { connect } from "react-redux";
import Alert from "@material-ui/lab/Alert";
import photo from "../assets/login.png";
import "../styles/login.scss";

// validation
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { TextField } from "formik-material-ui";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
  },
  center: {
    textAlign: "center",
  },
  padding: {
    padding: theme.spacing(3),
  },
}));

let initialValues = {
  email: "",
  password: "",
};

let SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required.")
    .email("Please enter a valid email."),
  password: Yup.string().required("Password is required."),
});
function Login(props) {
  const classes = useStyles();

  const [alert, setAlert] = useState({
    showAlert: false,
    severity: "success",
    message: "",
  });

  const submit = async ({ email, password }) => {
    try {
      const results = await props.login(email, password);

      if (results === 401) {
        setAlert({
          showAlert: true,
          severity: "error",
          message: "Unauthorized!",
        });
      }
      if (results === 200) {
        props.history.push("/todo-list");
      }
    } catch (error) {
      setAlert({
        showAlert: true,
        severity: "error",
        message: "Ops something went wrong!",
      });
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="stretch"
      direction="row"
      style={{ flexGrow: 1, marginTop: "6rem" }}
    >
      <Grid item>
        <img className={classes.img} src={photo} alt="Login" />
      </Grid>
      <Grid spacing={1} item>
        <Grid item>
          <Box mb={1}>
            <Alert severity="info">
              Use email : <strong>demo@gmail.com</strong> / password :
              <strong>&nbsp;demo1234</strong>
            </Alert>
          </Box>
        </Grid>
        <Grid item>
          <Card className={classes.padding} variant="outlined">
            <CardHeader
              title="Welcome back! 👩‍💻"
              className={classes.center}
            ></CardHeader>

            <Formik
              initialValues={initialValues}
              onSubmit={submit}
              validationSchema={SignUpSchema}
            >
              {({ dirty, isValid }) => {
                return (
                  <Form>
                    <CardContent>
                      <Field
                        name="email"
                        label="Email"
                        component={TextField}
                        variant="outlined"
                        fullWidth
                        margin="dense"
                      ></Field>

                      <Field
                        name="password"
                        label="Password"
                        component={TextField}
                        variant="outlined"
                        fullWidth
                        margin="dense"
                        type="password"
                      ></Field>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        disabled={!dirty || !isValid}
                        type="submit"
                      >
                        login
                      </Button>
                    </CardActions>
                  </Form>
                );
              }}
            </Formik>
          </Card>
        </Grid>
        {alert.showAlert && (
          <Grid item>
            <Box mt={1}>
              
            </Box>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

export default connect(null, { login })(Login);
