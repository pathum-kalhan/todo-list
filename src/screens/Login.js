import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  CardHeader,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { login } from "../store/actions/authActions";
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
    // height: "100%",
    // backgroundColor:'green'
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
      alignItems="center"
      className={classes.root}
      spacing={1}
    >
      <div className="wrapper">
        <div className="left">
          <div id="img-pane">
            <img className={classes.img} src={photo} alt="Login" />
          </div>
        </div>
        <div className="right">
          <div className="login">
            <Grid container spacing={1}>
              <Grid item>
                <Alert severity="info">
                  Use email : <strong>demo@gmail.com</strong> / password :
                  <strong>&nbsp;demo1234</strong>
                </Alert>
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
                  <Alert
                    severity={alert.severity}
                    onClose={() =>
                      setAlert({
                        ...alert,
                        showAlert: false,
                      })
                    }
                  >
                    {alert.message}
                  </Alert>
                </Grid>
              )}
            </Grid>
          </div>
        </div>
      </div>
    </Grid>
  );
}

export default connect(null, { login })(Login);
