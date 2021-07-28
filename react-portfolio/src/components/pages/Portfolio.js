import React from 'react';
import {Row, Card,ListGroup, ListGroupItem} from "react-bootstrap"
import eye from '../images/eye.jpg';
import again from '../images/again.png';

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
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={again} />
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
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
  </Row>
  <Row>
            <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={eye} />
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
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={again} />
        <Card.Body>
          <Card.Title>Weather Dashboard</Card.Title>
          <Card.Text>
          An weather tracking application that allowas users to get 5 day forcast based on city.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Made with:</ListGroupItem>
          <ListGroupItem>JavaScript</ListGroupItem>
          <ListGroupItem>API</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
  </Row>
    </div>
  );
}
