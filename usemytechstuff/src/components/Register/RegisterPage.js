import React from "react";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
  Row,
  InputGroup,
  InputGroupAddon
} from "reactstrap";
import styled from "styled-components";

const RegisterPage = props => {
  const {
    username,
    email,
    password,
    firstname,
    lastname,
    phone
  } = props.newUser;

  return (
    <FormContainer>
      <h2>Sign up for an Account</h2>
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Input
                type="text"
                name="firstname"
                value={firstname}
                onChange={props.handleChange}
                placeholder="First Name"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Input
                type="text"
                name="lastname"
                value={lastname}
                onChange={props.handleChange}
                placeholder="Last Name"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup row>
          <Col sm={12}>
            <Input
              type="text"
              name="username"
              value={username}
              placeholder="Username"
              onChange={props.handleChange}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={12}>
            <Input
              type="text"
              name="password"
              value={password}
              placeholder="Password"
              onChange={props.handleChange}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={12}>
            <Input
              type="text"
              name="email"
              value={email}
              placeholder="Email"
              onChange={props.handleChange}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={12}>
            <Input
              type="text"
              name="phone"
              value={phone}
              placeholder="Phone (Optional)"
              onChange={props.handleChange}
            />
          </Col>
        </FormGroup>
        <Button color="primary">Register</Button>
      </Form>
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

export default RegisterPage;
