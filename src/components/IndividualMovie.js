import NavBar from './NavBar'

function IndividualMovie() {

    /*
    const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=f9a1ac0ab4f944bb3c103d5dc0e9fc4d&language=en-US&page=1';
    const IMGPATH = "https://image.tmdb.org/t/p/w1280"

    const [ ?, set?] = useState([])

    useEffect(() => {

        const movieElements = fetch(url)
        .then(response => response.json())
        .then(response => set?(response.results))
    }, [])
    */
    
    return(
        <div>
            <NavBar/>
            <header role='TitleHeading'>Movie Title</header>
            <article>
                <p>Overview/Description</p>
                <p>Popularity</p>
                <p>Genre</p>
                <p>Year Produced</p>
                <p>Revenue</p>
                <p>Run Time</p>
                <ul>Cast (Top 5)</ul>
            </article>
            <button>Add to WatchList</button>
        </div>
    )
}

export default IndividualMovie;