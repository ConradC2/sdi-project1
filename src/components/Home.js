import NavBar from './NavBar';
import SearchBar from './SearchBar';
import TopRated from './TopRated';
import Suggested from './Suggested';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
        <header className="App-header">
            <NavBar/>
        </header>
        <main> 
            <SearchBar />
            <TopRated />
            <Suggested />
        </main>
        <Footer/>
    </div>
  )
}


export default Home;
