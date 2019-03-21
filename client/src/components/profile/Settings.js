import React, { Component } from "react";

class Settings extends Component {
  render() {
    return (
      <section className={`settings ${this.props.className}`}>
        <button
          className="button danger"
          onClick={e => {
            console.log("clicked");
          }}
        >
          Delete account
        </button>
      </section>
    );
  }
}
export default Settings;
