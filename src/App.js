import './App.css';
import Home from './components/Home';
import About from './components/About';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import IndividualMovie from './components/IndividualMovie';

import SelectedMovieContext from './components/SelectedMovieContext';
import { useState } from 'react';


function App() {
  const [ selectedMovie, updateSelectedMovie ] = useState({});
  const selected = { selectedMovie, updateSelectedMovie };
  return (
    <Router>
      <SelectedMovieContext.Provider value={selected}>
        <div className="App">
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route  path="/individualmovie">
          <IndividualMovie />
        </Route>
        </div>
      </SelectedMovieContext.Provider>
    </Router>
  );
}

export default App;



