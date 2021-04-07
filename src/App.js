import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar/>
       <SearchBar />
      </header>
    </div>
  );
}

export default App;


