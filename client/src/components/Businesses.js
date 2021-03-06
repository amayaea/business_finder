import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getBusinesses, searchBusinesses } from "../store";
import Media from "react-bootstrap/Media";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import StarRatingComponent from "react-star-rating-component";

class Businesses extends Component {
  componentWillMount() {
    const search = this.props.location.pathname.split("/");
    if (this.props.location.pathname === "/best-rated") {
      this.props.getBusinesses(true);
    } else if (!this.props.match.isExact)
      this.props.handleSearch(search[3], search[2]);
    else this.props.getBusinesses();
  }

  render() {
    const businesses = this.props.businesses;
    return (
      <Container>
        <br />
        <h2>Businesses</h2>
        <br />
        <ul>
          {businesses &&
            businesses.map((business) => (
              <Media key={business.business_id}>
                <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src="/business.png"
                  alt="Business placeholder"
                />
                <Media.Body>
                  <Button
                    variant="link"
                    href={`/business/${business.business_id}`}
                    className="Business-list"
                  >
                    {business.name}
                  </Button>
                  {`${business.address}, ${business.city}, ${business.state} ${business.postal_code}`}
                  <br />
                  <StarRatingComponent
                    name="rating"
                    starCount={5}
                    value={business.stars}
                  />
                </Media.Body>
              </Media>
            ))}
        </ul>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  businesses: state.businesses,
});

const dispatchToProps = (dispatch) => ({
  getBusinesses: (best) => dispatch(getBusinesses(best)),
  handleSearch: (search, col) => dispatch(searchBusinesses(search, col)),
});

export default withRouter(
  connect(mapStateToProps, dispatchToProps)(Businesses)
);
