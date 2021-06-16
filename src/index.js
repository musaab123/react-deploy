import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import {FavroitesContextProvider} from './store/favorites-context';

ReactDOM.render(
    <FavroitesContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </FavroitesContextProvider>,
   document.getElementById('root')
   
   );  

  
    
 


