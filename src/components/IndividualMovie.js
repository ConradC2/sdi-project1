import NavBar from './NavBar';
import {useEffect, useState, useContext} from 'react';
import SelectedMovieContext from './SelectedMovieContext';


function IndividualMovie() {

    const selected = useContext (SelectedMovieContext);
    const movie_id = selected.selectedMovie.id

    const IMGPATH = "https://image.tmdb.org/t/p/w1280"
   const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=f9a1ac0ab4f944bb3c103d5dc0e9fc4d&language=en-US`;
   

    const [currentDetails, updateDetails] = useState ({})

    useEffect(() => {

        const movieElements = fetch(url)
        .then(response => response.json())
        .then(response => updateDetails(response))
    }, [])



    return(
        <div>
            <NavBar/>            
            <header role='TitleHeading'><h2>{currentDetails.title}</h2></header>
            <img src={`${IMGPATH}/${currentDetails.poster_path}`} alt="movie poster" style={{'maxHeight': '200px'}}/>
            <article>
                <p>{currentDetails.overview}</p>
                <h3>popularity</h3>
                <p>{currentDetails.popularity}</p>
                <h3>genre</h3>
                <p>{currentDetails.genres === undefined ? 'loading...' : currentDetails.genres.map(genre => `${genre.name} `)}</p>
                <h3>release Date:</h3>
                <p>{currentDetails.release_date}</p>
                <h3>revenue</h3>
                <p>${currentDetails.revenue}</p>
                <h3>runtime</h3>
                <p>{currentDetails.runtime} mins</p>
            </article>
            <button>Add to WatchList</button>
        </div>
    )
}

export default IndividualMovie;