import React, { useContext } from 'react';
import {useHistory} from "react-router-dom";
import SelectedMovieContext from './SelectedMovieContext';
import styles from '../css/MovieCard.module.css';

function MovieCard ({title, photo, movieId}){

    const IMGPATH = "https://image.tmdb.org/t/p/w1280"
    const history = useHistory();
    const {selectedMovie, updateSelectedMovie}= useContext (SelectedMovieContext);
    const {watch, addWatch}= useContext
    return (
        <div className={styles.moviecard}>
            <h3>{title}</h3>
            <img src={`${IMGPATH}/${photo}`} alt="movie poster" onClick={() => {
              history.push(`/individualmovie/${title}`)
              updateSelectedMovie({movieTitle: title, id: movieId });

            }} />
        </div>
    )

}
export default MovieCard; 