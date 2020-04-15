import React, { Component } from "react";
import WordContext from "./WordsContext";
import RandomWord from "./RandomWord";
import style from "./SingleDefinition.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaHeart } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import axios from "axios";
import dayjs from "dayjs";
import Spinner from "react-bootstrap/Spinner";

class SingleDefinition extends Component {
  static contextType = WordContext;

  state = {
    word: "",
    clicked: false,
    date: undefined,
    random: undefined,
    showTitleOfTheDay: true,
  };

  componentDidMount() {
    const { definition, setDefinition } = this.context;
    const randomWords = require("random-words");
    let randomWord;
    const date = dayjs().format("DD MMMM YYYY");

    if (definition.word === undefined) {
      if (localStorage.getItem("today")) {
        if (date === localStorage.getItem("today")) {
          console.log("data di oggi");
          randomWord = localStorage.getItem("word");
        } else {
          console.log("data di domani");

          randomWord = randomWords();
          localStorage.setItem("word", randomWord);
          localStorage.setItem("today", date);
        }
      } else {
        randomWord = randomWords();
        localStorage.setItem("today", date);
        localStorage.setItem("word", randomWord);
      }

      axios
        .get(
          `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${randomWord}?key=cf310e0b-2f29-4ff6-b703-ca6088c4dc2b`
        )
        .then((res) => {
          const { definition, setDefinition } = this.context;
          const payload = {
            word: "",
            definition: {},
          };
          payload.word = randomWord;
          payload.definition = res;
          setDefinition(payload);
        });
    }
  }

  saveWord(el) {
    const {
      definition,
      setDefinition,
      saveWord,
      filterSavedWord,
      favourite,
    } = this.context;
    let thedefinition = [];
    let fav = {};

    if (favourite.length !== 0) {
      favourite.forEach((el) => {
        if (el.title !== definition.word) {
          if (definition.definition) {
            definition.definition.data.map((el) => {
              thedefinition.push(el);
            });
          }
          fav.title = definition.word;
          fav.definition = thedefinition;
          saveWord(fav);
        } else {
          if (definition.definition) {
            fav.title = definition.word;
            fav.definition = thedefinition;
            filterSavedWord(fav);
          }
        }
      });
    } else {
      if (definition.definition) {
        definition.definition.data.map((el) => {
          thedefinition.push(el);
        });
      }
      fav.title = definition.word;
      fav.definition = thedefinition;
      saveWord(fav);
    }
  }

  handleCheckSuggested(e) {
    const value = e.target.innerText;
    axios
      .get(
        `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${value}?key=cf310e0b-2f29-4ff6-b703-ca6088c4dc2b`
      )
      .then((res) => {
        const { definition, setDefinition } = this.context;
        const payload = {
          word: "",
          definition: {},
        };
        payload.word = value;
        payload.definition = res;
        setDefinition(payload);
      });
  }

  render() {
    const value = this.context;
    let definitionToRender = [];
    let word = "";
    let saveWord = <IoIosHeartEmpty onClick={() => this.saveWord()} />;

    if (value.definition.definition && value.definition.word) {
      const index = value.favourite.findIndex(
        (e) => e.title === value.definition.word
      );

      if (index === -1) {
        saveWord = <IoIosHeartEmpty onClick={() => this.saveWord()} />;
        word = value.definition.word;
      } else {
        saveWord = (
          <FaHeart color="red" onClick={() => this.saveWord()}></FaHeart>
        );
      }
      word = value.definition.word;

      value.definition.definition.data.map((el) => {
        definitionToRender.push(el);
      });
    }

    const condition = definitionToRender.every((el) => typeof el === "object");

    if (definitionToRender.length !== 0) {
      //if user type
      if (condition) {
        //if typed word exist
        return (
          <Container className={style.generalDefinition} className="mt-5">
            <Row>
              <Col>
                {value.firstLoad === true ? (
                  <h1 className={style.titleTheDay}>Word of the day</h1>
                ) : null}

                <div className={`${style.header} mb-5`}>
                  <h2 className="text-center">{word}</h2>
                  {saveWord}
                </div>
                {definitionToRender.map((el, index) => {
                  return (
                    <div className={style.singleDefinition} className="mb-3">
                      <h3>{el.fl}</h3>
                      <p>
                        <span>DEFINITION: </span>
                        {el.shortdef.join(", ")}
                      </p>
                      <hr />
                    </div>
                  );
                })}
              </Col>
            </Row>
          </Container>
        );
      } else {
        //if typed word doesn t exist and i have suggestion

        return (
          <Container>
            <Row>
              <Col>
                <p className="mt-5">
                  We can't find{" "}
                  <span style={{ fontWeight: "bold" }}>{word}</span>.
                </p>
                <p>
                  {" "}
                  Did you mean:{" "}
                  {definitionToRender.map((el) => {
                    return (
                      <span
                        className={style.suggestion}
                        onClick={this.handleCheckSuggested.bind(this)}
                      >{`${el}  `}</span>
                    );
                  })}
                </p>
              </Col>
            </Row>
          </Container>
        );
      }
    } else {
      if (word !== "") {
        return (
          <Container>
            <Row>
              <Col>
                <p className="mt-5">
                  We Can't find{" "}
                  <span style={{ fontWeight: "bold" }}>{word}</span>. Please try
                  with a different word
                </p>
              </Col>
            </Row>
          </Container>
        );
      } else {
        return (
          <Container>
            <Row>
              <Col xs={{ span: 2, offset: 5 }}>
                <Spinner
                  animation="border"
                  role="status"
                  className={`${style.center}, mt-5`}
                >
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </Col>
            </Row>
          </Container>
        );
      }
    }
  }
}

export default SingleDefinition;
