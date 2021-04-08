import Navbar from './NavBar';
import Footer from './Footer';
import SearchBar from './SearchBar';
import { useState } from 'react';
import MovieCard from './MovieCard';


function WatchList({watch})  {
    console.log(watch.watchList);
    return (
        <div>
            <Navbar />
                <h1>My Watch List</h1>
                {watch.watchList === undefined ? <h5>loading...</h5> : watch.watchList.map(movie => {
                return (
                    <MovieCard title= {movie.title} photo={movie.poster_path} movieId={movie.id}/>
                )})}
            <Footer />

         </div>
        )

};




export default WatchList;