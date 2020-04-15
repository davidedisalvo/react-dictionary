import React, { Component } from "react";

const WordContext = React.createContext();

class WordProvider extends Component {
  // Context state
  state = {
    definition: {},
    favourite: [],
    firstLoad: true,
  };

  // Methods to update state
  setDefinition = (definition) => {
    console.log(definition);
    this.setState((prevState) => ({ definition }));
  };
  saveWord = (fav) => {
    let arr = [...this.state.favourite];
    const index = arr.findIndex((e) => e.title === fav.title);

    if (index === -1) {
      this.setState((prevState) => ({
        favourite: [...this.state.favourite, fav],
      }));
    }
  };

  filterSavedWord = (el) => {
    let arr = [...this.state.favourite];
    const result = arr.filter((data) => {
      return data.title !== el.title;
    });
    this.setState((prevState) => ({
      favourite: result,
    }));
  };

  deleteSavedWord = (index) => {
    let arr = [...this.state.favourite];
    if (index !== -1) {
      arr.splice(index, 1);
      this.setState({ favourite: arr });
    }
  };
  setFirstLoad = () => {
    this.setState({
      firstLoad: false,
    });
  };

  render() {
    const children = this.props.children;
    const definition = this.state.definition;
    const favourite = this.state.favourite;
    const firstLoad = this.state.firstLoad;
    const setDefinition = this.setDefinition;
    const saveWord = this.saveWord;
    const deleteSavedWord = this.deleteSavedWord;
    const filterSavedWord = this.filterSavedWord;
    const setFirstLoad = this.setFirstLoad;

    return (
      <WordContext.Provider
        value={{
          definition,
          favourite,
          setDefinition,
          saveWord,
          deleteSavedWord,
          filterSavedWord,
          firstLoad,
          setFirstLoad,
        }}
      >
        {children}
      </WordContext.Provider>
    );
  }
}

export default WordContext;

export { WordProvider };
