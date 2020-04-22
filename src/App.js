import React from 'react';
import './App.css';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header /> 
      <section>
        <h1>Hi I'm Jonathan</h1>
        <h2>A Friendly Full-Stack Developer</h2>
      </section>
      <section>
        <h1 className="time">Projects</h1>
        <img src="https://i.imgur.com/DY8ndyzm.png" />
        <img src="https://i.imgur.com/4Y19dpcm.png" />
        <img src="https://i.imgur.com/vU84Lmqm.png" />
      </section>
      <section>
        <h1>About Me</h1>
      </section>
      <section>
        <h1>Contact Me</h1>
      </section>
      
    </div>
  );
}

export default App;
