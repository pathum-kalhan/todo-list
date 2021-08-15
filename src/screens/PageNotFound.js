import React from "react";
import { Grid } from "@material-ui/core";
import "../styles/util.scss";
import photo from "../assets/error.png";

export default function PageNotFound() {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <img src={photo} alt="page-not-found" />
        <p className="center"> PAGE NOT FOUND</p>
      </Grid>
    </Grid>
  );
}
