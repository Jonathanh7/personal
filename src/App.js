import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Link, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const copied = () => {
    alert("Email Copied");
  };

  return (
    <div className="App">
      <Header />
      <section className="first">
        <h1 className=" name animated infinite bounce delay-2s">Hi I'm Jonathan</h1>
        <h2 className="follow">A Friendly Full-Stack Developer</h2>
      </section>

      <section id={"projects"}>
        <h1 className="time">Projects</h1>
        <div className="pics">
          <Link>
            <img
              className="wyze animated infinite pulse"
              onClick={() => {
                window.open("https://wyze-one.netlify.app/");
              }}
              src="https://i.imgur.com/DY8ndyzm.png"
            />
            <p>Wyze: an app full of advice.</p>
            <i
              onClick={() => {
                window.open("https://github.com/Jonathanh7/wyze-react");
              }}
              class="fab fa-github"
            ></i>
          </Link>

          <Link>
            <img
              className="wyze animated infinite pulse"
              onClick={() => {
                window.open("http://moonman.surge.sh/");
              }}
              src="https://i.imgur.com/4Y19dpcm.png"
            />
            <p>moonMen: Build your spaceship.</p>
            <i
              onClick={() => {
                window.open("https://github.com/rderosa1/moonMan_app");
              }}
              class="fab fa-github"
            ></i>
          </Link>

          <Link>
            <img
              className="wyze animated infinite pulse"
              onClick={() => {
                window.open("http://volcanic.surge.sh/");
              }}
              src="https://i.imgur.com/vU84Lmqm.png"
            />
            <p>Volcanic Escapades:</p>
            <p>A volcano hiking blog.</p>
            <i
              onClick={() => {
                window.open("https://github.com/Jonathanh7/Volcanoes");
              }}
              class="fab fa-github"
            ></i>
          </Link>
        </div>
      </section>

      <section id={"about"}>
        <h1>About Me</h1>
        <p className="info">
          I'm a Full-Stack Developer with a background in sales, who has a
          fervor for working on innovative ideas. As my prior experiences shows,
          obtaining results whilst bringing new ideas is a continuous interest
          of mine. Always happy to meet new people from all backgrounds as well
          as working in team environments.
        </p>
        <div className="icons">
          <i class="fab fa-js-square fa-2x animated infinite pulse"></i>
          <i class="fab fa-html5 fa-2x animated infinite pulse"></i>
          <i class="fab fa-css3 fa-2x animated infinite pulse"></i>
          <i class="fab fa-react fa-2x animated infinite pulse"></i>
          <i class="fas fa-gem fa-2x animated infinite pulse"></i>
          <i class="fab fa-npm fa-2x animated infinite pulse"></i>
        </div>
      </section>

      <section id={"contact"}>
        <h1>Contact Me</h1>
        <div className="ref">
          <i
            className="email fas fa-envelope-square"
              onClick={() => { navigator.clipboard.writeText('Jonathanh949@gmail.com').then(copied())}} 
          >
            Jonathanh949@gmail.com
          </i>
          <a href="https://www.linkedin.com/in/jonathan-hernandez-893194a4/">
            <i class="fab fa-linkedin fa-3x"></i>
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
