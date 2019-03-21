import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Navigation from "./../components/navigation";
import Homepage from "./../pages/Homepage";
import Authpage from "./../pages/Authpage";
import AuthCallback from "./../pages/AuthCallbackPage";
import LogoutPage from "./../pages/LogoutPage";
import ProfilePage from "./../pages/ProfilePage";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Switch>
          <Route exact path="/signup" component={Authpage} />
          <Redirect from="/login" to="/signup" />
          <Route exact path="/callback" component={AuthCallback} />
          <Route exact path="/logout" component={LogoutPage} />
          <Redirect from="/home" to="/" />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/user/:username" component={ProfilePage} />
          <Redirect from="*" to="/" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Main;
