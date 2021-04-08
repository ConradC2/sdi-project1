import NavBar from './NavBar';
import SearchBar from './SearchBar';
import MovieCard from './MovieCard';


function SearchResults({search}) {

    return (

        <div>
            <NavBar />
            <SearchBar search={search}/>
            <section role='searchResultsGrid'>
                <h2>Search Results</h2>
                {search.searchResults.map((movie) => {
                    return (
                        <MovieCard title= {movie.title} photo={movie.poster_path} movieId={movie.id} />
                    )
                })}
            </section>
        </div>

    )

}

export default SearchResults;