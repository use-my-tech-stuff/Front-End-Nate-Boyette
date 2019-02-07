import React from "react";
import { withRouter, Redirect } from "react-router";

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

const ItemForm = props => {
  const handleClick = e => {
    // e.preventDefault();

    // Will need to check against editing status
    // If editing then update Item
    if (props.isEditing) {
      props.updateItem();
    } else {
      props.addItem();
    }

    props.history.push(`/dashboard/${localStorage.getItem("userId")}`);
  };

  // console.log(props.item)
  return (
    <FormContainer>
      {props.isEditing ? <h1>Edit Item</h1> : <h2>Add An Item</h2>}
      <Form method="/POST" encType="multipart/form-data">
        <FormGroup row>
          <Label for="itemTitle" sm={2}>
            Title
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="title"
              value={props.item.title}
              id="itemTitle"
              placeholder="Enter A Title For Your Post"
              onChange={props.handleChange}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="itemBrand" sm={2}>
            Brand
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="brand"
              value={props.item.brand}
              id="itemBrand"
              placeholder="Enter A Brand"
              onChange={props.handleChange}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="itemModel" sm={2}>
            Model
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="model"
              value={props.item.model}
              id="itemModel"
              placeholder="Enter A Model"
              onChange={props.handleChange}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="itemCategory" sm={2}>
            Category
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="label"
              id="itemCategory"
              placeholder="Enter a Category"
              value={props.item.label}
              onChange={props.handleChange}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="itemDescription" sm={2}>
            Description
          </Label>
          <Col sm={10}>
            <Input
              type="textarea"
              name="description"
              value={props.item.description}
              id="itemDescription"
              onChange={props.handleChange}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="image" sm={2}>
            Image
          </Label>
          <Col sm={10}>
            <Input
              type="file"
              name="imgUrl"
              accept="image/*"
              id="image"
              onChange={props.fileHandler}
            />
            <Button onClick={(e) => props.uploadImage(e)}>Upload</Button>
            <FormText color="muted" className="text-left">
              Upload an image of your item.
            </FormText>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="dailyPrice" sm={2}>
            Daily Price
          </Label>
          <Col sm={10}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">$</InputGroupAddon>
              <Input
                placeholder="Amount"
                type="number"
                name="dailyPrice"
                value={props.item.dailyPrice}
                step="1"
                id="dailyPrice"
                onChange={props.handleChange}
                required
              />
              <InputGroupAddon addonType="append">.00</InputGroupAddon>
            </InputGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="weeklyPrice" sm={2}>
            Weekly Price
          </Label>
          <Col sm={10}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">$</InputGroupAddon>
              <Input
                placeholder="Amount"
                type="number"
                name="weeklyPrice"
                value={props.item.weeklyPrice}
                step="1"
                id="weeklyPrice"
                onChange={props.handleChange}
                required
              />
              <InputGroupAddon addonType="append">.00</InputGroupAddon>
            </InputGroup>
          </Col>
        </FormGroup>
        <FormGroup row />
      </Form>
      <Button onClick={handleClick}>Submit</Button>
    </FormContainer>
  );
};

/* 
==== Component Styles ====
*/

const FormContainer = styled.div`
  width: 60%;
  margin: 2% auto;
  padding: 50px;
  border: 1px solid lightgrey;
`;

export default withRouter(ItemForm);
