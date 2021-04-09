import NavBar from './NavBar';
import SearchBar from './SearchBar';
import TopRated from './TopRated';
import Suggested from './Suggested';
import Footer from './Footer';
import styles from '../css/Home.module.css';

const Home = ({search, watch}) => {
  
  return (
    <div>
        <header className="App-header">
            <NavBar/>
        </header>
        <main className={styles.mainBody}>
            <SearchBar search={search}/>
            <TopRated watch={watch} />
            <Suggested watch={watch}/>
        </main>
        <Footer/>
    </div>
  )
}


export default Home;
