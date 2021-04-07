import { useEffect, useState } from "react";

function TopRated() {

    const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=f9a1ac0ab4f944bb3c103d5dc0e9fc4d&language=en-US&page=1';
    const IMGPATH = "https://image.tmdb.org/t/p/w1280"

    const [ topRated, setTopRated] = useState([])

    useEffect(() => {

        const movieElements = fetch(url)
        .then(response => response.json())
        .then(response => setTopRated(response.results)) 
    })
    
    return (
        <section role='ratedGrid'>
            <h2>Top Rated</h2>
            {topRated.map((movie) => {
                return (
                    <div>
                        <h3>{movie.title}</h3>
                        <img src={`${IMGPATH}/${movie.poster_path}`} />
                    </div>
                )
            })}
        </section>
    )
}

export default TopRated;