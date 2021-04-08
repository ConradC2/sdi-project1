import React from 'react';
import {useHistory} from "react-router-dom";

function MovieCard ({title, photo, movieId}){

    const IMGPATH = "https://image.tmdb.org/t/p/w1280"
    const history = useHistory();
    return (
        <div>
            <h3>{title}</h3>
            <img src={`${IMGPATH}/${photo}`} onClick={() => {history.push(`/individualmovie/${title}`)}} />
        </div>
    )

}
export default MovieCard; 