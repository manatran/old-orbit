import React, { Component } from "react";
import "./ask.css";

class Guidelines extends Component {
  render() {
    return (
      <aside>
        <section className="guidelines">
          <h2>Guidelines</h2>
          {this.props.submit ? (
            <ol>
              <li>Original content only</li>
              <li>Be kind and respectful</li>
              <li>Keep an open mind</li>
            </ol>
          ) : (
            <ol>
              <li>Do your research</li>
              <li>Remember the human</li>
              <li>Keep an open mind</li>
            </ol>
          )}
        </section>
        <section className="markdown">
          <h2>Markdown</h2>
          <h4>Images</h4>
          <p>Use the following syntax to add an image:</p>

          <pre className="code prettyprint lang-js">
            <p>![I am image](https://url.png)</p>
          </pre>

          <p>
            We recommend{" "}
            <a
              href="https://imgur.com/upload"
              target="_blank"
              rel="noopener noreferrer"
            >
              Imgur
            </a>{" "}
            to upload your images to.
          </p>

          <h4>Codeblocks</h4>
          <p>A block of code can be created by using backticks ` or tildes ~</p>
          <p>
            A language identifier can be added to the first line to hightlight
            your code.
          </p>
          <pre className="code prettyprint lang-js">
            <p>```js</p>
            <p>const foo = "bar";</p>
            {/*  */}
            <p>```</p>
          </pre>
        </section>
      </aside>
    );
  }
}

export default Guidelines;
