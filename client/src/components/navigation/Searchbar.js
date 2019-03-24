import React, { Component } from "react";
import "./nav.css";

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: "/search",
      placeholder: "Search Orbit..."
    };
  }

  componentWillMount() {
    if (this.props.action) {
      this.setState({ action: this.props.action });
    }
    if (this.props.placeholder) {
      this.setState({ placeholder: this.props.placeholder });
    }
  }

  render() {
    return (
      <form className="search" action={this.state.action} method="GET">
        <i className="material-icons">search</i>
        <input type="text" name="q" placeholder={this.state.placeholder} />
      </form>
    );
  }
}
export default Searchbar;
