import React from 'react';
import mypic from '../images/mypic.png';

import {Card} from "react-bootstrap"

export default function AboutMe() {
  return (
    <div >
      <h1>Fasica Robi</h1>
      <Card style={{ width: '10rem'}}>
        <Card.Img variant="top" src={mypic} />
        
      </Card>
      <span className="about"></span>
      <p>
      My background is in education management but after discovering my passion for web development, I couldn’t get enough. I joined the George Washington University Coding Bootcamp to build/strengthen my knowledge through hands-on learning. I’m looking forward to a bright future as a coder.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  );
}
