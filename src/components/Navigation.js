import React, { Component } from 'react';
import './Navigation.css';
import { Container, Row, Col } from 'react-bootstrap';

export default class Navigation extends Component
{
  render()
  {
    return(
      <div className="wrapper-navigation">
        <Container>
          <Row>
            <Col className="center">Register</Col>
            <Col className="center">Volunteer</Col>
            <Col className="center">Sponsor</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
