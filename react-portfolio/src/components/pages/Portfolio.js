import React from 'react';
import {Row, Card,ListGroup, ListGroupItem} from "react-bootstrap"
import eye from '../images/eye.jpg';
import again from '../images/again.png';
import { FaGithubAlt } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div>
      
    <Row>
            <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={eye} />
        <Card.Body>
          <Card.Title>ViBlocks</Card.Title>
          <Card.Text>
          Full stack application. A digital audio workstation that allows users to create music using a step sequencer model. 
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Made with:</ListGroupItem>
          <ListGroupItem>JavaScript</ListGroupItem>
          <ListGroupItem>ExpressJS</ListGroupItem>
          <ListGroupItem>MySQL</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="https://github.com/ForestW70/viBlocks"><FaGithubAlt/></Card.Link>
          <Card.Link href="https://viblocks.herokuapp.com/login"><FaLaptop/></Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={eye} />
        <Card.Body>
        <Card.Title>CryptoCurrently</Card.Title>
          <Card.Text>
          Full stack application. A digital audio workstation that allows users to create music using a step sequencer model. 
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Made with:</ListGroupItem>
          <ListGroupItem>JavaScript</ListGroupItem>
          <ListGroupItem>API</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="https://github.com/mjguerrero/cryptocurrently"><FaGithubAlt/></Card.Link>
          <Card.Link href="https://mjguerrero.github.io/cryptocurrently/"><FaLaptop/></Card.Link>
        </Card.Body>
      </Card>
  </Row>
  <Row>
            <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={again} />
        <Card.Body>
          <Card.Title>Workout Tracker</Card.Title>
          <Card.Text>
          A workout tracking app that allows users to to create, track, and view daily workouts.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Made with:</ListGroupItem>
          <ListGroupItem>JavaScript</ListGroupItem>
          <ListGroupItem>ExpressJS</ListGroupItem>
          <ListGroupItem>MongoDB</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="https://github.com/fasicasr/workout-tracker"><FaGithubAlt/></Card.Link>
          <Card.Link href="https://fsr-workout-tracker.herokuapp.com/?id=60e081c9c1f1a60015e38374"><FaLaptop/></Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={again} />
        <Card.Body>
          <Card.Title>Weather Dashboard</Card.Title>
          <Card.Text>
          An weather tracking <FaLaptop/>lication that allowas users to get 5 day forcast based on city.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Made with:</ListGroupItem>
          <ListGroupItem>JavaScript</ListGroupItem>
          <ListGroupItem>API</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="https://github.com/fasicasr/weather-dashboard"><FaGithubAlt/></Card.Link>
          <Card.Link href="https://fasicasr.github.io/weather-dashboard/index.html"><FaLaptop/></Card.Link>
        </Card.Body>
      </Card>
  </Row>
    </div>
  );
}
