import { useState , useEffect} from 'react';
import MeetupList from '../components/meetups/MeetupList';


function AllMeetupsPge() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            'https://react-app-63012-default-rtdb.firebaseio.com/meetups.json'
        )
            .then((response) =>{
                return response.json();
            })
            .then((data) => {

                const meetups =[];
                for (const key in data ) {
                    const meetup ={
                        id:key,
                        ...data[key]
                    };
                    meetups.push(meetup);
                    
                }


                setIsLoading(false);
                setLoadedMeetups(meetups);
            });
    }, []);

    if (isLoading) {
        return(
            <section>
                <h2>Loading Data, Please Wait Few Secound </h2>
            </section>
        );
    }

    return (
        <section>
            <h1>All Meetups</h1>

            <MeetupList meetups ={loadedMeetups}/>
        </section>
    );
}

export default AllMeetupsPge;