import React, { Component } from 'react';
import { connect } from "react-redux";
import Lang from "../sidebar/Lang";

import { apiUrl } from "../../env";

class Categories extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: null,
      success: false,
      error: "",
      name: "",
      description: "",
      thumbnail: "",
      parentCategory: null
    }
  }

  createCategory(e) {
    e.preventDefault();
    const { name, description, parentCategory, thumbnail } = this.state;
    const { auth } = this.props;
    
    const body = {
      name,
      description,
      parentCategory,
      thumbnail,
    };

    if (!name && !description && !thumbnail) {
      this.setState({success: false});
      this.setState({error: "Please fill in all the fields"});
    } else {
      fetch(`${apiUrl}/api/v1/categories`, {
        method: "POST",
        headers: {
          Authorization: auth.token,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
        .then(res => res.json())
        .then(category => {
          this.setState({ error: "" })
          this.setState({ success: true })
        }).catch(err => {
          this.setState({ error: err })
        })
    }
  }

  render() {
    return (
      <div>
        <h2>Create new category</h2>
        <form onSubmit={(e) => {this.createCategory(e)}}>
          {this.state.error ? <p className="error">{this.state.error}</p> : null}
          {this.state.success ? <p className="success">New category created!</p> : null}

          <input
            type="text"
            value={this.state.name}
            onChange={e => {
              this.setState({ name: e.target.value });
            }}
            placeholder="Category name"
          />

          <input
            type="text"
            value={this.state.description}
            onChange={e => {
              this.setState({ description: e.target.value });
            }}
            placeholder="Category description"
          />

          <select
            onChange={e => {
              this.setState({ parentCategory: e.target.value });
            }}
          >
            <option hidden>Parent category</option>
            <option value={null}>None</option>
            <option value="1">JavaScript</option>
            <option value="2">C#</option>
          </select>

          <div className="image-input">
            {this.state.thumbnail ? (
              <div
                className="thumbnail"
                style={{ backgroundImage: `url(${this.state.thumbnail})` }}
              />
            ) : null}
            <input
              type="text"
              placeholder="Thumbnail URL"
              onChange={e => {
                this.setState({ thumbnail: e.target.value });
              }}
            />
          </div>

          <button type="submit" className="button">Submit category</button>
          
        </form>


        <h2>Most popular</h2>
        <Lang
            url="/"
            icon="https://manatran.github.io/favicon.png"
            title="Javascript"
            subs="12.500"
            big
          />
          <Lang
            url="/"
            icon="https://manatran.github.io/favicon.png"
            title="Javascript"
            subs="12.500"
            big
          />
          <Lang
            url="/"
            icon="https://manatran.github.io/favicon.png"
            title="Javascript"
            subs="12.500"
            big
          />
          <Lang
            url="/"
            icon="https://manatran.github.io/favicon.png"
            title="Javascript"
            subs="12.500"
            big
          />
          <Lang
            url="/"
            icon="https://manatran.github.io/favicon.png"
            title="Javascript"
            subs="12.500"
            big
          />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Categories);