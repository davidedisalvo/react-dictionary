import React from 'react';
import logo from './logo.svg';
import './App.scss';
import './global.scss';
import './variable.scss';
import TheNav from './components/TheNav'
import Home from './pages/Home'
import Words from './pages/Words'
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import { WordProvider } from './components/WordsContext'


function App() {
  return (
    <Router>
                <WordProvider>

      <div className="App">
        <TheNav></TheNav>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/words" component={Words} />

        </Switch>
      </div>
                </WordProvider>

    </Router>
  );
}

export default App;
