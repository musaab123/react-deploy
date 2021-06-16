import {Route ,Switch} from 'react-router-dom';
import AllMeetupsPge from './pages/AllMeetups';
import FavoritesPage from './pages/Favroites';
import NewMeetupPage from './pages/NewMeetup';
import Layout from './components/layout/layout';
function App() {
  return( 
    <Layout>
    
      <Switch>
      <Route path='/' exact>
        <AllMeetupsPge/>
      </Route>

      <Route path='/new-meetup'>
        <NewMeetupPage/>
      </Route>

      <Route path='/favroite'>
        <FavoritesPage/>
      </Route>
      </Switch>
    </Layout>
    );
}

export default App;
