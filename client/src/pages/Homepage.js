import React, { Component } from "react";
import LoginHeader from "./../components/headers/LoginHeader";
import SmallHeader from "./../components/headers/SmallHeader";
import PopularSubmissions from "./../components/submissions/PopularSubmissions";
import Sidebar from "./../components/sidebar";
import Question from "./../components/questions/";
import Spinner from "./../components/spinner";

class Homepage extends Component {
  render() {
    return (
      <div>
        <LoginHeader />
        <div className="body">
          <Sidebar />
          <main>
            <SmallHeader />
            <PopularSubmissions />
            <section className="questions" style={{ marginTop: "32px" }}>
              <h2>Popular questions</h2>
              <Question
                title="How do I redirect to another webpage?"
                thumbnail="https://cdn.auth0.com/blog/vuejs/vue-logo.png"
                category="Vue.js"
                tag="Good question"
                author="manaus_t"
                likes="800"
                comments="300"
              />
              <Question
                title="How do I redirect to another webpage?"
                thumbnail="https://cdn.auth0.com/blog/vuejs/vue-logo.png"
                category="Vue.js"
                tag="Good question"
                author="manaus_t"
                likes="800"
                comments="300"
              />
              <Question
                title="How do I redirect to another webpage?"
                thumbnail="https://cdn.auth0.com/blog/vuejs/vue-logo.png"
                category="Vue.js"
                tag="Good question"
                author="manaus_t"
                likes="800"
                comments="300"
              />
              <Question
                title="How do I redirect to another webpage?"
                thumbnail="https://cdn.auth0.com/blog/vuejs/vue-logo.png"
                category="Vue.js"
                tag="Good question"
                author="manaus_t"
                likes="800"
                comments="300"
              />
              <Question
                title="How do I redirect to another webpage?"
                thumbnail="https://cdn.auth0.com/blog/vuejs/vue-logo.png"
                category="Vue.js"
                tag="Good question"
                author="manaus_t"
                likes="800"
                comments="300"
              />
              <Question
                title="How do I redirect to another webpage?"
                thumbnail="https://cdn.auth0.com/blog/vuejs/vue-logo.png"
                category="Vue.js"
                tag="Good question"
                author="manaus_t"
                likes="800"
                comments="300"
              />
              <Question
                title="How do I redirect to another webpage?"
                thumbnail="https://cdn.auth0.com/blog/vuejs/vue-logo.png"
                category="Vue.js"
                tag="Good question"
                author="manaus_t"
                likes="800"
                comments="300"
              />
              <Question
                title="How do I redirect to another webpage?"
                thumbnail="https://cdn.auth0.com/blog/vuejs/vue-logo.png"
                category="Vue.js"
                tag="Good question"
                author="manaus_t"
                likes="800"
                comments="300"
              />
              <Question
                title="How do I redirect to another webpage?"
                thumbnail="https://cdn.auth0.com/blog/vuejs/vue-logo.png"
                category="Vue.js"
                tag="Good question"
                author="manaus_t"
                likes="800"
                comments="300"
              />
              <Question
                title="How do I redirect to another webpage?"
                thumbnail="https://cdn.auth0.com/blog/vuejs/vue-logo.png"
                category="Vue.js"
                tag="Good question"
                author="manaus_t"
                likes="800"
                comments="300"
              />
              <Question
                title="How do I redirect to another webpage?"
                thumbnail="https://cdn.auth0.com/blog/vuejs/vue-logo.png"
                category="Vue.js"
                tag="Good question"
                author="manaus_t"
                likes="800"
                comments="300"
              />
              <Question
                title="How do I redirect to another webpage?"
                thumbnail="https://cdn.auth0.com/blog/vuejs/vue-logo.png"
                category="Vue.js"
                tag="Good question"
                author="manaus_t"
                likes="800"
                comments="300"
              />
              {false ? (
                <div
                  className="spinner-container"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "16px"
                  }}
                >
                  <Spinner size="24" />
                </div>
              ) : (
                <div
                  className="scroll-top"
                  style={{ textAlign: "center", marginTop: "16px" }}
                >
                  <p className="light" style={{ margin: "0" }}>
                    That's it, no more posts! You could always create more if
                    you want.
                  </p>
                  <p
                    className="light"
                    style={{
                      cursor: "pointer",
                      margin: "0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "8px",
                      color: "#666",
                      userSelect: "none"
                    }}
                    onClick={() => {
                      window.scroll({ top: 0, left: 0, behavior: "smooth" });
                    }}
                  >
                    Back to top
                    <i
                      className="material-icons"
                      style={{
                        transform: "rotate(-90deg)",
                        fontSize: "14px",
                        marginLeft: "8px"
                      }}
                    >
                      subdirectory_arrow_right
                    </i>
                  </p>
                </div>
              )}
            </section>
          </main>
        </div>
      </div>
    );
  }
}

export default Homepage;
