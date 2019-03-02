import React, { Component } from 'react';
import './App.css';
import LoginHeader from './components/headers/LoginHeader';
import SmallHeader from './components/headers/SmallHeader';
import PopularSubmissions from './components/submissions/PopularSubmissions';
import Question from './components/questions/';
import Navigation from './components/navigation';
import Sidebar from './components/sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <LoginHeader />
        <div className="body">
          <Sidebar />
          <main>
            <SmallHeader />
            <PopularSubmissions />
            <section className="questions" style={{marginTop: '32px'}}>
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
            </section>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
