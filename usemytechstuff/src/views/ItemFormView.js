import React from "react";

import ItemForm from "../components/ItemForm/ItemForm";
import { connect } from "react-redux";
import { addItem, getItems, updateItem } from "../store/actions";


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
      available: true,
      renter: 1
    },
    editItem: {},
    isEditing: false
  };

  componentDidMount() {
    this.props.getItems();
    if (localStorage.getItem('editItem')) {
      this.setState({
        item: JSON.parse(localStorage.getItem('editItem')),
        isEditing: true
      })
    }
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

    console.log(this.state.item)
   
    this.props.addItem(this.state.item)
    
  };


  updateItem = () => {
    this.props.updateItem(this.state.item.itemId, this.state.item)
    this.setState({
      isEditing: false
    })
    localStorage.removeItem('editItem');
    localStorage.removeItem('editItemId');
  }

  cancelForm = () => [

  ]

  render() {
    console.log(this.state.item)

    // console.log(this.state.item)
    // console.log(localStorage.getItem('userId'));
    return (
      <ItemForm
        item={this.state.item}
        handleChange={this.handleChange}
        addItem={this.addItem}
        updateItem={this.updateItem}
        isEditing={this.state.isEditing}
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
  { addItem, getItems, updateItem }
)(ItemFormView);
