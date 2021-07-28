import React from 'react';
import resume from '../images/resume.pdf'

export default function Resume() {
  return (
    <div>
    
      <h1>Resume </h1>
      <a href={resume} download>Click to download</a>
      <p>
      <ul>
        <p>Front End</p>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>React</li>
          <hr></hr>
          <p>Back End</p>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>GraphQL</li>
          
        </ul>
      </p>
    </div>
  );
}
