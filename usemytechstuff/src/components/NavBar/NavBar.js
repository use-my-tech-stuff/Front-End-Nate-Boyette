import React from "react";

import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";

import { Link } from "react-router-dom";

const styles = {
  root: {
    // flexGrow: 1
    // "margin-bottom": "5%"
    width: "100%"
  },
  navItems: {
    width: "40%"
  },
  
};

class NavBar extends React.Component {
  pushToPage = e => {
    e.preventDefault();
    const routeTo = !this.props.isLoggedIn ? "login" : "item-list";
    this.props.history.push(`/${routeTo}`);
  };

  render() {
    const userId = localStorage.getItem("userId");
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed" color="default">
          <Toolbar>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="space-between"
            >
              <Grid item>
                <Typography variant="h6" color="inherit">
                  Tech Plum
                </Typography>
              </Grid>
              <Grid
                container
                className={classes.navItems}
                direction="row"
                justify="flex-end"
                wrap="nowrap"
              >
                <Grid item>
                  <Button component={Link} to="/item-list">View Items</Button>
                </Grid>
                {!userId ? null : 
                  <Grid item>
                    <Button component={Link} to={`/dashboard/${userId}`}>
                      Profile
                    </Button>
                  </Grid>
                }
                  
                

                <Grid item>
                  {!userId ? (
                    <Button component={Link} to="/login">
                      Log In
                    </Button>
                  ) : (
                    <Button
                      onClick={this.props.userLogOut}
                      component={Link}
                      to="/login"
                    >
                      Log Out
                    </Button>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
