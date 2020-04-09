import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink as Link } from "react-router-dom";
import { searchBusinesses } from "../store";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  handleChange(event) {
    this.setState({
      search: event.target.value,
    });
    console.log(this.state);
  }

  handleSubmit() {
    this.props.handleSearch(this.state.search, "name");
  }

  redirect() {
    if (this.props.loggedIn) return "/discover/for-you";
    else return "/";
  }

  render() {
    return (
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <Link to={`/businesses/name/${this.state.search}`}>
          <Button
            className="search-button"
            type="submit"
            variant="primary"
            onClick={() => this.props.handleSearch(this.state.search, "name")}
          >
            Search by name
          </Button>
        </Link>
        <Link to={`/businesses/zip/${this.state.search}`}>
          <Button
            className="search-button"
            type="submit"
            variant="primary"
            onClick={() => this.props.handleSearch(this.state.search, "zip")}
          >
            Search by zip
          </Button>
        </Link>
        <Link to={`/businesses/city/${this.state.search}`}>
          <Button
            className="search-button"
            type="submit"
            variant="primary"
            onClick={() => this.props.handleSearch(this.state.search, "city")}
          >
            Search by city
          </Button>
        </Link>
      </Form>
    );
  }
}

const mapDispatch = (dispatch) => ({
  handleSearch: (search, col) => dispatch(searchBusinesses(search, col)),
});

export default connect(null, mapDispatch)(Search);
