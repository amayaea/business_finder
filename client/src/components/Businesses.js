import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getBusinesses } from "../store";
import { SingleBusiness } from "./SingleBusiness";

class Businesses extends Component {
  static propTypes = {
    getBusinesses: PropTypes.func.isRequired,
    businesses: PropTypes.array.isRequired,
  };

  static defaultProps = {
    businesses: [],
  };

  componentWillMount() {
    console.log("poop");
    this.props.getBusinesses();
  }

  render() {
    return (
      <div>
        <h2>Businesses</h2>
        <ul>
          {this.props.businesses.map((business) => (
            <SingleBusiness business={business} key={business.business_id} />
          ))}
        </ul>
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
