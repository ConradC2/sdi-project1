import NavBar from './NavBar';
import {useHistory} from "react-router-dom";
import SearchBar from './SearchBar';


function SearchResults() {

    const IMGPATH = "https://image.tmdb.org/t/p/w1280"
    const history = useHistory();
    const searchResults = [];

    return (

        <div>
            <NavBar />
            <SearchBar />
            <section role='searchResultsGrid'>
                <h2>Search Results</h2>
                {searchResults.map((movie) => {
                    return (
                        <div>
                            <h3>{movie.title}</h3>
                            <img src={`${IMGPATH}/${movie.poster_path}`} onClick={() => {history.push('/individualmovie')}} />
                        </div>
                    )
                })}
            </section>
        </div>

    )

}

export default SearchResults;