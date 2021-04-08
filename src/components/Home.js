import NavBar from './NavBar';
import SearchBar from './SearchBar';
import TopRated from './TopRated';
import Suggested from './Suggested';
import Footer from './Footer';

const Home = ({search, watch}) => {
  
  return (
    <div>
        <header className="App-header">
            <NavBar/>
        </header>
        <main>
            <SearchBar search={search}/>
            <TopRated watch={watch} />
            <Suggested watch={watch}/>
        </main>
        <Footer/>
    </div>
  )
}


export default Home;
