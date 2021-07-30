import React from 'react';
import resume from '../images/resume.pdf'


export default function Resume() {
  return (
    <div>
    
      <h1>Resume </h1>
      <a href={resume} download>Download Resume</a>

      <p>

      <ul>
        <p><strong>Front End</strong></p>
        
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>React</li>
          <hr></hr>
          <p><strong>Back End</strong></p>
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
