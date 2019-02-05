import React, { Component } from "react";

import { Route } from "react-router-dom";

import HomeView from "./views/HomeView";
import ItemListView from "./views/ItemListView";
import LoginView from "./views/LoginView";
import ItemView from "./views/ItemView"
import ItemFormView from "./views/ItemFormView"
import RegisterView from "./views/RegisterView"


import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        
       
        <Route exact path="/" component={HomeView} />
        <Route
          path="/item-list"
          render={props => <ItemListView {...props} />}
        />
        <Route path="/item-form" component={ItemFormView} />
        <Route path="/login" component={LoginView} />
        <Route path="/item-list/:id" component={ItemView} />
        <Route path="/register" component={RegisterView} />
      </div>
    );
  }
}

export default App;
