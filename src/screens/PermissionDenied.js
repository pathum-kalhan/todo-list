import { Grid } from "@material-ui/core";
import React from "react";
import photo from "../assets/guard.png";
import "../styles/util.scss"

export default function PermissionDenied() {
  return (
    <Grid container justifyContent="center">
      <Grid item >
        <img
          className="permission-denied-image"
          src={photo}
          alt="Permission denied"
        />
        <p className="center">PERMISSION DENIED</p>
      </Grid>
    </Grid>
  );
}
