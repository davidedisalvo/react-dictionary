import React, { Component, useState, useContext } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { FaSearch } from "react-icons/fa";
import style from "./TheForm.module.scss";

import WordContext from "./WordsContext";

class TheForm extends Component {
  static contextType = WordContext;

  state = {
    word: "",
  };

  changeHandler = (e) => {
    e.preventDefault();
    const el = e.target.value;

    this.setState({
      word: el,
    });
  };

  sumbitHandler = (event) => {
    event.preventDefault();
    axios
      .get(
        `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${this.state.word}?key=cf310e0b-2f29-4ff6-b703-ca6088c4dc2b`
      )
      .then((res) => {
        const {
          definition,
          setDefinition,
          firstLoad,
          setFirstLoad,
        } = this.context;
        const payload = {
          word: "",
          definition: {},
        };
        payload.word = this.state.word;
        payload.definition = res;

        setDefinition(payload);
        setFirstLoad();
      });
  };
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Form onSubmit={this.sumbitHandler}>
                <InputGroup>
                  <Form.Control
                    type="text"
                    name="word"
                    value={this.state.word}
                    onChange={this.changeHandler}
                    placeholder="Type your word"
                  />
                  <InputGroup.Append>
                    <Button
                      variant="info"
                      type="submit"
                      className={style.btnInfo}
                    >
                      <FaSearch color="white"></FaSearch>
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default TheForm;
