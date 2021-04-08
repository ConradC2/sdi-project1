import { useEffect, useState } from "react";
import MovieCard from './MovieCard';

function TopRated() {

    const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=f9a1ac0ab4f944bb3c103d5dc0e9fc4d&language=en-US&page=1';


    const [ topRated, setTopRated] = useState([])

    useEffect(() => {

        const movieElements = fetch(url)
        .then(response => response.json())
        .then(response => setTopRated(response.results)) 
    }, [])
    
    return (
        <section role='ratedGrid'>
            <h2>Top Rated</h2>
            {topRated.map((movie) => {
                return (
                    <MovieCard title= {movie.title} photo={movie.poster_path} movieId={movie.id}/>
                )
            })}
        </section>
    )
}

export default TopRated;