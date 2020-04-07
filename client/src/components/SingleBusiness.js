import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getBusiness } from "../store";
import Container from "react-bootstrap/Container";

class SingleBusiness extends Component {
  componentWillMount() {
    const businessId = this.props.match.params.businessId;
    this.props.getBusiness(businessId);
  }

  render() {
    const business = this.props.singleBusiness;
    console.log(business);
    return <Container>{business && <h2>{business.name}</h2>}</Container>;
  }
}

const mapStateToProps = (state) => ({
  singleBusiness: state.business,
});

const dispatchToProps = (dispatch) => ({
  getBusiness: (businessId) => dispatch(getBusiness(businessId)),
});

export default withRouter(
  connect(mapStateToProps, dispatchToProps)(SingleBusiness)
);
