import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import signInAndSignUpPages from "./pages/sign-in-and-sign-up-pages/sign-in-and-sign-up-pages.component";
import { auth } from "./components/firebase/firebase-utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  unsubsribeFromAuth = null;
  componentDidMount() {
    this.unsubsribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }
  componentWillUnmount() {
    this.unsubsribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/Shop" component={ShopPage} />
          <Route path="/signin" component={signInAndSignUpPages} />
        </Switch>
      </div>
    );
  }
}

export default App;
