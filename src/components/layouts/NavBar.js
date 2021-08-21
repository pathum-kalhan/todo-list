import React, { Fragment } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { logout, toggleDrawer } from "../../store/actions/authActions.ts";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  pushBtn: {
    marginLeft: "auto",
  },
}));

function NavBar(props) {
  const classes = useStyles();

  let history = useHistory();

  let dispatch = useDispatch();

  let token = useSelector((state) => state.auth.token);

  const onLogout = () => {
    dispatch(logout());
    history.push("/");
  };

  const toggle = () => {
    dispatch(toggleDrawer());
  };

  return (
    <div>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar>
          {token && (
            <IconButton
              onClick={toggle}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6">My Tasks</Typography>

          {token && (
            <Fragment>
              <Button
                color="inherit"
                variant="outlined"
                onClick={onLogout}
                className={classes.pushBtn}
                startIcon={<ExitToAppIcon />}
              >
                logout
              </Button>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
