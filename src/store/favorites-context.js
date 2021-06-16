import { createContext , useState} from 'react';

const FavroitesContext = createContext({
    favroites: [],
    totalFavroites:0,
    addFavroite :(favroiteMeetup) =>{},
    removeFavroite :(meetupId) =>{},
    itemIsFavroite : (meetupId) =>{}

});

export function FavroitesContextProvider(props) {
   const [userFavroites,setUserFavroites] = useState([]);

    function addFavroiteHandler(favroiteMeetup) {
        setUserFavroites((prevUserFavroites) =>{
            return prevUserFavroites.concat(favroiteMeetup);
        });
    }

    function removeFavroiteHandler(meetupId) {
        setUserFavroites(prevUserFavroites => {
            return prevUserFavroites.filter(meetup => meetup.id !==meetupId);
        });
    }

    function itemIsFavroiteHandler(meetupId) {
        return userFavroites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favroites : userFavroites,
        totalFavroites : userFavroites.length,
        addFavroite : addFavroiteHandler,
        removeFavroite : removeFavroiteHandler,
        itemIsFavroite : itemIsFavroiteHandler,

    };

    return <FavroitesContext.Provider value={context}>
        {props.children}
    </FavroitesContext.Provider>
}

export default FavroitesContext;