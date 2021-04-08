import Navbar from './NavBar';
import Footer from './Footer';
import SearchBar from './SearchBar';
import { useState } from 'react';
import MovieCard from './MovieCard';


function WatchList()  {


    let usersWatchList = [];
    const [watchList, addWatchList] = useState({});

    return (
        <div>
            <Navbar />
            <SearchBar />
                <h1>My Watch List</h1>
                <MovieCard title= {watchList.title} photo={watchList.poster_path} movieId={watchList.id}/>
            <Footer />

         </div>
        )

};



export default WatchList;