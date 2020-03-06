import { combineReducers} from 'redux';
import {MOVIES_LIST, 
        MOVIE_DETAILS, } from '../actions/type';

const movieList = (state = [], action) => {
    switch(action.type){
        case MOVIES_LIST:
            return action.payload;
        default: 
            return state;
    }
};

const movieDetails = (state = {}, action) => {
    switch(action.type){
        case MOVIE_DETAILS: 
            return action.payload;
        default: 
            return state;    
    }
}



const authDetails = () => {

    return {
        api: '1d7e52e07b0a5958e78e0b936b84ca92',
        baseUrl: 'https://api.themoviedb.org/3/movie/',
        imageurl: 'https://image.tmdb.org/t/p/w500/'
    };
}
 
export default combineReducers ({
    movies: movieList, 
    movie: movieDetails,
    auth: authDetails
});
