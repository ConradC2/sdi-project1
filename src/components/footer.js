import TMDB from '../images';

function Footer() {

    return (

        <footer>
            <div>
                <img src={TMDB} alt="TMBD Logo" />
                <a href='https://www.themoviedb.org/'>Link to The Movie Database Website</a>
            </div>
        </footer>

    )

}

export default Footer;