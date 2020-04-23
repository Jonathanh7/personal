import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <header>
        <ul>
          <a href="#projects"><li>Projects</li></a>
         <a href="#about"><li>About Me</li></a>
         <a href="#contact"><li>Contact</li></a>
        </ul>
    </header>
    )
  }
}
