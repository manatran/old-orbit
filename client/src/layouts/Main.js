import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Navigation from "./../components/navigation";
import Homepage from "./../pages/Homepage";
import Authpage from "./../pages/Authpage";
import AuthCallback from "./../pages/AuthCallbackPage";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Switch>
          <Route exact path="/signup" component={Authpage} />
          <Route exact path="/callback" component={AuthCallback} />
          <Route exact path="/" component={Homepage} />
          <Redirect from="/home" to="/" />
          <Redirect from="*" to="/" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Main;
