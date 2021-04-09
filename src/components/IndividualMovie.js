import NavBar from './NavBar';
import {useEffect, useState, useContext} from 'react';
import SelectedMovieContext from './SelectedMovieContext';
import Footer from './Footer';
import { useHistory } from 'react-router';
import styles from '../css/IndividualMovie.module.css';

function IndividualMovie({watch}) {
    console.log(watch);
    const selected = useContext (SelectedMovieContext);
    const movie_id = selected.selectedMovie.id;
    const history = useHistory();

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
            <h2 className={styles.indivMovieHeading}>{currentDetails.title}</h2>
            <section className={styles.indivMovieSection}>
                <img className={styles.indivMovieImg} src={`${IMGPATH}/${currentDetails.poster_path}`} alt="movie poster" />
                <article className={styles.contentSection}>
                    <p className={styles.movieContent}>
                        {currentDetails.overview}
                    </p>
                    <h3 className={styles.movieHeading}>
                        Popularity:
                    </h3>
                        <p className={styles.movieContent}>
                            {currentDetails.popularity}
                        </p>
                    <h3 className={styles.movieHeading}>
                        Genre:
                    </h3>
                        <p className={styles.movieContent}>
                            {currentDetails.genres === undefined ? 'loading...' : currentDetails.genres.map(genre => `${genre.name} `)}
                        </p>
                    <h3 className={styles.movieHeading}>
                        Release Date:
                    </h3>
                        <p className={styles.movieContent}>
                            {currentDetails.release_date}
                        </p>
                    <h3 className={styles.movieHeading}>
                        Revenue:
                    </h3>
                        <p className={styles.movieContent}>
                            ${currentDetails.revenue}
                        </p>
                    <h3 className={styles.movieHeading}>
                        Runtime:
                    </h3>
                    <p className={styles.movieContent}>
                        {currentDetails.runtime} mins
                    </p>
                </article>
            </section>
            <button className={styles.indivMovieButton} onClick={() => {watch.setWatchList([...watch.watchList, currentDetails]); alert(`Added ${currentDetails.title} to watchlist`)} }>Add to WatchList</button>
            <Footer/>
        </div>
    )
}

export default IndividualMovie;