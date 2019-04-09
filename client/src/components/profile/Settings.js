import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/authActions";
import { apiUrl } from "../../env";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popup: false
    };
  }

  deleteAccount() {
    fetch(`${apiUrl}/api/v1/user`, {
      method: "DELETE",
      headers: {
        Authorization: this.props.auth.token
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.props.logout();
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <section className={`settings ${this.props.className}`}>
        <button
          className="button danger"
          onClick={e => {
            this.setState({ popup: true });
          }}
        >
          Delete account
        </button>

        {this.state.popup ? (
          <div className="popup">
            <div className="card">
              <p className="error">
                Are you sure you want to delete your account?
              </p>
              <div className="button-container">
                <button
                  className="button light"
                  onClick={this.deleteAccount.bind(this)}
                >
                  Yes
                </button>
                <button
                  className="button"
                  onClick={e => {
                    this.setState({ popup: false });
                  }}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
