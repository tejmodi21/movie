import React from 'react';
import Home from './Home';
import {BrowserRouter, Route} from 'react-router-dom';
import MovieList from './MovieList';
import BuyTickets from './BuyTickets';


const App = () => {
return (
    <div className="container">
        <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/movies/upcoming/:id" component={MovieList} />
        <Route path="/movies/upcoming/:id/book-tickets" component={BuyTickets} />
        </BrowserRouter>
        
    </div>
);
}

export default App;