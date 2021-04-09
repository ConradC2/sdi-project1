import { Link } from 'react-router-dom';
import styles from '../css/NavBar.module.css';

function NavBar() {

    return(
        <div className={styles.navBarHeader}>
         <h1 className={styles.h1}>Watch This</h1>
         <nav className={styles.nav}>
          <ul>
           <li>
               <Link to="/">Home</Link>
            </li>
           <li>
               <Link to ="/watchlist">Watch List</Link> 
            </li>
           <li>
               <Link to ="/about">About</Link>
            </li> 
          </ul>
         </nav>
        </div>
    )
};

export default NavBar;