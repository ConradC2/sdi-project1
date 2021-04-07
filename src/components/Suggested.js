import { useEffect, useState } from "react";


function Suggested() {

    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=f9a1ac0ab4f944bb3c103d5dc0e9fc4d&language=en-US&page=1';
    const IMGPATH = "https://image.tmdb.org/t/p/w1280"

    const [ suggested, setSuggested] = useState([])

    useEffect(() => {

        const movieElements = fetch(url)
        .then(response => response.json())
        .then(response => setSuggested(response.results)) 
    })

    return (
        <section role='suggestedGrid'>
            <h2>Suggested</h2>

            {suggested.map((movie) => {
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

export default Suggested;