import { Typography, Grid } from "@material-ui/core";
import React, { Component } from "react";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";

export class Footer extends Component {
  render() {
    const handleArrow = () => {
      window.scrollTo(0, 0);
    };
    return (
      <div className="footer">
        <Grid container>
          <Grid item xs={6} className="footer1">
            <Typography>Made By Ofir</Typography>
          </Grid>

          <Grid item xs={6} className="footer2">
            <ExpandLessIcon
              onClick={() => {
                handleArrow();
              }}
              fontSize="large"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Footer;
