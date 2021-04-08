import { useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";


function SearchBar() {
    
    const [searchInput, setSearchInput] = useState("");
    const [searchURL, setSearchURL] = useState("https://api.themoviedb.org/3/search/movie?api_key=f9a1ac0ab4f944bb3c103d5dc0e9fc4d&language=en-US&query=Spirited%20Away&page=1&include_adult=false")
    const history = useHistory();

    const onInputChange = event => {
        setSearchInput({title: event.target.value});
    };

    const onSearchSubmit = event => {
        const searchEncoded = encodeURIComponent(searchInput.title);
        setSearchURL(`https://api.themoviedb.org/3/search/movie?api_key=f9a1ac0ab4f944bb3c103d5dc0e9fc4d&language=en-US&query=${searchEncoded}&page=1&include_adult=false`);
        history.push('/searchresults')
    };
    
    useEffect(() => {
        const searchElements = fetch(searchURL)
        .then(response => response.json())
        .then(response => console.log(response.results))
    }, [searchURL])

    return (
        <div className="searchBar">
                <input type='text' placeholder='Search by Title'
                    //value={searchInput}
                    onChange={onInputChange}>
                </input>
                <button type='submit' onClick={onSearchSubmit}>Search</button>
        </div>
    )
}

export default SearchBar;


