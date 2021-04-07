import { Link } from 'react-router-dom';

function NavBar() {

    return(
        <div>
         <h1 className='navbar-header'>Watch This</h1>
         <nav>
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