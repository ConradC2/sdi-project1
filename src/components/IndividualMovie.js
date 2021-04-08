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
            <img src={`${IMGPATH}/${photo}`}/>
            <article>
                <p>{currentDetails.overview}</p>
                <p>{currentDetails.popularity}</p>
                <p>{currentDetails.genres === undefined ? 'loading...' : currentDetails.genres.map(genre => `${genre.name} `)}</p>
                <p>{currentDetails.release_date}</p>
                <p>{currentDetails.revenue}</p>
                <p>{currentDetails.runtime}</p>
                <ul>Cast (Top 5)</ul>
            </article>
            <button>Add to WatchList</button>
        </div>
    )
}

export default IndividualMovie;