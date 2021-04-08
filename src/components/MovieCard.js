import React, { useContext } from 'react';
import {useHistory} from "react-router-dom";
import SelectedMovieContext from './SelectedMovieContext';

function MovieCard ({title, photo, movieId}){

    const IMGPATH = "https://image.tmdb.org/t/p/w1280"
    const history = useHistory();
    const {selectedMovie, updateSelectedMovie}= useContext (SelectedMovieContext);
    return (
        <div>
            <h3>{title}</h3>
            <img src={`${IMGPATH}/${photo}`} alt="movie poster" style={{'maxHeight': '200px'}} onClick={() => {
              history.push(`/individualmovie/${title}`)
              updateSelectedMovie({movieTitle: title, id: movieId });
            }} />
        </div>
    )

}
export default MovieCard; 