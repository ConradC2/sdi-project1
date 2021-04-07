import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';


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

    </div>
    </Router>
  );
}

export default App;



