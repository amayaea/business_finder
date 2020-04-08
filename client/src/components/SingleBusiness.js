import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getBusiness } from "../store";
import Container from "react-bootstrap/Container";
import Media from "react-bootstrap/Media";
import Badge from "react-bootstrap/Badge";
import StarRatingComponent from "react-star-rating-component";

class SingleBusiness extends Component {
  static propTypes = {
    getBusiness: PropTypes.func.isRequired,
    singleBusiness: PropTypes.array.isRequired,
  };

  static defaultProps = {
    singleBusiness: [],
  };

  componentWillMount() {
    const businessId = this.props.match.params.businessId;
    this.props.getBusiness(businessId);
  }

  render() {
    const business = this.props.singleBusiness;
    const bus = business[0];
    return (
      <Container>
        <br />
        <Media>
          <img
            width={256}
            height={256}
            className="mr-3"
            src="/business.png"
            alt="Business placeholder"
          />
          <Media.Body>
            <h2>
              {bus && bus.name}{" "}
              {bus && bus.is_open === 1 && (
                <Badge variant="success">Open</Badge>
              )}
              {bus && bus.is_open === 0 && (
                <Badge variant="danger">Closed</Badge>
              )}
            </h2>
            {bus &&
              `${bus.address}, ${bus.city}, ${bus.state} ${bus.postal_code}`}
            <br />
            {bus && (
              <StarRatingComponent
                name="rating"
                starCount={5}
                value={bus.stars}
              />
            )}
            {bus && ` ${bus.review_count} reviews`}
            <br />
            <h4>Hours:</h4>
            {bus && `Sunday: ${bus.sunday}`}
            <br />
            {bus && `Monday: ${bus.monday}`}
            <br />
            {bus && `Tuesday: ${bus.tuesday}`}
            <br />
            {bus && `Wednesday: ${bus.wednesday}`}
            <br />
            {bus && `Thursday: ${bus.thursday}`}
            <br />
            {bus && `Friday: ${bus.friday}`}
            <br />
            {bus && `Saturday: ${bus.saturday}`}
            <br />
            <br />
            <h4>Categories:</h4>
            {bus && bus.categories.split(",").join(", ")}
            <br />
          </Media.Body>
        </Media>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  singleBusiness: state.singleBusiness,
});

const dispatchToProps = (dispatch) => ({
  getBusiness: (businessId) => dispatch(getBusiness(businessId)),
});

export default withRouter(
  connect(mapStateToProps, dispatchToProps)(SingleBusiness)
);
