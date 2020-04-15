// import React, { Component } from "react";
// import axios from "axios";
// import randomWords from "random-words";
// import WordContext from "./WordsContext";
// import style from "./SingleDefinition.module.scss";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// class RandomWord extends Component {
//   static contextType = WordContext;
//   callApi = () => {
//     const randomWords = require("random-words");
//     let randomWord = randomWords();
//     axios
//       .get(
//         `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${randomWord}?key=cf310e0b-2f29-4ff6-b703-ca6088c4dc2b`
//       )
//       .then((res) => {
//         const { definition, setDefinition } = this.context;
//         const payload = {
//           word: "",
//           definition: {},
//         };
//         payload.word = randomWord;
//         payload.definition = res;
//         setDefinition(payload);
//       });
//   };
//   componentDidMount() {
//     setInterval(this.callApi, 5000); // runs every 5 seconds.
//   }
//   render() {
//     const word = this.payload.word;
//     const definitionToRender = this.payload.definition;
//     return (
//       <Container className={style.generalDefinition} className="mt-5">
//         <Row>
//           <Col>
//             <div className={`${style.header} mb-5`}>
//               <h2 className="text-center">{word}</h2>
//               {saveWord}
//             </div>
//             {definitionToRender.map((el, index) => {
//               return (
//                 <div className={style.singleDefinition} className="mb-3">
//                   <h3>{el.fl}</h3>
//                   <p>
//                     <span>DEFINITION: </span>
//                     {el.shortdef.join(", ")}
//                   </p>
//                   <hr />
//                 </div>
//               );
//             })}
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

// export default RandomWord;
