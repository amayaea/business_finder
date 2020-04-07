import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getBusiness } from "../store";

class SingleBusiness extends Component {
  async componentDidMount() {
    console.log("big poopoo");
    const businessId = this.props.match.params.businessId;
    await this.props.getBusiness(businessId);
  }

  render() {
    return (
      <div>
        <h2>Single Business</h2>
      </div>
    );
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
