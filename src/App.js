import './App.css';
import Home from './components/Home';
import WatchList from './components/WatchList';
import About from './components/About';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import IndividualMovie from './components/IndividualMovie';
import SearchResults from './components/SearchResults';

import SelectedMovieContext from './components/SelectedMovieContext';
import { useState } from 'react';


function App() {
  const [ selectedMovie, updateSelectedMovie ] = useState({});
  const [ searchResults, setSearchResults ] = useState([]);
  const selected = { selectedMovie, updateSelectedMovie };
  const search = {searchResults, setSearchResults};

  return (
    <Router>
      <SelectedMovieContext.Provider value={selected}>
        <div className="App">
        <Route exact path="/">
          <Home search={search}/>
        </Route>
        <Route  path="/watchlist">
          <WatchList/>
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/individualmovie">
          <IndividualMovie />
        </Route>
        <Route path="/searchresults">
          <SearchResults search={search}/>
        </Route>
        </div>
      </SelectedMovieContext.Provider>
    </Router>
  );
}

export default App;



