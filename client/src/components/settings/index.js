import React, { Component } from "react";

class Settings extends Component {
  render() {
    return (
      <main>
        <button
          className="button danger"
          onClick={e => {
            console.log("clicked");
          }}
        >
          Delete account
        </button>
      </main>
    );
  }
}
export default Settings;
