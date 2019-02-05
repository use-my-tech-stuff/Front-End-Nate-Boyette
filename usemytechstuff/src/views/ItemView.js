import React from "react";
import { connect } from "react-redux";

import { getItemById, getUserById } from "../store/actions";

import Item from "../components/Item/Item";

class ItemView extends React.Component {
  componentDidMount() {
    this.props.getItemById(this.props.match.params.id);

    
  }

  render() {
    // console.log(this.props);

    return (
      <div>
      
        {
          // Needs to wait until an item is fetched so that the item page
          // can then run getUserById, which needs the owner from item
          this.props.itemStatus.isFetchingItems === true ? (
          <h1>Loading...</h1>
        ) : (
          <Item item={this.props.item} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    item: state.itemReducer.item,
    itemStatus: state.itemReducer.itemStatus,
    user: state.userReducer.user
  };
};

export default connect(
  mapStateToProps,
  { getItemById, getUserById }
)(ItemView);
