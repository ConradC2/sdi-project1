import NavBar from './NavBar';
import {useEffect, useState, useContext} from 'react';


function IndividualMovie() {

    
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
            <header role='TitleHeading'>Movie Title</header>
            <article>
                <p>Overview/Description</p>
                <p>Popularity</p>
                <p>Genre</p>
                <p>Year Produced</p>
                <p>Revenue</p>
                <p>Run Time</p>
                <ul>Cast (Top 5)</ul>
            </article>
            <button>Add to WatchList</button>
        </div>
    )
}

export default IndividualMovie;