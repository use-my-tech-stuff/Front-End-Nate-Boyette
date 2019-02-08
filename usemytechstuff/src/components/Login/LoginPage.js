import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";


// import styled from "styled-components";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    "max-width": "500px",
    margin: "5% auto"
  },
  form: {
    width: "80%",
    margin: "0 auto",
    padding: "3%"
    
  },
  input: {
    width: "100%",
    margin: "3% auto"
  },
  title: {
    // "text-align": "center"
    "font-size": "30px",
    "font-weight": "bold",
    "margin-top": "10px"
  },
  button: {
    margin: "12px 0"
  }
});

const LoginPage = props => {
  const { classes } = props;

  console.log(props);

  return (
    <Paper className={classes.root} elevation={1}>
      <form className={classes.form}>
        <Typography className={classes.title} variant="h2">
          Login to Tech Plum
        </Typography>
        <TextField
          className={classes.input}
          type="text"
          name="username"
          label="username"
          value={props.username}
          placeholder="Username"
          onChange={props.handleChange}
          margin="normal"
          required
        />
        <TextField
          className={classes.input}
          label="password"
          type="text"
          name="password"
          value={props.password}
          placeholder="Password"
          onChange={props.handleChange}
          required
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={props.loginHandler}
        >
          Log In
        </Button>
        <Typography>
          Want to join?{" "}
          <Button size="small" color="primary" component={Link} to="/register">
            Sign up here
          </Button>
        </Typography>
      </form>
    </Paper>
  );
};

/* 
==== Component Styles ====
*/

// const FormContainer = styled.div`
//   max-width: 500px;
//   margin: 5% auto 0;
//   padding: 50px;
//   border: 1px solid lightgrey;
//   border-radius: 5px;
//   -webkit-box-shadow: 5px 5px 17px -4px rgba(0, 0, 0, 0.16);
//   box-shadow: 5px 5px 17px -4px rgba(0, 0, 0, 0.16);
//   text-align: left;
// `;

export default withStyles(styles)(LoginPage);
