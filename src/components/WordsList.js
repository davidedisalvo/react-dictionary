import React, { Component } from "react";
import SingleWord from "./SingleWord";
import WordContext from "./WordsContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

class WordsList extends Component {
  static contextType = WordContext;
  handleDelete = (index) => {
    const {
      definition,
      setDefinition,
      saveWord,
      deleteSavedWord,
    } = this.context;
    deleteSavedWord(index);
  };
  render() {
    const value = this.context;
    return (
      <Container>
        {value.favourite.length !== 0 ? (
          <Row>
            <Col>
              <div>
                {value.favourite
                  ? value.favourite.map((item, index) => (
                      <SingleWord
                        title={item.title}
                        index={index}
                        definition={item.definition}
                        delete={this.handleDelete}
                      ></SingleWord>
                    ))
                  : ""}
              </div>
            </Col>
          </Row>
        ) : (
          <Col>
            <Alert variant="danger">
              You don't have any favourite word yet
            </Alert>
          </Col>
        )}
      </Container>
    );
  }
}

export default WordsList;
