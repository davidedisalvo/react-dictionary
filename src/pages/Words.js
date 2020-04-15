import React, { Component } from "react";
import WordsList from "../components/WordsList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Words extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>My Favourite words</h1>
            <WordsList></WordsList>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Words;
