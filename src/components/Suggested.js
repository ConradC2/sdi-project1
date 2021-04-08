import { useEffect, useState } from "react";
import MovieCard from './MovieCard';





function Suggested() {

    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=f9a1ac0ab4f944bb3c103d5dc0e9fc4d&language=en-US&page=1';

    const [ suggested, setSuggested] = useState([])
    useEffect(() => {

        const movieElements = fetch(url)
        .then(response => response.json())
        .then(response => setSuggested(response.results)) 
    }, []) 

    return (
        <section role='suggestedGrid'>
            <h2>Suggested</h2>

            {suggested.map((movie) => {
                return (
                    <MovieCard title= {movie.title} photo={movie.poster_path} movieId={movie.id}/>
                )
            })}
        </section>
    )
}

export default Suggested;