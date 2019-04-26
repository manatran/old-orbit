import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Lang from "./Lang";
import website from "./../../assets/icons/website.png";
import twitter from "./../../assets/icons/twitter.png";
import github from "./../../assets/icons/github.png";
import linkedin from "./../../assets/icons/linkedin.png";

class Sidebar extends Component {
  render() {
    return (
      <aside>
        <Link to="/ask" className="button">
          Ask a question
        </Link>
        <Link to="/submit" className="button light">
          Submit your creation
        </Link>

        <section className="popular">
          <h2>Popular categories</h2>
          <Lang
            url="/"
            icon="https://manatran.github.io/favicon.png"
            title="Javascript"
            subs="12.500"
          />
          <Lang
            url="/"
            icon="https://manatran.github.io/favicon.png"
            title="Javascript"
            subs="12.500"
          />
          <Lang
            url="/"
            icon="https://manatran.github.io/favicon.png"
            title="Javascript"
            subs="12.500"
          />
          <Lang
            url="/"
            icon="https://manatran.github.io/favicon.png"
            title="Javascript"
            subs="12.500"
          />
          <Lang
            url="/"
            icon="https://manatran.github.io/favicon.png"
            title="Javascript"
            subs="12.500"
          />
        </section>

        <footer>
          <section className="nav">
            <div className="column">
              <Link to="/challenges">Code challenges</Link>
              <Link to="/suggestions">Challenge suggestions</Link>
              <Link to="/questions">Question forum</Link>
            </div>
            <div className="column">
              <Link to="/privacy">Privacy policy</Link>
              <Link to="/terms">Terms of use</Link>
            </div>
          </section>

          <section className="social">
            <a
              href="https://manatran.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={website} alt="Website" />
            </a>
            <a
              href="https://twitter.com/manaus_t"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="Twitter" />
            </a>
            <a
              href="https://github.com/manatran"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/manaustransez/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
          </section>
          <section className="copy">
            <p>&copy; 2019 Manaus Transez</p>
            <p>All rights reserved.</p>
          </section>
        </footer>
      </aside>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Sidebar);
