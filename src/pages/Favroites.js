import {useContext} from 'react';
import FavroitesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {

    const favoritesCtx = useContext(FavroitesContext);

    let content;

    if (favoritesCtx.totalFavroites === 0) {

        content = <h2>you have'n favorite yet, Try to add some?</h2>
    }else{
        content = <MeetupList meetups={favoritesCtx.favroites}/>

    }

    return( 
    <section>
        <h1>My favorites</h1>
        {content}
    </section>
    );
}

export default FavoritesPage;