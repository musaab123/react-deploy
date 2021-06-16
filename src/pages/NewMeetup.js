import { useHistory } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
    const hostory = useHistory();
    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-app-63012-default-rtdb.firebaseio.com/meetups.json',
            {
                method : 'POST',
                body : JSON.stringify(meetupData),
                headers: {
                    'Content-Type':'application/json'
                }
            }
         ).then(() =>{
            hostory.replace('/');

         });
 
    }
    return (
        <section>
            <h1> Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    );
}

export default NewMeetupPage;