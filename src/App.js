import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <h1>Hi I'm Jonathan</h1>
        <h2>A Friendly Full-Stack Developer</h2>
      </section>

      <section id={"projects"}>
        <h1 className="time">Projects</h1>
        <div className="pics">
          <Link className="wyze">
          <img
            onClick={() => {
              window.open("https://wyze-one.netlify.app/");
            }} 
            src="https://i.imgur.com/DY8ndyzm.png"
          />
          </Link>
          <Link className="wyze">
            <img
              onClick={() => {
                window.open("http://moonman.surge.sh/");
              }}
              src="https://i.imgur.com/4Y19dpcm.png"
            />
          </Link>
          
          <Link className="wyze">
            <img
               onClick={() => {
                window.open("http://volcanic.surge.sh/");
              }}
            src="https://i.imgur.com/vU84Lmqm.png"
          />
          </Link>
        </div>
      </section>

      <section id={"about"}>
        <h1>About Me</h1>
        <p></p>
        <img src="" />
      </section>

      <section id={"contact"}>
        <h1>Contact Me</h1>
      </section>
    </div>
  );
}

export default App;
