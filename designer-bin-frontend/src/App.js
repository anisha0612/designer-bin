import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/HomePage/HomePage.jsx";
import ShopPage from "./pages/ShopPage/ShopPage.jsx";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage/SignInAndSignUpPage.jsx";
import Header from "./components/Header/Header.jsx";

import CategoryPage from "./pages/CategoryPage/CategoryPage.jsx";

import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />

          <Route exact path='/:category' component={CategoryPage} />
          <Route exact path='/:category/:id' component={ProductDetailsPage} />

        </Switch>
      </div>
    );
  }
}

export default App;
