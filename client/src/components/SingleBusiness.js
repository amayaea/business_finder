import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getBusiness } from "../store";
import Container from "react-bootstrap/Container";
import Media from "react-bootstrap/Media";
import Badge from "react-bootstrap/Badge";
import StarRatingComponent from "react-star-rating-component";

class SingleBusiness extends Component {
  componentWillMount() {
    const businessId = this.props.match.params.businessId;
    this.props.getBusiness(businessId);
  }

  render() {
    const business = this.props.singleBusiness;
    let bus,
      checkins = undefined;
    if (business.bus) bus = business.bus[0];
    if (business.checkins) checkins = business.checkins;
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
            <div>{bus && `Sunday: ${bus.sunday}`}</div>
            <div>{bus && `Monday: ${bus.monday}`}</div>
            <div>{bus && `Tuesday: ${bus.tuesday}`}</div>
            <div>{bus && `Wednesday: ${bus.wednesday}`}</div>
            <div>{bus && `Thursday: ${bus.thursday}`}</div>
            <div>{bus && `Friday: ${bus.friday}`}</div>
            <div>{bus && `Saturday: ${bus.saturday}`}</div>
            <br />
            <h4>Categories:</h4>
            {bus && bus.categories.split(";").join(", ")}
            <br />
            <br />
            <h4>Checkins Today:</h4>
            {checkins &&
              checkins.map((checkin) => {
                return (
                  <div
                    key={`${checkin.weekday}${checkin.hour}`}
                  >{`${checkin.hour.substring(0, checkin.hour.length - 2)} ${
                    checkin.checkins
                  }`}</div>
                );
              })}
            <br />
            <h4>Attributes:</h4>
            {bus &&
              Object.keys(bus).map((key, index) => {
                if (index >= 20) {
                  return <div key={key}>{`${key}: ${bus[key]}`}</div>;
                } else return null;
              })}
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
