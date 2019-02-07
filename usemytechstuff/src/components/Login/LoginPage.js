import React from "react";


import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
  InputGroup,
  InputGroupAddon
} from "reactstrap";
import styled from "styled-components";

const LoginPage = props => {

  console.log(props)

  return (
    <FormContainer>
      <h2>Log in to Tech Plum</h2>
      <Form>
        <FormGroup row>
          <Col sm={10}>
            <Input
              type="text"
              name="username"
              value={props.username}
              placeholder="Username"
              onChange={props.handleChange}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={10}>
            <Input
              type="text"
              name="password"
              value={props.password}
              placeholder="Password"
              onChange={props.handleChange}
              required
            />
          </Col>
        </FormGroup>
        <Button color="primary" onClick={props.loginHandler}>
          Log In
        </Button>
      </Form>
      {props.loginFailed === true && (
        <h4>Username or password incorrect</h4>
      )}
      {props.isLoggingIn === true && props.loginFailed === false && <h4>Logging In</h4>}
    </FormContainer>
  );
};

/* 
==== Component Styles ====
*/

const FormContainer = styled.div`
  max-width: 500px;
  margin: 5% auto 0;
  padding: 50px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  -webkit-box-shadow: 5px 5px 17px -4px rgba(0, 0, 0, 0.16);
  box-shadow: 5px 5px 17px -4px rgba(0, 0, 0, 0.16);
  text-align: left;
`;



export default LoginPage;
