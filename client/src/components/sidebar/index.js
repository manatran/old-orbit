import React, { Component } from 'react';
import Lang from './Lang';
import website from './../../assets/icons/website.png';
import twitter from './../../assets/icons/twitter.png';
import github from './../../assets/icons/github.png';
import linkedin from './../../assets/icons/linkedin.png';

class Sidebar extends Component {

  render() {
    return (
      <aside>
        <a href="/" className="button">Ask a question</a>
        <a href="/" className="button light">Submit your creation</a>

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
              <a href="/">Code challenges</a>
              <a href="/">Challenge suggestions</a>
              <a href="/">Question forum</a>
            </div>
            <div className="column">
              <a href="/">Privacy policy</a>
              <a href="/">Terms of use</a>
            </div>
          </section>

          <section className="social">
            <a href="https://manatran.github.io" target="_blank" rel="noopener noreferrer">
              <img src={website} alt="Website" />
            </a>
            <a href="https://twitter.com/manaus_t" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="https://github.com/manatran" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/manaustransez/" target="_blank" rel="noopener noreferrer">
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

export default Sidebar;
