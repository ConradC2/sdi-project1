import NavBar from './NavBar';
import SearchBar from './SearchBar';
import MovieCard from './MovieCard';
import styles from '../css/SearchResults.module.css';
import Footer from './Footer';


function SearchResults({search}) {

    return (

        <div>
            <NavBar />
            <SearchBar search={search}/>
            <section role='searchResultsGrid'className={styles.searchresults}>
                <h2 className={styles.heading}>Search Results</h2>
                {search.searchResults.map((movie) => {
                    return (
                        <MovieCard title= {movie.title} photo={movie.poster_path} movieId={movie.id} />
                    )
                })}
            </section>
            <Footer />
        </div>

    )

}

export default SearchResults;