import Navbar from './NavBar';
import Footer from './Footer';
import SearchBar from './SearchBar';
import { useState } from 'react';
import MovieCard from './MovieCard';
import styles from '../css/Watchlist.module.css';


function WatchList({watch})  {
    
    return (
        <div>
            <Navbar />
                <section className={styles.watchList}>
                    <h1 className={styles.watchListHeading}>My Watch List</h1>
                    {watch.watchList === undefined ? <h5>loading...</h5> : watch.watchList.map(movie => {
                    return (
                        <MovieCard title= {movie.title} photo={movie.poster_path} movieId={movie.id}/>
                    )})}
                </section>
            <Footer />

         </div>
        )

};




export default WatchList;