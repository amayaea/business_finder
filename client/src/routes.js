import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import Customers from "./components/Businesses";

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/customers" component={Customers} />
      </Switch>
    );
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes);
