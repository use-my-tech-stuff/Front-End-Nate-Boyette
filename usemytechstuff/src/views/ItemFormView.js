import React from "react";

import ItemForm from "../components/ItemForm/ItemForm";
import { connect } from "react-redux";
import { addItem, getItems } from "../store/actions";

const emptyItem = {
  itemId: null,
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
    item: emptyItem
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
    this.state.available === "Yes"
      ? this.setState({
          item: {
            ...this.setState,
            available: true
          }
        })
      : this.setState({
          item: {
            ...this.setState,
            available: false
          }
        });

    this.setState({
      ...this.state.item,
      itemId: this.props.itemData.length - 1
    });

    this.props.addItem(this.state.item);
  };

  render() {
    console.log((this.props.itemData.length - 1) + 1);
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
  
  return { itemData: state.itemReducer.items };
};

export default connect(
  mapStateToProps,
  { addItem, getItems }
)(ItemFormView);
