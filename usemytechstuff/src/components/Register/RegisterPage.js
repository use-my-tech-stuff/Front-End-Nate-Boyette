import React from "react";

// import {
//   Button,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   FormText,
//   Col,
//   Row,
//   InputGroup,
//   InputGroupAddon
// } from "reactstrap";
// import styled from "styled-components";

import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography, TextField, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

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

const RegisterPage = props => {
  const {
    username,
    email,
    password,
    firstname,
    lastname,
    phone
  } = props.newUser;

  const { classes } = props;

  // return (
  //   <FormContainer>
  //     <h2>Sign up for an Account</h2>
  //     <Form>
  //       <Row form>
  //         <Col md={6}>
  //           <FormGroup>
  //             <Input
  //               type="text"
  //               name="firstname"
  //               value={firstname}
  //               onChange={props.handleChange}
  //               placeholder="First Name"
  //             />
  //           </FormGroup>
  //         </Col>
  //         <Col md={6}>
  //           <FormGroup>
  //             <Input
  //               type="text"
  //               name="lastname"
  //               value={lastname}
  //               onChange={props.handleChange}
  //               placeholder="Last Name"
  //             />
  //           </FormGroup>
  //         </Col>
  //       </Row>
  //       <FormGroup row>
  //         <Col sm={12}>
  //           <Input
  //             type="text"
  //             name="username"
  //             value={username}
  //             placeholder="Username"
  //             onChange={props.handleChange}
  //             required
  //           />
  //         </Col>
  //       </FormGroup>
  //       <FormGroup row>
  //         <Col sm={12}>
  //           <Input
  //             type="text"
  //             name="password"
  //             value={password}
  //             placeholder="Password"
  //             onChange={props.handleChange}
  //             required
  //           />
  //         </Col>
  //       </FormGroup>
  //       <FormGroup row>
  //         <Col sm={12}>
  //           <Input
  //             type="text"
  //             name="email"
  //             value={email}
  //             placeholder="Email"
  //             onChange={props.handleChange}
  //             required
  //           />
  //         </Col>
  //       </FormGroup>
  //       <FormGroup row>
  //         <Col sm={12}>
  //           <Input
  //             type="text"
  //             name="phone"
  //             value={phone}
  //             placeholder="Phone (Optional)"
  //             onChange={props.handleChange}
  //           />
  //         </Col>
  //       </FormGroup>
  //       <Button color="primary" onClick={props.registerUser}>Register</Button>
  //     </Form>
  //   </FormContainer>
  // );

  return (
    <Paper className={classes.root} elevation={1}>
      <form className={classes.form}>
        <Typography className={classes.title} variant="h2">
          Join Tech Plum
        </Typography>
        <Grid container spacing={16}>
          <Grid item xs={6}>
            <TextField
              className={classes.input}
              type="text"
              name="firstname"
              label="first name"
              value={firstname}
              onChange={props.handleChange}
              margin="normal"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              className={classes.input}
              label="last name"
              type="text"
              name="lastname"
              value={lastname}
              onChange={props.handleChange}
              required
            />
          </Grid>
        </Grid>

        <TextField
          className={classes.input}
          label="username"
          type="text"
          name="username"
          value={username}
          onChange={props.handleChange}
          required
        />
        <TextField
          className={classes.input}
          label="password"
          type="text"
          name="password"
          value={password}
          onChange={props.handleChange}
          required
        />
        <TextField
          className={classes.input}
          label="email"
          type="text"
          name="email"
          value={email}
          onChange={props.handleChange}
          required
        />
        <TextField
          className={classes.input}
          label="phone"
          type="text"
          name="phone"
          value={phone}
          onChange={props.handleChange}
        />

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={props.registerUser}
        >
          Register
        </Button>
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

export default withStyles(styles)(RegisterPage);
