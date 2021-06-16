import { useContext } from 'react';
import{Link} from 'react-router-dom';
import classes from './MainNavgation.module.css'
import FavroitesContext from '../../store/favorites-context';

function MainNavigation() {
    const favoritesCtx = useContext(FavroitesContext);
    return(

        <header className={classes.header}>
            <div className={classes.logo}>Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>New Meetups</Link>
                    </li>
                    <li>
                        <Link to='/favroite'>
                           My Favroites
                           <span className={classes.badge}>{favoritesCtx.totalFavroites}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default MainNavigation; 