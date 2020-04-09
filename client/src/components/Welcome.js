import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export const Welcome = () => {
  return (
    <Container>
      <br />
      <h2>Welcome to Business Finder</h2>
      <br />
      <Button className="search-button" size="lg" href="/businesses">
        Click to see businesses
      </Button>
      <Button className="search-button" size="lg" href="/best-rated">
        Click to see top rated businesses
      </Button>
    </Container>
  );
};

export default Welcome;
