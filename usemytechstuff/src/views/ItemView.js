import React from "react";
import { connect } from "react-redux";

class ItemView extends React.Component {
  render() {
    return <div>Item View</div>;
  }
}

const mapStateToProps = state => {
  return {
    items: state.itemReducer.items,
    user: state.userReducer.users
  }
}


export default connect(mapStateToProps,{})(ItemView);
