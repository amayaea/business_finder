import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getBusinesses } from "../store";

class Businesses extends Component {
  static propTypes = {
    getBusinesses: PropTypes.func.isRequired,
    businesses: PropTypes.array.isRequired,
  };

  static defaultProps = {
    businesses: [],
  };

  async componentWillMount() {
    console.log("poop");
    await this.props.getBusinesses();
  }

  render() {
    return (
      <div>
        <h2>Businesses</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  businesses: state.businesses,
});

const dispatchToProps = (dispatch) => ({
  getBusinesses: () => dispatch(getBusinesses()),
});

export default withRouter(
  connect(mapStateToProps, dispatchToProps)(Businesses)
);
