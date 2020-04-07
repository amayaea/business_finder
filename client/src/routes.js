import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import Businesses from "./components/Businesses";
import SingleBusiness from "./components/SingleBusiness";

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/businesses" component={Businesses} />
        <Route path="/business/:businessId" component={SingleBusiness} />
      </Switch>
    );
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes);
