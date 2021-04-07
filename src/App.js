import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar/>
      </header>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;


