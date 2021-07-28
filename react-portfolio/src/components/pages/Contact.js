import React from 'react';
import {Form, Card, Button, InputGroup,FormControl } from "react-bootstrap"

export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <Card style={{ width: "50%" }}>
        <Card.Header>What to know more?</Card.Header>
        <Card.Body>
        <InputGroup className="mb-3">
          <InputGroup.Text>First and last name</InputGroup.Text>
          <FormControl aria-label="First name" />
          <FormControl aria-label="Last name" />
        </InputGroup>
        <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message:</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          <Button variant="primary">Submit</Button>
        </Card.Body>
   </Card>

      
    </div>
  );
}


