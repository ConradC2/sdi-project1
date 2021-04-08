import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import IndividualMovie from './components/IndividualMovie';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <Router>
    <div className="App">
     <Route exact path="/">
       <Home />
     </Route>
     <Route exact path="/about">
       <About />
     </Route>
     <Route exact path="/individualmovie">
       <IndividualMovie />
     </Route>
     <Route exact path="/searchresults">
       <SearchResults />
     </Route>

    </div>
    </Router>
  );
}

export default App;



