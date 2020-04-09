import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import Businesses from "./components/Businesses";
import SingleBusiness from "./components/SingleBusiness";
import Welcome from "./components/Welcome";

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/businesses" component={Businesses} />
        <Route path="/business/:businessId" component={SingleBusiness} />
        <Route path="/best-rated" component={Businesses} />
        <Route exact path="/" component={Welcome} />
      </Switch>
    );
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes);
