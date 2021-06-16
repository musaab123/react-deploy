import { useContext } from 'react';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import FavroitesContext from '../../store/favorites-context';

function MeetupItem(props) {
    const favroiteCtx = useContext(FavroitesContext);

    const itemIsFavroite = favroiteCtx.itemIsFavroite(props.id);


    function toggleFavoriteStatusHandler() {
        if (itemIsFavroite) {
            favroiteCtx.removeFavroite(props.id);
        }else{
            favroiteCtx.addFavroite({
                id:props.id,
                title:props.title,
                description:props.description,
                image:props.image,
                address: props.address,

            });
        }
    }
    return(
        <li className={classes.item}>
            <Card>
            <div className={classes.image}>
                <img src ={props.image} alt={props.title} />
            </div>

            <div className ={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>

            <div className={classes.content}>
                <button onClick={toggleFavoriteStatusHandler}>
                    {itemIsFavroite ? 'Remove From Favorites' : 'To Favorites'}
                </button>
            </div>
            </Card>
        </li>
    );
}

export default MeetupItem;
