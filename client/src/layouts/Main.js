import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Navigation from "../components/navigation";
import HomePage from "../pages/HomePage";
import Authpage from "../pages/AuthPage";
import AuthCallback from "../pages/AuthCallbackPage";
import LogoutPage from "../pages/LogoutPage";
import ProfilePage from "../pages/ProfilePage";
import AskPage from "../pages/AskPage";
import SubmitPage from "../pages/SubmitPage";
import PrivacyPage from "../pages/PrivacyPage";
import DashboardPage from "../pages/DashboardPage";

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
          <Route exact path="/" component={HomePage} />
          <Route exact path="/user/:username" component={ProfilePage} />
          <Route exact path="/ask" component={AskPage} />
          <Route exact path="/submit" component={SubmitPage} />
          <Route exact path="/privacy" component={PrivacyPage} />
          <Route exact path="/dashboard" component={DashboardPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Main;
