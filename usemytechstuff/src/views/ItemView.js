import React from "react";
import { connect } from "react-redux";

import { getItemById, getUserById, rentItem } from "../store/actions";

import Item from "../components/Item/Item";

class ItemView extends React.Component {
  state = {
    renter : this.props.item.renter
  }
  
  componentDidMount() {
    this.props.getItemById(this.props.match.params.id);
    
  }

  componentDidUpdate(prevProps) {
    if (prevProps.itemStatus.isRentingItem !== this.props.itemStatus.isRentingItem) {
      this.props.getItemById(this.props.match.params.id)
      // console.log('CDU IF FIRED')
    }
  
    // console.log("CDU FIRED")
  }

  rentItem = () => {
    
    const userId = localStorage.getItem('userId')


    const rentedItem = {
      ...this.props.item,
      available: false,
      renter: userId 
    }

    // console.log('RENTED ITEM', rentedItem)
    this.props.rentItem(this.props.item.itemId, rentedItem)
    // window.location.reload();
    // this.props.getItemById(this.props.match.params.id);
  };
  
  
  render() {
    console.log('USER',this.props.user);

    return (
      <div>
        {// Needs to wait until an item is fetched so that the item page
        // can then run getUserById, which needs the owner from item
        this.props.itemStatus.isFetchingItems === true ? (
          <h1>Loading...</h1>
        ) : (
          <Item item={this.props.item} rentItem={this.rentItem} history={this.props.history} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    item: state.itemReducer.item,
    isRentingItem: state.itemReducer.itemStatus.isRentingItem,
    itemStatus: state.itemReducer.itemStatus,
    user: state.userReducer.user
  };
};

export default connect(
  mapStateToProps,
  { getItemById, getUserById, rentItem }
)(ItemView);
