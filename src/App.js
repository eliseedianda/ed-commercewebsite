import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import signInAndSignUpPages from "./pages/sign-in-and-sign-up-pages/sign-in-and-sign-up-pages.component";
import {
  auth,
  creatUserProfileDocument,
} from "./components/firebase/firebase-utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  unsubsribeFromAuth = null;
  componentDidMount() {
    this.unsubsribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await creatUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
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
