import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  ThemeProvider,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";

import Login from "./screens/Login";
import NavBar from "./components/layouts/NavBar";
import Drawer from "./components/layouts/Drawer";
import NotFound from "./screens/PageNotFound";
import PermissionDenied from "./screens/PermissionDenied";

import "../src/index.css";

// Redux
import { Provider } from "react-redux";
import store from "./store/store";

// protected route
import ProtectedRoute from "./components/common/ProtectedRoute";

import { routes } from "./routes";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    secondary: {
      main: purple[500],
    },
  },
  overrides: {
    MuiFormLabel: {
      asterisk: {
        color: "#db3131",
        "&$error": {
          color: "#db3131",
        },
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
}));

function App(props: any) {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <Router>
          <div className={classes.root}>
            <NavBar {...props}> </NavBar>
            <ThemeProvider theme={darkTheme}>
              <Drawer />
            </ThemeProvider>
            <Suspense fallback={<div>Please wait...</div>}>
              <Switch>
                <Route path="/" exact component={Login}></Route>
                <Route
                  path="/permission-denied"
                  exact
                  component={PermissionDenied}
                ></Route>

                {routes
                  .flatMap((items) => items.children)
                  .map(({ component, path }) => (
                    <ProtectedRoute
                      component={component}
                      exact
                      path={path}
                      key={path}
                    />
                  ))}

                <Route component={NotFound}></Route>
              </Switch>
            </Suspense>
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
