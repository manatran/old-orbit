import React, { Component } from "react";
import Searchbar from "../navigation/Searchbar";
import Orbit from "./../../assets/icons/orbit.png";
import Stackoverflow from "./../../assets/icons/stackoverflow.png";
import "./ask.css";

class Research extends Component {
  render() {
    return (
      <section className="research">
        <h2>Do your research</h2>
        <div className="searchbars">
          <div className="searchbar">
            <img src={Orbit} alt="Orbit" />
            <Searchbar />
          </div>
          <div className="searchbar">
            <img src={Stackoverflow} alt="Orbit" />
            <Searchbar
              action="https://stackoverflow.com/search"
              placeholder="Search StackOverflow..."
            />
          </div>
        </div>
      </section>
    );
  }
}
export default Research;
