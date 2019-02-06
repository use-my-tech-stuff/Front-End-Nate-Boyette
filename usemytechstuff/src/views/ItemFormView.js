import React from "react";

import ItemForm from "../components/ItemForm/ItemForm";
import { connect } from "react-redux";
import { addItem, getItems } from "../store/actions";

const emptyItem = {
  itemId: "",
  owner: 1,
  title: "",
  description: "",
  brand: "",
  model: "",
  label: "",
  dailyPrice: "",
  weeklyPrice: "",
  available: "",
  renter: 2
};

class ItemFormView extends React.Component {
  state = {
    item: {
      owner: localStorage.getItem('userId'),
      title: "",
      description: "",
      brand: "",
      model: "",
      label: "",
      dailyPrice: "",
      weeklyPrice: "",
      available: '',
      renter: ''
    }
  };

  componentDidMount() {
    this.props.getItems();
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      item: {
        ...this.state.item,
        [name]: value
      }
    });
  };

  addItem = () => {
    // If available === Yes ? true : false
    if (this.state.item.available === 'Yes' || this.state.item.available === '') {
      this.setState({
        items: {
          ...this.state.item,
          available: true
        }
      })
      
    }

    this.setState({
      item: {
        ...this.state.item,
        owner: localStorage.getItem('userId')
      }
    })
   
    this.props.addItem(this.state.item)
    
  };

  render() {
    console.log(this.state.item)
    console.log(localStorage.getItem('userId'));
    return (
      <ItemForm
        item={this.state.item}
        handleChange={this.handleChange}
        addItem={this.addItem}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    itemData: state.itemReducer.items,
    dataLength: state.itemReducer.items.length
  };
};

export default connect(
  mapStateToProps,
  { addItem, getItems }
)(ItemFormView);
