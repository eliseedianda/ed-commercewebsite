import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import signInAndSignUpPages from "./pages/sign-in-and-sign-up-pages/sign-in-and-sign-up-pages.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/Shop" component={ShopPage} />
        <Route path="/signin" component={signInAndSignUpPages} />
      </Switch>
    </div>
  );
}

export default App;
